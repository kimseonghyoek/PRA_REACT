import React from 'react';
import PropsTypes from 'prop-types';

 class ChildComponent extends React.Component {
     render() {
         const {
             boolValue,
             numValue, 
             arrayValue,
             objValue, 
             nodeValue,
             funcValue
         } = this.props;

         return(
             <div>
                 <span>불리언 값: {boolValue}</span>
                 <span>숫자 값: {numValue}</span>
                 <span>배열 값: {arrayValue}</span>
                 <span>객체 값: {String(objValue)}</span>   
                 <span>노드 값: {nodeValue}</span>
                 <span>함수 값: {String(funcValue)}</span>
             </div>
         );
     }
 }

 ChildComponent.propTypes = {
     boolValue: PropsTypes.bool,
     numbValue: PropsTypes.number,
     arraylValue: PropsTypes.arrayOf(PropsTypes.number),
     objValue: PropsTypes.object,
     nodeValue: PropsTypes.node,
     funcValue: PropsTypes.func,
 }

export default ChildComponent;