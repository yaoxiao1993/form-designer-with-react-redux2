import { Modal, Button } from 'antd';
import React from 'react';

class InitPage extends React.Component {
  state = { visible: false }
  // constructor(props){
  //   super(props)
  // }

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
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>添加</Button>
        <Button>预览</Button>
        <Modal
          title="选择类型"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div id="select">
            <input id="text" type="radio" value="文本" name="add"/>文本
            <input id="date" type="radio" value="日期" name="add"/>日期
          </div>  
        </Modal>
      </div>
    );
  }
}
export default InitPage;