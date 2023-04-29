import React from 'react'
import {Outlet, Navigate} from 'react-router-dom';

function Protected() {
    const auth = {signIn: true}
  return (
    <div>
        {auth.signIn ? <Outlet /> : <Navigate to ="/signIn"/> }
    </div>
  )
}

export default Protected