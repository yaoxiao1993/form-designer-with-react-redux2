import React, { PureComponent } from 'react';
import { Layout } from 'antd';
import './app.css';
import InitPage from './initPage';

const { Content } = Layout;
class App extends PureComponent {


render() {
    return (
      <Layout>
        <Content className='container'>
          <InitPage></InitPage>
        </Content>
      </Layout>
    );
  }
}

export default App;
