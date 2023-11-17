import React, { Component } from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
// import SigninSide from './SigninSide'
import VideoCom from './VideoCom'
import NavComp from './NavComp'
// import AboutComp from './AboutComp'
import SignUpComp from './SignUpComp'
import SignInSide from './SignInSide'
// import ParentComponent from './ParentComponent'

export class LoginToRegComp extends Component {
    render() {
        return (
            <div>

             <BrowserRouter>
                <Routes>
                     <Route path='reg' element={<SignUpComp></SignUpComp>}></Route>
                </Routes>
             </BrowserRouter>

             
            </div>
        )
    }
}

export default LoginToRegComp