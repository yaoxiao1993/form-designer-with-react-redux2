import React from 'react';
import { DatePicker, Button } from 'antd';

class DateItem extends React.Component {
    render(){
        return <div>
            <DatePicker />
            <Button>删除</Button>
        </div>
    }
}

export default DateItem;