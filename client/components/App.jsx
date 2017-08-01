import React from 'react';
import Card from './Card.jsx';
import Navigation from './Navigation.jsx';


export default class App extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="wrapper">
                <Navigation />
                <div style={{textAlign: 'center'}}>
                    {
                        this.props.selectedCards.map((key) => {
                            return <Card key={key} id={key} data={this.props.cardStore[key]}/>;
                        })
                    }
                </div>
            </div>
        );
    }
}
