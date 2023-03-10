import React from 'react';
import { Link } from 'react-router-dom';
import classes from "./SignupArea.module.css";

const SignupArea = () => {
  return (
    <section className={classes.signup__section}>
        <div className={classes.logn_container}>
            <div className={classes.signup_box}>
                <div className={classes.signup_box_top_area}>
                    <p>Create an account</p>
                    <div className={classes.signup_input_area}>
                        <input type="text" placeholder='Firstname' className={classes.signup_input} />
                        <input type="text" placeholder='Lastname' className={classes.signup_input} />
                        <input type="text" placeholder='Username or Email' className={classes.signup_input} />
                        <input type="password" placeholder='Password' className={classes.signup_input} />
                    </div>
                    <button className={classes.signup_btn}>SignUp</button>
                </div>

                <div className={classes.signup_box_bottom_area}>
                    <small>Already have an account? <Link to='/Login' className={classes.login_link}>Login</Link></small>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SignupArea;