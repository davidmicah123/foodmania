import { configureStore, createSlice, current } from "@reduxjs/toolkit";
import { connect } from "react-redux";

// const getState = () => {
//     let initialState = {
//         restaurant: {
//             currentRestaurantId: null,
//         }
//     }
//     const storedState = localStorage.getItem("app_state");

//     return storedState ? JSON.parse(storedState) : initialState;
// }

const getState = () => {
    const storedState = localStorage.getItem("app_state");
    let initialState = {
        restaurant: {
            currentRestaurantId: null,
            isNavbarOpen: false,
        }
    }
    if (storedState) {
        try {
            const parsedState = JSON.parse(storedState);
            initialState = {
                ...initialState,
                restaurant: {
                    ...initialState.restaurant,
                    ...parsedState.restaurant
                }
            }
        } catch (e) {
            console.error("Failed to parse app_state from localStorage", e);
        }
    }

    return initialState;
}


const appState = getState();

export let getAppState = getState();

const restaurantSlice = createSlice({
    name: "restaurant",
    initialState: appState.restaurant,
    reducers: {
        openNavbar(state){
            state.isNavbarOpen = true;

            appState.restaurant = current(state);
            localStorage.setItem("app_state", JSON.stringify(appState));
        },
        closeNavbar(state){
            state.isNavbarOpen = false;

            appState.restaurant = current(state);
            localStorage.setItem("app_state", JSON.stringify(appState));
        },
        setcurrentRestaurantId(state, { payload }){
            state.currentRestaurantId = payload.currentRestaurantId;

            appState.restaurant = current(state);
            localStorage.setItem("app_state", JSON.stringify(appState));
        }
    }

});

export const restaurantActions = restaurantSlice.actions;

const store = configureStore({
    reducer: {
        restaurant: restaurantSlice.reducer
    }
});

const mapStateToProps = (state) => ({
    redux: {restaurant: state.restaurant}
})

export const reduxWrapper = connect(mapStateToProps);

export default store;