import React from 'react'
import close from "../../assets/close.png"
function ModalQrcode({ onClose, url }) {
    return (
        <div className='modal mobile-view'>
            <div className='flex justify-end mb-50 p-10'>
                <div onClick={onClose}>
                    <img width={30} src={close} alt="close icon"/>
                </div>
            </div>
            <div className='flex column center'>
                <h6>Show The QR Code below to the casier</h6>
                <img width={180} src={url} alt="qrcode detail" />
            </div>
        </div>
    )
}

export default ModalQrcode