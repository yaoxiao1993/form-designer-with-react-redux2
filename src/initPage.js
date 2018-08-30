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
    disabled: false,
    isToggleOn: false,
    previewText: "预览"
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

    if(this.state.selectedType==='text'){
      this.state.addItems.push(<TextItem disabled={this.state.disabled}/>)
    }else if(this.state.selectedType==='date'){
      this.state.addItems.push(<DateItem disabled={this.state.disabled}/>)
    }
  }

  handleCancel = (e) => {
    // console.log(e);
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

  handleClick = () =>{
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
    this.handleToggle();

    this.state.addItems.map(item=>{
      item.getAttribute("disabled") = this.state.disabled
      return 0;
    })
  }

  handleToggle = () =>{
    if(this.state.isToggleOn===false){
      this.setState({
        disabled: true,
        previewText: "编辑"
      });
    }else{
      this.setState({
        disabled: false,
        previewText: "预览"
      });
    }
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal} id='add' disabled={this.state.disabled}>添加</Button>
        <Button id='preview' onClick={this.handleClick}>{this.state.previewText}</Button>
        <Modal
          title="选择类型"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div id="select">
            <input id="text" type="radio" value="文本" name="add" checked={this.state.checked} onChange={this.selectedText} display={this.state.display}/>文本
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