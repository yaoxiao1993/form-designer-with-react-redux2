import React from 'react';
import { Button } from 'antd';
import './index.css'
import PropTypes from 'prop-types';

class TextItem extends React.Component {
    static contextTypes = {
        store: PropTypes.object.isRequired,
    };

    render(){
        console.log(this.context)
        return <div>
            <input className="text"/>
            <Button disabled={this.props.disabled} onClick={()=>this.props.delete(this.props.id)}>删除</Button>
        </div>
    }
}

export default TextItem;