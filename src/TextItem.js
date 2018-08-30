import React from 'react';
import { Input, Button } from 'antd';

class TextItem extends React.Component {
    render(){
        return <div><Input />
            <Button>删除</Button>
        </div>
    }
}

export default TextItem;