import React from 'react';
import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import Title from 'antd/lib/typography/Title';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import SubMenu from 'antd/lib/menu/SubMenu';
import MenuItem from 'antd/lib/menu/MenuItem';

const { Header, Footer, Sider, Content } = Layout;


function App() {
  return (
    <div className="App">
      <Layout>
        <Header className="color-nav" style={{ paddingTop: 15 }}>
          <Avatar style={{ float: 'right' }} size="large" icon={<UserOutlined />} />
          <Title style={{ color: 'white', fontFamily: "Lora" }} level={3}>SimplifAI</Title>
        </Header>
        <Layout>
          <Sider className="color-nav">
            <Menu
              defaultSelectedKeys={['ProductSpecifications']}
              mode="inline"
            >
              <Menu.Item key='ProductSpecifications'>
                Product Specifications
              </Menu.Item>
              <SubMenu
                title={
                  <span>
                    <span>Data Product 1</span>
                  </span>
                }
              >
                <Menu.ItemGroup key='Ports1' title='Ports'>
                  <SubMenu
                    title={
                      <span>
                        <span>Input Ports</span>
                      </span>
                    }
                  >
                    <Menu.ItemGroup>
                      <Menu.Item key='ETL1'>
                        ETL
                  </Menu.Item>
                      <Menu.Item key='Input1'>
                        Input Files
                  </Menu.Item>
                      <Menu.Item key='CDC1'>
                        CDC
                  </Menu.Item>
                      <Menu.Item key='SourceDB1'>
                        SourceDB
                  </Menu.Item>
                    </Menu.ItemGroup>
                  </SubMenu>
                </Menu.ItemGroup>
                <Menu.ItemGroup key="ControlPorts1">
                  <SubMenu
                    title={
                      <span>
                        <span>Control Ports</span>
                      </span>
                    }>
                    <Menu.ItemGroup>
                      <Menu.Item key='Discoverability1'>
                        Discoverability
                        </Menu.Item>
                      <Menu.Item key='Audit1'>
                        Audit
                        </Menu.Item>
                    </Menu.ItemGroup>
                  </SubMenu>
                </Menu.ItemGroup>
                <Menu.ItemGroup key='OutputPorts1'>
                  <SubMenu
                    title={
                      <span>
                        <span>Output Ports</span>
                      </span>
                    }
                  >
                    <Menu.ItemGroup>
                      <Menu.Item key='MLPipelines1'>
                        ML Pipelines
                      </Menu.Item>
                      <Menu.Item key='OutputData1'>
                        Output Data
                      </Menu.Item>
                      <Menu.Item key='DomainAnalyticsBot1'>
                        Domain Analytics Bot
                      </Menu.Item>
                      <Menu.Item key='MLModels1'>
                        ML Models
                      </Menu.Item>
                    </Menu.ItemGroup>
                  </SubMenu>
                </Menu.ItemGroup>
              </SubMenu>
              <SubMenu
                title={
                  <span>
                    <span>Data Product 2</span>
                  </span>
                }
              >
                <Menu.ItemGroup key='Ports2' title='Ports'>
                  <SubMenu
                    title={
                      <span>
                        <span>Input Ports</span>
                      </span>
                    }
                  >
                    <Menu.ItemGroup>
                      <Menu.Item key='ETL2'>
                        ETL
                  </Menu.Item>
                      <Menu.Item key='Input2'>
                        Input Files
                  </Menu.Item>
                      <Menu.Item key='CDC2'>
                        CDC
                  </Menu.Item>
                      <Menu.Item key='SourceDB2'>
                        SourceDB
                  </Menu.Item>
                    </Menu.ItemGroup>
                  </SubMenu>
                </Menu.ItemGroup>
                <Menu.ItemGroup key='ControlPorts2'>
                  <SubMenu
                    title={
                      <span>
                        <span>Control Ports</span>
                      </span>
                    }>
                    <Menu.ItemGroup>
                      <Menu.Item key='Discoverability2'>
                        Discoverability
                        </Menu.Item>
                      <Menu.Item key='Audit2'>
                        Audit
                        </Menu.Item>
                    </Menu.ItemGroup>
                  </SubMenu>
                </Menu.ItemGroup>
                <Menu.ItemGroup key='OutputPorts2'>
                  <SubMenu
                    title={
                      <span>
                        <span>Output Ports</span>
                      </span>
                    }
                  >
                    <Menu.ItemGroup>
                      <Menu.Item key='MlPipelines2'>
                        ML Pipelines
                      </Menu.Item>
                      <Menu.Item key='OutputData2'>
                        Output Data
                      </Menu.Item>
                      <Menu.Item key='DomainAnalyticsBot2'>
                        Domain Analytics Bot
                      </Menu.Item>
                      <Menu.Item key='MLModels2'>
                        ML Models
                      </Menu.Item>
                    </Menu.ItemGroup>
                  </SubMenu>
                </Menu.ItemGroup>
              </SubMenu>
              <SubMenu
                title={
                  <span>
                    <span>Data Product 3</span>
                  </span>
                }
              >
                <Menu.ItemGroup key='Ports3' title='Ports'>
                  <SubMenu
                    title={
                      <span>
                        <span>Input Ports</span>
                      </span>
                    }
                  >
                    <Menu.ItemGroup>
                      <Menu.Item key='ETL3'>
                        ETL
                  </Menu.Item>
                      <Menu.Item key='Input3'>
                        Input Files
                  </Menu.Item>
                      <Menu.Item key='CDC3'>
                        CDC
                  </Menu.Item>
                      <Menu.Item key='SourceDB3'>
                        SourceDB
                  </Menu.Item>
                    </Menu.ItemGroup>
                  </SubMenu>
                </Menu.ItemGroup>
                <Menu.ItemGroup key="ControlPorts3">
                  <SubMenu
                    title={
                      <span>
                        <span>Control Ports</span>
                      </span>
                    }>
                    <Menu.ItemGroup>
                      <Menu.Item key='Discoverability3'>
                        Discoverability
                        </Menu.Item>
                      <Menu.Item key='Audit3'>
                        Audit
                        </Menu.Item>
                    </Menu.ItemGroup>
                  </SubMenu>
                </Menu.ItemGroup>
                <Menu.ItemGroup key='OutputPorts3'>
                  <SubMenu
                    title={
                      <span>
                        <span>Output Ports</span>
                      </span>
                    }
                  >
                    <Menu.ItemGroup>
                      <Menu.Item key='MLPipelines3'>
                        ML Pipelines
                      </Menu.Item>
                      <Menu.Item key='OutputData3'>
                        Output Data
                      </Menu.Item>
                      <Menu.Item key='DomainAnalyticsBot3'>
                        Domain Analytics Bot
                      </Menu.Item>
                      <Menu.Item key='MLModels3'>
                        ML Models
                      </Menu.Item>
                    </Menu.ItemGroup>
                  </SubMenu>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Product Specifications</Breadcrumb.Item>
              </Breadcrumb>
              <div className="site-layout-content" style={{ background: '#ffffff', padding: 24, minHeight: 600 }}>Contents of Product Specifications Here</div>
            </Content>
            <Footer>Ness Digital Engineering</Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
