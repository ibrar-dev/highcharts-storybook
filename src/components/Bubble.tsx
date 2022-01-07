import React, {FC} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
require('highcharts/highcharts-more.js')(Highcharts);

type Props ={
  title: string,
  subtitle: string,
  height: number,
  lengend: boolean,
  width: number
  data: []
}

const dataForChart = [
  [1, 4, 15],
  [2, 4, 9],
  [2, 3, 8],
  [2, 2, 7],
  [2, 1, 6],
  [3, 4, 9],
  [4, 4, 3],
  [4, 3, 8],
  [4, 2, 4],
  [4, 1, 4],
  [5, 4, 8],
  [5, 3, 4],
  [5, 2, 3],
  [5, 1, 3],
  [6, 4, 8],
  [6, 3, 5],
  [6, 2, 4],
  [6, 1, 6],
  [7, 4, 5],
  [7, 3, 4],
  [7, 2, 5],
  [7, 1, 3],
  [8, 4, 4],
  [8, 3, 8],
  [8, 2, 3],
  [8, 1, 5],
  [9, 4, 8],
  [9, 3, 3],
  [9, 2, 4],
  [9, 1, 8],
];

  const Bubble: FC<Props> = ({title, subtitle, height, width, data = dataForChart, lengend=false}) => {

    const options = {
      chart: {
        height: height,
        width: width,
        type: 'bubble',
        zoomType: 'xy'
        },
        title: {
          text: title
        },
        subtitle: {
          text: subtitle
         },
        credits: {
          enabled: false
        },
        legend:{ enabled:lengend },
        xAxis: {
          categories: ['','', '', '', '',  '', '', '', '', ''],
          gridLineColor: 'transparent',
      
       },
       yAxis: {
          title: false,
        categories: ['', 'Line 4', 'Line 3', 'Line 2',  'Line 1', ''],
        gridLineColor: 'transparent',
       },	
        series: [
            {
              color: '#A8B2BA',
              borderColor: 'transparent',
                data: data,
                sizeBy: 'width',
                name: 'Size by width'
            }
            ]
        };
    return (
      <div >
        <HighchartsReact  highcharts={Highcharts} options={options} />
      </div>
    );
  } 

  export default Bubble;
