import React, {FC} from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

type Props ={
    title: string,
    subtitle: string,
    height: number,
    lengend: boolean,
    width: number
    data: []
}

const dataForChart = [{
    name: 'Tokyo',
    data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
    color: "#6A7885",
  
  }, {
    name: 'New York',
    data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3],
    color: "#6A7885"
  
  }, {
    name: 'London',
    data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2],
    color: "#6A7885"
  }, {
    name: 'Berlin',
    data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1],
    color: "#6A7885"
  }];

  const Column: FC<Props> = ({title, subtitle, height, width, data = dataForChart, lengend=false}) =>{
    const options = {
        chart: {
          type: 'column',
          height: height,
          width: width,
        },
     
        title: {
          text: title
        },
        subtitle: {
          text: subtitle
      },
      legend:{ enabled:lengend },
    
      xAxis: {
        // lineColor: '#000',
        // lineWidth:2,
        // plotBands: [
        //   {
        //     // mark the weekend
        //     color: "pink",
        //     from: 0.6,
        //     to: 1.4,
        //     label: {
        //       // text: 'Plot band',
        //       align: "center",
             
        //     }
        //   },
        //   {
        //     // mark the weekend
        //     color: "pink",
        //     from: -0.4,
        //     to: 0.4,
        //     label: {
        //       // text: 'Plot band',
        //       align: "center",
        //       x: -10
        //     }
        //   }
        // ],
        gridTextColor: '#ffffff',
    
        gridLineColor: 'transparent',
        lineWidth: 0,
        minorGridLineWidth: 0,
        labels: {
          enabled: false
        },
        tickColor: 'transparent',
        showEmpty: false,
        minorTickLength: 0,
        tickLength: 0,
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ],
        crosshair: true
      },
    yAxis: {
      gridLineColor: 'transparent',
      gridTextColor: '#ffffff',
      lineWidth: 0,
      minorGridLineWidth: 0,
      min: 0,
      labels: {
        enabled: false
    },
    tickColor: 'transparent',
    showEmpty: false,
    
    minorTickLength: 0,
     tickLength: 0,
      // title: {
      //     text: 'Rainfall (mm)'
      // }
      // crosshair: true
    
    }, 
      tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true 
    },
    plotOptions: {
      column: {
          pointPadding: 0.2,
          borderWidth: 0,
      }
    },
    series: data
    };
    return (
        <div className='testing'>
          <HighchartsReact className="testing" highcharts={Highcharts} options={options} />
        </div>
      );
  }
   

  export default Column;
