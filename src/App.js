import React, { PureComponent } from 'react';
import { Layout } from 'antd';
import './app.css';
const { Content } = Layout;
class App extends PureComponent {
  render() {
    return (
      <Layout>
        <Content className='container'>
          12345
        </Content>
      </Layout>
    );
  }
}

export default App;
