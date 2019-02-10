/**
 *
 * Application container - Blank
 *
 * This component is the framework around the entire application, and should only
 * contain code that should be seem on all pages.(e.g. navigation bar, topbar and etc.)
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'
import { push } from 'connected-react-router'

// UI framework

// Style
import './index.css'

// Class Blank, Blank component for application
class Blank extends Component {
    /**
     * constructor function
     * @param {*} props
     */
    constructor(props) {
        super(props)
    }

    render() {
        return <div>Blank Page</div>
    }
}

// Default props
Blank.defaultProps = {}

// Prop attributes types
Blank.propTypes = {}

/**
 * mapStateToProps is a function provided to pull data from the store when it changes,
 * and pass those values as props to your component.
 *
 * @param {*} state
 */
const mapStateToProps = state => ({})

/**
 * mapDispatchToProps is a function provided to make use of the store's dispatch function,
 * usually by creating pre-bound versions of action creators that will automatically
 * dispatch their actions as soon as they are called.
 *
 * @param {*} dispatch
 */
const mapDispatchToProps = dispatch => ({
    navTo: location => dispatch(push(location)),
})

// Export Blank container
export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { pure: false }
)(Blank)
