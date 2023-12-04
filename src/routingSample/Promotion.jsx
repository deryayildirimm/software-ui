import React from 'react';
import './Promotion.css'; // Stil dosyanızın yolunu belirtin
import { Button, Flex, Image } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { useNavigate, NavLink } from "react-router-dom";

export const Promotion = () => {

    return (
        <div className='main'>
            <header className="header">
                <div className='header-left'>
                    <Button type="text" className='textBut'>FABRE</Button>
                </div>
                <div className='header-center'>
                    <Button type="text" className='textBut'>Çözümler</Button>
                    <Button type="text" className='textBut'>Hızlı Öğrenme</Button>
                    <Button type="text" className='textBut'>Hakkımızda</Button>

                </div>
                <div className='header-right'>
                    <NavLink to="/login"><Button type="text" className='textBut'>Giriş</Button></NavLink>
                    
                    <NavLink to="/signup"><Button type="primary" className='primaryBut'>Hemen Başla</Button></NavLink>                    
                </div>
            </header>
            <main className="main-content">
                <div className='main-top'>
                    <Button type="primary" icon={<RightOutlined style={{ position: 'right' }} />} style={{ backgroundColor: 'gray' }}>NEDEN FREELANCER</Button>
                    <h1 className='mainText'>Yetenekli danışmanlarla büyüyün ve büyütün.</h1>
                </div>
                <div className='main-bottom'>
                    <p className='bottomText'>Birçok freelancer çalışan kadromuzla iş sürecinizi profesyonel bir şekilde yönetmek için</p>
                    <NavLink to="/signup"><Button type="primary" className='primaryBut'>Hemen Başla</Button></NavLink> 
                    

                </div>
            </main>
            <img
                className='img'
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
        </div>

    );
};

export default Promotion;