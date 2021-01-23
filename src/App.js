import React from 'react';
import Todaytudo from './Component/Todaytudo';
 import MyComponent from './Component/MyComponent';
 import PropsComponent from './Component/PropsComponent'
 import ChildCompnet from './Component/ChildComponent';
 import BooleanComponent from './Component/BooleanComponent';
 import ChildCompnet2 from './Component/ChildComponent2';
 import DefaultPropsComponent from './Component/DefaultPropsComponent';

class App extends React.Component {
  render() {
    return  (
      <div>
        <DefaultPropsComponent />
    </div>
    );
  }
}

export default App;