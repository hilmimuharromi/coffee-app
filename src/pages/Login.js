import React, {useState, useEffect} from 'react'
import LogoTech from "../assets/logotech.png"
import axios from "axios"
import { Spinner } from '../components'
import {useNavigate} from "react-router-dom"

const urlLogin  = "https://soal.staging.id/oauth/token"
function Login() {
    const Navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    let user = JSON.parse(localStorage.getItem("user"))

    useEffect(() => {
        if(user) {
            Navigate("/")
        }
        //eslint-disable-next-line
    }, [user])



    const handleLogin = async () => {
        const payload = new FormData()
        payload.append("username", email)
        payload.append("password", password)
        payload.append("grant_type", "password")
        payload.append("client_secret", "0a40f69db4e5fd2f4ac65a090f31b823")
        payload.append("client_id", "e78869f77986684a")
        setLoading(true)
        try {
            const {data} = await axios({
                method: "POST",
                url: urlLogin,
                data:payload
            })
            if(data) {
                console.log("result", data)
                localStorage.setItem("user", JSON.stringify(data))
            }
        } catch(err){
            console.log("error", err)
        }finally {
            setLoading(false)
        }
    }
    return (
        <div>
            <div style={{ minHeight: "40vh"}} className="flex center">
                <img width={400} height={200} src={LogoTech} alt="logotech" />
            </div>
            <div className="flex column center">
                <div className="flex column center mb-10">
                    <label>Email</label>
                    <input type={"email"} className='input shadow'
                    onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="flex column center mb-20">
                    <label>Password</label>
                    <input type={"password"} className='input shadow'
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className='shadow btn-primary flex center'
                onClick={handleLogin}
                disabled={loading}
                >
                    Login 
                    {
                        loading && <Spinner />
                    }
                </button>
            </div>
        </div>
    )
}

export default Login