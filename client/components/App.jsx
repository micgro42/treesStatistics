import React from 'react';
import Card from './Card/Card.jsx';
import Navigation from './Navigation.jsx';


export default class App extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="wrapper">
                <Navigation
                    selectedCards={this.props.selectedCards}
                    cardStore={this.props.cardStore}
                    addCard={this.props.addCard}
                    removeCard={this.props.removeCard}
                />
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
