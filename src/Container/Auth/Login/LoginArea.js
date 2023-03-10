import React from 'react';
import { Link } from 'react-router-dom';
import classes from "./LoginArea.module.css";

function LoginArea() {
  return (
    <section className={classes.login__section}>
        <div className={classes.logn_container}>
            <div className={classes.login_box}>
                <div className={classes.login_box_top_area}>
                    <p>Login to your account</p>
                    <input type="text" placeholder='Username or Email' className={classes.login_input} />
                    <input type="password" placeholder='Password' className={classes.login_input} />
                    <button className={classes.login_btn}>Login</button>
                </div>

                <div className={classes.login_box_bottom_area}>
                    <small>Not registered? <Link to='/Signup' className={classes.signup_link}>Create an account</Link></small>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LoginArea