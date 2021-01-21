import React from 'react';

class MyComponet extends React.Component {
    render() {
        const name = this.props.name;

        return (
            <span>
                {name}
            </span>
        )
    }
}

export default MyComponet;