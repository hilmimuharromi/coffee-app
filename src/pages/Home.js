import React, { useState, useEffect } from 'react'
import axios from "axios"
import {  CardProfile, ModalQrcode, CarouselSlider } from '../components/home'
import LogoTech from "../assets/logotech.png"
import PullToRefresh from 'react-simple-pull-to-refresh';
function Home() {
  const [loading, setLoading] = useState(true)
  const [dataProfile, setDataProfile] = useState("")
  const [qrcodeView, setQrcodeView] = useState(false)
  const user = JSON.parse(localStorage.getItem("user"))

  useEffect(() => {
    getData()
    //eslint-disable-next-line
  }, [])

  const getData = async () => {
    try {
      setLoading(true)
      const { data } = await axios({
        url: "https://soal.staging.id/api/home",
        method: "GET",
        headers: {
          "Authorization": `Bearer ${user.access_token}`
        }
      })
      if (data) {
        setDataProfile(data.result)
      }
    } catch (err) {
      console.log("error", err)
    } finally {
      setLoading(false)
    }
  }

  const handleRefresh = () => {
    return new Promise((resolve) => resolve(getData()))
  }

  return (
    <PullToRefresh onRefresh={handleRefresh}>
      <div>
        <div className="shadow bg-white">
          <img width={120} src={LogoTech} alt="logotech" />
        </div>
        <div style={{ minHeight: '20vh', padding: "10px" }}>
          <CardProfile
            data={dataProfile}
            onClickQr={() => setQrcodeView(!qrcodeView)}
            loading={loading}
          />
        </div>
        <div>
          <CarouselSlider banners={dataProfile.banner}
          loading={loading}
          />
        </div>
      </div>
      {
        qrcodeView &&
        <ModalQrcode
          onClose={() => setQrcodeView(!qrcodeView)}
          url={dataProfile.qrcode}
        />
      }
  </PullToRefresh>
  )
}

export default Home