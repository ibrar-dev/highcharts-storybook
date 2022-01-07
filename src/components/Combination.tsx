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


const dataForChart = [
  {
    type: 'column',
    name: 'Jane',
    color: '#9575CD',
    data: [6, 3 ,2 , 4, 2]
},
{
    type: 'spline',
    name: 'Average',
    data: [3, 2.67, 3, 6.33, 3.33],
    color: '#87E3E7',
    marker: {
        /* lineWidth: 1, */
        // lineColor: Highcharts.getOptions().colors[3],
        fillColor: '#87E3E7'
    }

}
]

  const Combination: FC<Props> = ({title, subtitle, height, width, data = dataForChart, lengend=false}) => {
    
    const options = {
      chart: {
        height: height,
        width: width,
      },
      title: {
        text: title
      },
      subtitle: {
       text: subtitle
      },
      xAxis: {
        categories: ['Problem1','Problem2', 'Problem3', 'Problem4', 'Problem5']
      },
      legend:{ enabled:lengend },

      // labels: {
      //   items: [{
      //       // html: 'Total fruit consumption',
      //       style: {
      //           left: '50px',
      //           top: '18px',
      //           color:  'black'
      //       }
      //   }]
      // },
      series: dataForChart
      };
    return (
      <div >
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    );
  } 

  export default Combination;
