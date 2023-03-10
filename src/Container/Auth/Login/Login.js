import React from 'react';
import Navbar from '../../../Component/Navbar/Navbar';
import Footer from '../../../Component/Footer/Footer';
import LoginArea from './LoginArea';

const Login = () => {
  return (
    <React.Fragment>
        <Navbar />
        <LoginArea />
        <Footer />
    </React.Fragment>
  )
}

export default Login