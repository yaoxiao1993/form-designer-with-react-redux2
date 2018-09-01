import { Modal, Button } from 'antd';
import React from 'react';
import Item from './Item'
import PropTypes from 'prop-types';

class InitPage extends React.Component {
  static childContextTypes = {
    store: PropTypes.object.isRequired,
};

getChildContext() {
    return {store: this.state};
}

  state = { 
    visible: false,
    selectedType: 'text',
    textChecked: false,
    dateChecked: false,
    addItems:[],
    disabled: false,
   }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    // console.log(e);
    this.setState({
      visible: false,
      addItems:[...this.state.addItems,this.state.selectedType==='text'?{type:"text",id:this.state.addItems.length-1}:{type:"date",id:this.state.addItems.length-1}]
    });
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
    this.setState({
      disabled: !this.state.disabled
    })
  }

  handleDelete = id =>{
      this.setState({
        addItems: this.state.addItems.filter(item=>item.id!==id)
      })
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal} id='add' disabled={this.state.disabled}>添加</Button>
        <Button id='preview' onClick={this.handleClick}>{this.state.disabled?"编辑":"预览"}</Button>
        <Modal
          title="选择类型"
          visible={this.state.visible}
          okText="确定"
          cancelText="取消"
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
          this.state.addItems.map(({type,id}) => {
          return <Item disabled={this.state.disabled} key={id} id={id} delete={this.handleDelete} type={type}/>
          })
        }
      </div>
    );
  }
}
export default InitPage;