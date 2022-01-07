import Combination from '../components/Combination';
import type { Story } from '@storybook/react';

export default {
    title:"Components/Charts",
    component: Combination,
}

type Props ={
    title: string,
    subtitle: string,
    height: number,
    lengend: boolean,
    width: number,
    data: any
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

const Template: Story<Props> = args => <Combination {...args} />

export const CombinationChart  = Template.bind({});

CombinationChart.args = {
    title: 'Column and Spline',
    subtitle: 'Source: WorldClimate.com',
    height: 400,
    lengend: false,
    width: 600,
    data: dataForChart  
};

  