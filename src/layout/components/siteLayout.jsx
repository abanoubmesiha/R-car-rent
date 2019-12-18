import React, {Component} from 'react';
import { Layout, Breadcrumb } from 'antd';
import { Route, Switch } from 'react-router-dom';

import Clients from "../../components/clients";


const { Header, Content, Footer } = Layout;


class SiteLayout extends Component {
    render() {
        return (
                <Layout className={Layout}>
                    <Header style={{ background: '#fff45', padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0', textAlign: "left" }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ padding: 24, minHeight: 360 }}>
                            <Switch>
                                <Route path="/cls" component={Clients}/>
                            </Switch>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
        );
    }
}

export default SiteLayout;