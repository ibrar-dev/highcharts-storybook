import TreeMap from '../components/TreeMap';
import type { Story } from '@storybook/react';

export default {
    title:"Components/Charts",
    component: TreeMap,
}
type Props ={
    title: string,
    layoutAlgorithms: "stripes"  | "sliceAndDice" | "squarified" | "strip",
    height: number,
    width: number,
    data: any
}
const datas = [{
    id: 'A',
    name: 'Apples',
    color: "#4DB6AC"
}, {
    id: 'B',
    name: 'Bananas',
    color: "#9575CD"
}, {
    id: 'O',
    name: 'Oranges',
    color: '#64B5F6'
},{
  id: 'c',
  name: 'Susanne',

  color: '#F06292'
},
 {
    name: 'Anne',
    parent: 'A',
    value: 5
}, {
    name: 'Rick',
    parent: 'A',
    value: 3
}, {
    name: 'Peter',
    parent: 'A',
    value: 4
}, {
    name: 'Anne',
    parent: 'B',
    value: 4
}, {
    name: 'Rick',
    parent: 'B',
    value: 4
}, {
    name: 'Peter',
    parent: 'B',
    value: 1
}, {
    name: 'Anne',
    parent: 'O',
    value: 1
}, {
    name: 'Rick',
    parent: 'O',
    value: 3
}, {
    name: 'Peter',
    parent: 'O',
    value: 3,
}, {
    name: 'Susanne',
    parent: 'c',
    value: 5,
  },
  {
    name: 'sss',
    parent: 'c',
    value: 6,
  }
]
const Template: Story<Props> = args => <TreeMap {...args} />
    
export const TreeMapChart  = Template.bind({});

TreeMapChart.args = {
    title: 'Tree Map Chart',
    layoutAlgorithms: "stripes",
    height: 300,
    width: 1100,
    data: datas
};