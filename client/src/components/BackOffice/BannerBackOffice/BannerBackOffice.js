import React from 'react'
import { NavLink } from 'react-router-dom'

import './BannerBackOffice.css'

const activeLink = ({ isActive }) => {
    return isActive ? "active-link" : ""
}

const BannerBackOffice = ({ title }) => {
    return (
        <div className="banner ">
            <h1 className="banner__title" > {title} </h1>
            <div className='back__office-link'>
                <NavLink to="/back-projets" className={activeLink} >
                    Projets
                </NavLink>
            </div>
            <div className='back__office-link'>
                <NavLink to="/back-mobilier" className={activeLink} >
                    Mobilier
                </NavLink>
            </div>
            <div className='back__office-link'>
                <NavLink to="/back-admin" className={activeLink} >
                    Administration
                </NavLink>
            </div>
        </div>
    )
}

export default BannerBackOffice