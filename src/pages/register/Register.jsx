import React from 'react'
import { NavLink } from 'react-router'

const Register = () => {
  return (
    <div>
        <h1>REGISTER</h1>

        <NavLink to="/Register" className="btn btn-primary">
            GO TO HOMEPAGE
        </NavLink>
    </div>
  )
}

export default Register