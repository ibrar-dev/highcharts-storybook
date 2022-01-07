import React, {FC} from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import addTreemapModule from 'highcharts/modules/treemap';
import PropTypes from "prop-types";

addTreemapModule(Highcharts);
type Props ={
    title: string,
    layoutAlgorithms: "stripes"  | "sliceAndDice" | "squarified" | "strip",
    height: number,
    width: number
    data: []
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
  const TreeMap: FC<Props> = ({ title, layoutAlgorithms, height, width, data = datas }) => {
    const options = {
        title: {
            text: title
        },
        chart: {
            width: width,
            height: height
        },
        series: [{
          type: 'treemap',
          allowDrillToNode: true,
          height: "200",
          layoutAlgorithm: layoutAlgorithms,
           data: data
        }]
    };
  return (
    <div >
      <HighchartsReact  highcharts={Highcharts} options={options} />
    </div>
  );
}
//   TreeMap.propTypes = {
//     title: PropTypes.string,
//     backgroundColor: PropTypes.string,
//     size: PropTypes.oneOf(["sm", "md", "lg"]),
//     handleClick: PropTypes.func,
//   }

  export default TreeMap;







