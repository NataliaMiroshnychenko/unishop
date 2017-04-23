import React, { Component } from 'react';

class AboutPage extends Component {
    render() {
        console.log(this.props.data);
        return (
            <div>{this.props.text}</div>
        );
    }
}
export default AboutPage;