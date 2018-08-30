import React from 'react';
import { Button } from 'antd';

class TextItem extends React.Component {

    render(){
        return <div>
            <input />
            <Button disabled={this.props.disabled}>删除</Button>
        </div>
    }
}

export default TextItem;