import React from 'react'
import PropTypes from 'prop-types'

export default function NavBar(props) {
    return (
        <nav className={`NavBar NavBar-expand-lg NavBar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="NavBar-brand" style={{color: props.mode==='light'?'blue':'white'}}>{props.title}</a>
                <button className="NavBar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#NavBarSupportedContent" aria-controls="NavBarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="NavBar-toggler-icon"></span>
                </button>
                <div className="collapse NavBar-collapse" id="NavBarSupportedContent">
                    <ul className="NavBar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" style={{color: props.mode==='light'?'blue':'white'}} aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/" style={{color: props.mode==='light'?'blue':'white'}}>{props.aboutText}</a>
                        </li>
                    </ul>
                    
                    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

NavBar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

NavBar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
  };