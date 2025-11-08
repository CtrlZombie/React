import React, { Component } from 'react';

const withLoading = (WrappedComponent) => {
  return class WithLoading extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: true
      };
    }

    componentDidMount() {
      this.timer = setTimeout(() => {
        this.setState({ isLoading: false });
      }, 2000);
    }

    componentWillUnmount() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
    }

    render() {
      const { isLoading } = this.state;
      
      if (isLoading) {
        return <div>Загрузка...</div>;
      }

      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withLoading;