import React, { Fragment } from 'react'
import "../App.css"

function nav() {

    
  return (
    <Fragment>
        <div className="nav">
            <div className="left"><h6>PORTFOLIO.</h6></div>
            <div className="right">
                <a  href="">Home</a>
                <a href="">About</a>
                <a href="">Works</a>
                <a href="">Block</a>
                <a href="">Contact</a>
            </div>
        </div>
    </Fragment>
  )
}

export default nav