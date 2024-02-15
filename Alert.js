import React from 'react'
import PropTypes from 'prop-types'



function Alert(props) {
    
    return (
        props.alert && <div role="alert" className={'alert alert-${props.alert.type} alert-dismissible fade show'}>
        <strong>{props.alert.msg}</strong>:{props.alert.type}
        </div>
        )
    }
    export default Alert