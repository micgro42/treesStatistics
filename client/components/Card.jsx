import React from 'react';
import dc from 'dc';


export default class Card extends React.Component {

    componentDidMount(){
        console.log('scatter did mount');
        const chart = dc.scatterPlot(`#${this.props.id}`);
        // this.configure();
        // this.chart.render();
    }


    render() {
        console.log(this.props);
        return (
            <div id={this.props.id}/>);
            {/*<div id=${this.props.key} />);*/}
    }
}
