import React from 'react';
import { DatePicker, Button } from 'antd';

class DateItem extends React.Component {

    state={
        disabled:false
    }

    handleDisabled(){
        
    }

    render(){
        return <div>
            <DatePicker />
            <Button disabled={this.state.disabled}>删除</Button>
        </div>
    }
}

export default DateItem;