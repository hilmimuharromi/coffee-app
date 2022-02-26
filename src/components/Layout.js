import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import BottomTab from './BottomTab'
export default function Layout(props) {
  const location = useLocation()
  const navigate = useNavigate()

  let user = JSON.parse(localStorage.getItem("user"))
  useEffect(() => {
    if (!user && location.pathname !== "/login") {
      navigate("/login")
    }
    //eslint-disable-next-line
  }, [user])

  return (
    <div className='layout'>
      <div className='mobile-view'>
        {props.children}
        {
          location.pathname !== "/login" &&
          <BottomTab />
        }
      </div>
    </div>
  )
}
