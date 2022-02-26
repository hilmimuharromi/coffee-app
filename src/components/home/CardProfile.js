import React from 'react'
import {Spinner} from "../index"
import {Rupiah} from "../../utils"

function CardProfile({ data, onClickQr, loading }) {
  if(loading) {
    return (
    <div className='card-profile shadow flex center'>
      <Spinner />
      </div>
    )
  }
  return (
    <div className='card-profile shadow'>
      <div>
        {data.greeting} ,
      </div>
      <div className='bold'>
        {data.name}
      </div>
      <div className='flex w-100 mt-10'>
        <div className='flex column center mr-10'
        >
          <div className='circle-card shadow flex column center'
            onClick={onClickQr}>
            <img width={30}
            alt="qrcode-small"
              src={data.qrcode}
            />
          </div>
        </div>
        <div className='flex column center mr-10'>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <div  
        className='flex column center w-100 p-10'
        >
          <div className='flex justify-between w-100'
          >
            <div>Saldo</div>
            <div className='bold'>
              {Rupiah(data.saldo)}
            </div>
          </div>
          <div className='flex justify-between w-100 mt-10'>
            <div>Points</div>
            <div className='text-green'>
              {data.point}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardProfile