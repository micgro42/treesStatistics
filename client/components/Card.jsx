import React from 'react';
import dc from 'dc';
import { scaleLinear } from 'd3-scale';
import crossfilter from 'crossfilter';
import data from '../data.js';

export default class Card extends React.Component {

    componentDidMount(){
        console.log('card did mount');
        const chart = dc.barChart(`#${this.props.id}`);
        const parameter = this.props.data.parameter;
        const experiments = [
            {
                Expt: "1",
                Run: "1",
                Speed: 850,
            },
            {
                Expt: "1",
                Run: "2",
                Speed: 740,
            },
            {
                Expt: "1",
                Run: "3",
                Speed: 900,
            },
        ];
        // var ndx = crossfilter(experiments);
        const ndx = crossfilter(data);
        const runDimension = ndx.dimension(function(d) {
            return d[parameter];
            // return +d.Stammumfg;
        });
        const speedSumGroup = runDimension.group().reduceSum(function(d) {
            return 1;//Math.floor(d.Stammumfg/10)*10;
            // return Math.floor(d.Stammumfg/10)*10;
        });


        chart
  .width(768)
  .height(480)
  .x(scaleLinear().domain([1, 300]))
  .brushOn(false)
  .yAxisLabel("This is the Y Axis!")
  .dimension(runDimension)
  .group(speedSumGroup)
  .on('renderlet', function(chart) {
    chart.selectAll('rect').on("click", function(d) {
      console.log("click!", d);
    });
  });
chart.render();
    }


    render() {
        console.log(this.props);
        const style = {
            'display': 'inline-block',
            'boxShadow': '0 0 0.5em #999',
            'marginBottom': '1rem',
            'padding': '1rem',
        };
        return (
            <div>
                <div className="cardWrapper" style={style}>
                    <h2>{this.props.data.parameter}</h2>
                    <div id={this.props.id}/>
                    {/*<div id=${this.props.key} />);*/}
                </div>
            </div>);
    }
}
