import React from "react";
import { Sidebartypes } from "./sidebar.types";
import LunarLogo from '../../../public/images/Lunara-logo.png'
import './sidebar.styles.css'
import { color } from "chart.js/helpers";
const Sidebar: React.FC<Sidebartypes> = (props) => {
    return (
        <div className="SideBarMainContainer">
            <div style={{ paddingLeft: '20px', paddingTop: '20px', paddingBottom: '20px', display:'flex', justifyContent:'space-between' }}>
                <img src={"/images/Lunara-logo.png"} className="w-40" alt="Lunar Logo" />
                <button onClick={()=>{props.setShowSidebar(false)}} className="text-white font-bold text-[20px] mr-5 cross-sidebar hidden"> X</button>
            </div>
            <div className="container-child">
                <div className="img-text-container">
                    <img src={"/images/sidebar-img-1.png"} className="sidebar-img" />
                    <p className="sidebar-text">Runway Overview</p>
                </div>
                <div className="img-text-container">
                    <img src={"/images/sidebar-img-2.png"} className="sidebar-img" />
                    <p className="sidebar-text">Financial Heath</p>
                </div>
                <div className="img-text-container">
                    <img src={"/images/sidebar-img-3.png"} className="sidebar-img" />
                    <p className="sidebar-text">Data Sources</p>
                </div>
            </div>
            <div className="container-child container-child-2">
                <div className="img-text-container">
                    <img src={"/images/sidebar-img-4.png"} className="sidebar-img" />
                    <p className="sidebar-text">Runway Overview</p>
                </div>
                <div className="img-text-container">
                    <img src={"/images/sidebar-img-5.png"} className="sidebar-img" />
                    <p className="sidebar-text">Financial Heath</p>
                </div>

            </div>
            <div style={{ paddingLeft: '2vw', paddingRight: '2vw', display: 'flex', gap: '1vw', alignItems: 'center', justifyContent: 'space-between' }}>
                <p style={{ color: '#9B9B9B', fontSize: '.8vw' }}>Linked Scenarios</p>
                <img src={"/images/sidebar-plus-button.png"} style={{ width: '2vw' }} />
            </div>
            <div className="container-child container-child-3">
                <div className="img-text-container">
                    <img src={"/images/sidebar-img-6.png"} className="sidebar-img" />
                    <p className="sidebar-text">Lunara Banking</p>
                </div>
                <div className="img-text-container">
                    <img src={"/images/sidebar-img-7.png"} className="sidebar-img" />
                    <p className="sidebar-text">Upgrade to plus</p>
                    <img src={"/images/sidebar-img-8.png"} className="w-10" />

                </div>
                <div>
                    <img src={"/images/sidebar-img-9.png"} className="w-50" />
                </div>
                
            </div>
        </div>
    )
}

export default Sidebar