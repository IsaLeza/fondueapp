import React from 'react';
import Fondue from './images/Fondue.jpg'
import { Link } from "react-router-dom";


const Main = () => {

    return (
        <div style={{ display: 'flex' }}>
            <div style={{
                backgroundImage: `url(${Fondue})`,
                backgroundSize: 'cover',
                height: '80vh',
                width: '50%'
            }} />
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '80vh',
                width: '50%',
                backgroundColor: '#fff'
            }}>
                <h1 style={{ color: "orange", paddingLeft: "3%", paddingBottom: "5%" }}>Welcome to Camerello's Fondue</h1>
                <h3>Dive into Deliciousness with Every Dip</h3>
                <Link to="/booking">
                    <button style={{
                        background: "#F34209",
                        color: "#FFF",
                        borderColor: "#F34209",
                        borderRadius: "25px",
                        height: "2.4rem",
                        width: "9rem",
                        marginTop: "5%"
                    }}

                    >Book a Table</button>
                </Link>
            </div>
            <div>

            </div>
        </div>
    );
}

export default Main;