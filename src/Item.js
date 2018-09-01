import React from 'react';
import { Button,DatePicker } from 'antd';
import './index.css'
import PropTypes from 'prop-types';

class Item extends React.Component {
    static contextTypes = {
        store: PropTypes.object.isRequired,
    };

    render(){
        return <div>
            {this.props.type==='text'?<input className="text"/>:<DatePicker />}
            <Button disabled={this.context.store.disabled} onClick={()=>this.props.delete(this.props.id)}>删除</Button>
        </div>
    }
}

export default Item;