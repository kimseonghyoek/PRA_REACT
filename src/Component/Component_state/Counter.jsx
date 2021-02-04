import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    // state 정의
    this.state = {
      // Count 초깃값을 프로퍼티에서 전달 된 값으로 설정한다.
      count: props.count
    };
    this.increaseCounter = this.increaseCounter.bind(this);
  }
  increaseCounter() {
    // state 변경
    this.setState(({ count }) => ({count : count + 1}));
  }
  render() {
    return (
      <div>
        <span>카운트: {this.state.count}</span>
        <button onClick={this.increaseCounter}>카운트 증가</button>
      </div>
    );
  }
}

export default Counter;
