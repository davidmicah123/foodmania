import React from 'react'
import Footer from '../../../Component/Footer/Footer';
import Navbar from '../../../Component/Navbar/Navbar';
import SignupArea from './SignupArea';

const Signup = () => {
  return (
    <React.Fragment>
        <Navbar />
        <SignupArea />
        <Footer />
    </React.Fragment>
  )
}

export default Signup;