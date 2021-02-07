import React from 'react';
import ShallowEqual from './Component/shallowEqual';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 10};
    this.resetCount  = this.resetCount.bind(this);
  }
  resetCount() {
    this.setState(({ count }) => ({ count: count +  10}));
  }
  
  render() {
    return (
      <div>
         <ShallowEqual/>
      </div>
    );
  }
}

export default App;