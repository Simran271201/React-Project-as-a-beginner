import React from 'react'
import PropTypes from 'prop-types'

export default function NavBar(props) {
    return (
        <nav className="NavBar NavBar-expand-lg NavBar-dark bg-dark">
            <div className="container-fluid">
                <a className="NavBar-brand" href="/">{props.title}</a>
                <button className="NavBar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#NavBarSupportedContent" aria-controls="NavBarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="NavBar-toggler-icon"></span>
                </button>
                <div className="collapse NavBar-collapse" id="NavBarSupportedContent">
                    <ul className="NavBar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props.aboutText}</a>
                        </li>
                    </ul>
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