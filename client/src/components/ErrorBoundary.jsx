/* eslint-disable react/prop-types */
import { Component } from "react";

export default class ErrorBoundary extends Component {
    constructor() {
        super()
        this.state = {
            hasError: false,
        }
    }

    // eslint-disable-next-line no-unused-vars
    static GetDerivedStateFromError(err) {
        return {
            hasError:true
        }
    }

    render() {
        if (this.state.hasError) {
            return <h1>404</h1>
        }
        return this.props.children;
    }
}