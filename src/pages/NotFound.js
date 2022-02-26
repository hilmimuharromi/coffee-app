import React from 'react'
import {Link} from "react-router-dom"

function NotFound() {
   
  return (
    <div>
        <div>
            Not Found
        </div>
        <div>
            <Link to="/">
            <button>go home</button>
            </Link>
        </div>
    </div>
  )
}

export default NotFound