import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import addTreemapModule from 'highcharts/modules/treemap';
addTreemapModule(Highcharts);

const options = {
    chart: {
        width: 500,
        height: 300
    },
    title: {
        text: 'Highcharts Treemap'
    },  
  series: [{
    type: 'treemap',
    allowDrillToNode: true,
  
    // height={400},
    layoutAlgorithm: 'sliceAndDice',
     data: [{
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
  }]
  
  };

  const App = () => (
    <div className='testing'>
      <HighchartsReact className="testing" highcharts={Highcharts} options={options} />
    </div>
  );

  export default App;
