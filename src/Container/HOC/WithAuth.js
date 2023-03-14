import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import reduxWrapper from "../../Store/index";

const Error = (props) => {
    const navigate = useNavigate();
    useEffect( () => {
        if (this.props.redux.user.loggedIn === false && this.props.redux.user.JWT === null) {
            navigate('/Login');
        }
    });
}

const WithAuth = (WrappedComponent) => {
    
    const navigate = useNavigate();
    useEffect( () => {
        if (this.props.redux.user.loggedIn === false && this.props.redux.user.JWT === null) {
            navigate('/Login');
        }
    });

    function Wrapper(props) {
        return <WrappedComponent {...props} />;
    }
    

    if(this.props.redux.user.loggedIn === true && this.props.redux.user.JWT !== null){
        return Wrapper;
    }else{
        return reduxWrapper(Error);
    }

};

export default WithAuth;
