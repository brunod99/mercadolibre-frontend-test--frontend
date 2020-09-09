import React, { Component } from "react";
import Splash from "./components/Splash";

export default class ErrorBoundary extends Component {
  state = {
    error: null,
    errorInfo: null,
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    // If there are no errors render
    // the child components
    if (!this.state.errorInfo) {
      // eslint-disable-next-line react/prop-types
      return this.props.children;
    }

    // Display custom UI if there are errors
    // in our application
    return (
      <Splash>
        <h1 className="text-white">
          Hubo Un error :( Mira en la consulta para mas información
        </h1>
      </Splash>
    );
  }
}
