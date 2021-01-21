import React from 'react';
import Todaytudo from './Component/Todaytudo';
 import MyComponent from './Component/MyComponent';
 import PropsComponent from './Component/PropsComponent'
 import ChildCompnet from './Component/ChildComponent';
 import BooleanComponent from './Component/BooleanComponent';

class App extends React.Component {
  render() {
    return  (
      <div>
      <div><b>지루할 때 : </b> <BooleanComponent bored></BooleanComponent></div>
      <div><b>즐거울 때 : </b> <BooleanComponent></BooleanComponent></div>
    </div>
    );
  }
}

export default App;