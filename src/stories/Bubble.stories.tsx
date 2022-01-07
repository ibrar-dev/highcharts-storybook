import Bubble from '../components/Bubble';
import type { Story } from '@storybook/react';

export default {
    title:"Components/Charts",
    component: Bubble,
}

type Props ={
    title: string,
    subtitle: string,
    height: number,
    lengend: boolean,
    width: number
    data: any
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
  

const Template: Story<Props> = args => <Bubble {...args} />

export const BubbleChart  = Template.bind({});

BubbleChart.args = {
    title: 'Bubble Chart',
    subtitle: 'Bubble Chart Description',
    height: 300,
    lengend: false,
    width: 600,
    data: dataForChart  
};