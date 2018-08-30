import { Modal, Button } from 'antd';
import React from 'react';
import TextItem from './TextItem'
import DateItem from './DateItem'

class InitPage extends React.Component {
  state = { 
    visible: false,
    selectedType: 'text',
    textChecked: false,
    dateChecked: false,
    addItems:[],
    display: 'none'
   }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });

    const itemsArr = this.state.selectedType
    console.log(itemsArr)
    if(this.state.selectedType==='text'){
      this.state.addItems.push(<TextItem />)
    }else if(this.state.selectedType==='date'){
      this.state.addItems.push(<DateItem />)
    }
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  selectedText = () =>{
    this.setState({
      textChecked: true,
      selectedType: 'text'
    });
  }
  
  selectedDate = () =>{
    this.setState({
      dateChecked: true,
      selectedType: 'date'
    });
  }

  preview = () =>{

  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal} id='add'>添加</Button>
        <Button id='preview' onClick={}>预览</Button>
        <Modal
          title="选择类型"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div id="select">
            <input id="text" type="radio" value="文本" name="add" checked={this.state.checked} onChange={this.selectedText}/>文本
            <input id="date" type="radio" value="日期" name="add" checked={this.state.checked}
            onChange={this.selectedDate}/>日期
          </div>  
        </Modal>
        {
          this.state.addItems.map((item,i) => {
          return <div key ={i}>{item}</div>
          })
        }
      </div>
    );
  }
}
export default InitPage;