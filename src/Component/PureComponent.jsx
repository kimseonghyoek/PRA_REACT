import React from 'react';
import shallowEqual from 'shallow-equal';

    const obj = { name : 'park'};
    const mylist = [1,2,3, obj];
    const list1 = [1,2,3, obj];
    const list2 = [1,2,3, { name : 'park'}];

export class PureComponent extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        return !shallowEqual(this.props, nextProps) ||
                 !shallowEqual(this.state, nextState)
    }
}