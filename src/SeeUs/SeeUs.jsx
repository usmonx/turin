import React from 'react'
import "./SeeUs.css"
import { Button } from 'antd'
import {FacebookOutlined, InstagramOutlined, SendOutlined, YoutubeOutlined} from "@ant-design/icons"
import { useNavigate } from "react-router-dom"

const SeeUs = () => {

    // const navigate = useNavigate()

    // const insta = () => {
    //     navigate("https://www.instagram.com/28_maktab_olmazor/")
    // }
    // const facebook = () => {
    //     navigate("https://www.facebook.com/28maktab.uzx")
    // }
    // const telegram = () => {
    //     navigate("https://t.me/maktab28qorasaroy")
    // }
    // const youtube = () => {
    //     navigate("https://youtu.be/a9v2OBcAYQk")
    // }

    return (
        <>
            <div className='container' >
                <span><h1>Bizni kuzatib boring </h1></span>
                <div className='iframes' >
                    <Button href='https://www.instagram.com/28_maktab_olmazor/' className='insta-button'><InstagramOutlined/> Instagram</Button>
                    <Button href='https://www.facebook.com/28maktab.uzx' className='facebook-button'><FacebookOutlined /> Facebook</Button>
                    <Button href='https://t.me/maktab28qorasaroy' className='telegram-button'><SendOutlined/> Telegram</Button>
                    <Button href='https://youtu.be/a9v2OBcAYQk' className='youtube-button'><YoutubeOutlined /> You Tube</Button>
                </div>
            </div>
        </>

    )
}

export default SeeUs