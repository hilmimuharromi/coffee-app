import React from 'react'
import {Rupiah} from "../../utils"

function ItemMenu({ items }) {
  return (
    <div style={{width: '400px'}}>
      {
        items.map((item, index) => (
          <div key={index} className='bg-white shadow flex mb-10 p-10'>
            <div className='flex center'>
            <img width={50} height={50} src={item.photo} alt={"photo"+index} />
            </div>
            <div className='flex column mb-10 mr-10'>
              <div className='text-12  bold mb-0'>{item.name}</div>
              <div className='text-10'>
              {item.description}
              </div>
            </div>
            <div className='flex center text-12'>
              {Rupiah(item.price)}
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default ItemMenu