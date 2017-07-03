import React from 'react';
import Card from './Card.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <Card id='key1' foo="bar" />
            </div>);
    }
}
