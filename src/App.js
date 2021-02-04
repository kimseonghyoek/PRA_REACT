import React from 'react';
import LifecycleExample from './Component/LifecyleExample';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasDestroyed: false};
  }
  componentDidMount() {
    this.setState({ hasDestroyed: true });
  }

  render() {
    return (
      <div>
        <div>
          {this.state.hasDestroyed? null : <LifecycleExample></LifecycleExample>}
        </div>
      </div>
    );
  }
}

export default App;