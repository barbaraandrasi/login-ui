import React from 'react'
import './MainWindow.css'
import Login from './Login'
import 'antd/dist/antd.css'

export default function MainWindow() {

    return (
      <div className="wrapper">
        <div className="main">
          <h1>Sign In</h1>
          <Login />
        </div>
      </div>
    )
}
