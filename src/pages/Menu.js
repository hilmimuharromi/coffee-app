import React, { useState, useEffect } from 'react'
import axios from "axios"
import { ItemMenu } from "../components/menu"
function Menu() {
  const user = JSON.parse(localStorage.getItem("user"))
  const [dataMenus, setDataMenus] = useState([])
  const [activeTab, setActiveTab] = useState(0)


  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios({
          method: "POST",
          url: "https://soal.staging.id/api/menu",
          headers: {
            "Authorization": `Bearer ${user.access_token}`
          },
          data: {
            "show_all": 1
          }
        })
        if (data) {
          setDataMenus(data.result.categories)
        }
      } catch (err) {
        console.log("error data menu", err)
      }

    }
    getData()
  }, [user])

  return (
    <div>
      <div className='flex column center padding-10 bg-white'>
        <div>
          <h3>Menu</h3>
        </div>
        <div className='flex flex-nowrap overflow-x' style={{ width: '400px' }}>
          {
            dataMenus.map((item, index) => (
              <div
                key={index}
                className={`tab flex flex-nowrap center p-10 ${activeTab === index && "tab-active"}`}
                onClick={() => setActiveTab(index)}
              >
                {item.category_name}
              </div>
            ))
          }
        </div>
      </div>
      {
        dataMenus.map((item, index) => (
          index >= activeTab &&
          <div className='mb-20'>
            <div className='mb-10 bold'>
              {item.category_name}
            </div>
            <ItemMenu items={item.menu} />
          </div>
        ))
      }
    </div>
  )
}

export default Menu