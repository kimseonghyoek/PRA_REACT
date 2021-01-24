import React from 'react';
import Todaytudo from './Component/Todaytudo';
 import MyComponent from './Component/MyComponent';
 import PropsComponent from './Component/PropsComponent'
 import ChildCompnet from './Component/ChildComponent';
 import BooleanComponent from './Component/BooleanComponent';
 import ChildCompnet2 from './Component/ChildComponent2';
 import DefaultPropsComponent from './Component/DefaultPropsComponent';
 import ChildProperty from './Component/ChildProperty';
 import StateExample from './Component/Component_state/StateExample';
 import ForceUpdateExample from './Component/Component_state/ForceUpdateExample';

class App extends React.Component {
  render() {
    return  (
      <div>
        <ForceUpdateExample/>
      </div>
    );
  }
}

export default App;