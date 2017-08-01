import React from 'react';
import Card from './Card.jsx';
import Navigation from './Navigation.jsx';

export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            cardStore: {
                card1: {
                    id: 'card1',
                    type: 'histo',
                    parameter: 'Stammumfg',
                },
                card2: {
                    id: 'card2',
                    type: 'hist',
                    parameter: 'Standalter',
                },
            },
            selected: ['card1', 'card2'], // set verwenden?
        };
    }


    render() {
        return (
            <div className="wrapper">
                <Navigation />
                <div style={{textAlign: 'center'}}>
                    {
                        this.state.selected.map((key) => {
                            return <Card key={key} id={key} data={this.state.cardStore[key]}/>;
                        })
                    }
                </div>
            </div>
        );
    }
}
