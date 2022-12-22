import React from 'react'

const Header = ({ title }) => {
    return (
        <div className="intro-img">
            <div className="intro-title">{title}</div>
            <div className="intro-subtitle">Home {">>"} {title}</div>
        </div>
    )
}

export default Header