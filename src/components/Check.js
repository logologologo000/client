import React from "react";
import Navbar from './layouts/navbar.js'
import NavbarUser from './layouts/navbarUser.js'
import Signin from './Signin'
import { useBetween } from 'use-between'

const Check = () => {

    const {level} = useBetween(Signin)
    if (level[0].level == 1) {
        return (
        <NavbarUser />
        )
      } else {
        return (
        <Navbar />

        )
      }
    
}

export default Check