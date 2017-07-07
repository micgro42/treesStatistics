import React from 'react';
import dc from 'dc';
import { scaleLinear } from 'd3-scale';
import crossfilter from 'crossfilter';

export default class Card extends React.Component {

    componentDidMount(){
        console.log('card did mount');
        const chart = dc.barChart(`#${this.props.id}`);
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
        var ndx = crossfilter(experiments);
        var runDimension = ndx.dimension(function(d) {
            return +d.Run;
        });
        var speedSumGroup = runDimension.group().reduceSum(function(d) {
            return d.Speed * d.Run / 1000;
        });


        chart
  .width(768)
  .height(480)
  .x(scaleLinear().domain([1, 20]))
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
        return (
            <div>
            <h2>hello world chart</h2>
            <div id={this.props.id}/>
            {/*<div id=${this.props.key} />);*/}
        </div>);
    }
}
