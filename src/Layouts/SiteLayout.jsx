import React, {Component} from 'react';
import { Layout, Breadcrumb } from 'antd';
import { Route, Switch } from 'react-router-dom';

import {Dashboard,Invoices,NewInv,Contracts,
        NewCon,Clients,NewCls,Services,NewCar,
        Employees,NewEmp,PurchasesR,ContractsR,
        ClientsR,ServicesR,EmployeesR,Account,SMTP} from "../Components/ComponentsImport";


const { Header, Content, Footer } = Layout;


class SiteLayout extends Component {
    render() {
        return (
                <Layout className={Layout}>
                    <Header style={{ background: '#fff45', padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        {/* <Breadcrumb style={{ margin: '16px 0', textAlign: "left" }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb> */}
                        <div style={{ padding: 24, minHeight: 360 }}>
                            <Switch>
                                <Route path="#/dash" component={Dashboard}/>
                                <Route path="#/inv/all" component={Invoices}/>
                                <Route path="#/inv/nwinv" component={NewInv}/>
                                <Route path="#/con/all" component={Contracts}/>
                                <Route path="#/con/nwcon" component={NewCon}/>
                                <Route path="#/cls/all" component={Clients}/>
                                <Route path="#/cls/nwcls" component={NewCls}/>
                                <Route path="#/car/all" component={Services}/>
                                <Route path="#/car/nwcar" component={NewCar}/>
                                <Route path="#/emp/all" component={Employees}/>
                                <Route path="#/emp/nwemp" component={NewEmp}/>
                                <Route path="#/rpt/purs" component={PurchasesR}/>
                                <Route path="#/rpt/cons" component={ContractsR}/>
                                <Route path="#/rpt/clis" component={ClientsR}/>
                                <Route path="#/rpt/srvs" component={ServicesR}/>
                                <Route path="#/rpt/emps" component={EmployeesR}/>
                                <Route path="#/set/acc" component={Account}/>
                                <Route path="#/set/smtp" component={SMTP}/>
                            </Switch>
                        </div>
                    </Content>
                    {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
                </Layout>
        );
    }
}

export default SiteLayout;