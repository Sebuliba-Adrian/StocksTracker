import React, { Component } from 'react'
import { fetchData } from '../../apis';
import Plot from 'react-plotly.js';
import styles from './Dashboard.module.css';

export class Dashboard extends Component {
    state = {
        xValues:[],
        yValues:[],
        stockSymbols:[],
        stockSymbol:[]
    }

    async componentDidMount(){
      const[xValues, yValues]  = await fetchData();
      //console.log(xValues)
      this.setState({xValues, yValues});
    }
    render() {
        const {xValues, yValues} = this.state;
        if (!xValues || !yValues) {
            return "Loading ...";
        }
        return (
            <div className={styles.container}>
                <h1>Stock Market</h1>
        <Plot
          data={[
            {
              x: xValues,
              y: yValues,
              type: 'scatter',
              mode: 'lines+markers',
              marker: {color: 'red'},
            }
          ]}
          layout={{width: 720, height: 440, title: 'Stock Market Graph'}}
        />
            </div>
        )
    }
}

export default Dashboard
