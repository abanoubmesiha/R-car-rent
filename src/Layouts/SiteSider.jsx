import React, {Component} from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

import Logo from '../car.png';


const { Sider } = Layout;
const { SubMenu } = Menu;

class SiteSider extends Component {

    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        return (
            <Sider  breakpoint="xs" collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} >
                <div style={{
                    // width: "50px", height: "50px", 
                    paddingTop:'10px',paddingLeft:'10px',position: "center"}}>
                    <img width={'180px'} height={'80px'} src={Logo} />
                </div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" style={{textAlign: "left"}}>
                    <Menu.Item key="1" style={{textAlign: "left"}}>
                        <Link to="/dash">
                            <Icon type="dashboard" />
                            <span>Dashboard</span>
                        </Link>
                    </Menu.Item>

                    <SubMenu
                        key="subInvoices"
                        title={
                            <span>
                                    <Icon type="dollar" />
                                    <span>Invoices</span>
                                </span>
                        }>
                        <Menu.Item key="2">
                            <Link to="/inv/all">
                                <Icon type="dollar" />
                                <span>Manage Invoices</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/inv/nwinv">
                                <Icon type="plus" />
                                <span>Add New Invoice</span>
                            </Link>
                        </Menu.Item>
                    </SubMenu>

                    <SubMenu
                        key="subContracts"
                        title={
                            <span>
                                    <Icon type="solution" />
                                    <span>Contracts</span>
                                </span>
                        }>
                        <Menu.Item key="4">
                            <Link to="/con/all">
                                <Icon type="solution" />
                                <span>Management</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Link to="/con/nwcon">
                                <Icon type="plus" />
                                <span>Registration</span>
                            </Link>
                        </Menu.Item>
                    </SubMenu>

                    <SubMenu
                        key="subClients"
                        title={
                                <span>
                                    <Icon type="user" />
                                    <span>Tenants</span>
                                </span>
                        }>
                        <Menu.Item key="6">
                            <Link to="/cls/all">
                                <Icon type="user" />
                                <span>Management</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="7">
                            <Link to="/cls/nwcls">
                                <Icon type="plus" />
                                <span>Registration</span>
                            </Link>
                        </Menu.Item>
                    </SubMenu>

                    <SubMenu
                        key="subCars"
                        title={
                            <span>
                                    <Icon type="car" />
                                    <span>Cars</span>
                                </span>
                        }>
                        <Menu.Item key="8">
                            <Link to="/car/all">
                                <Icon type="car" />
                                <span>Management</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="9">
                            <Link to="/car/nwcar">
                                <Icon type="plus" />
                                <span>Registration</span>
                            </Link>
                        </Menu.Item>
                    </SubMenu>

                    <SubMenu
                        key="subEmployees"
                        title={
                            <span>
                                    <Icon type="team" />
                                    <span>Employees</span>
                                </span>
                        }>
                        <Menu.Item key="10">
                            <Link to="/emp/all">
                                <Icon type="team" />
                                <span>Management</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="11">
                            <Link to="/emp/nwemp">
                                <Icon type="plus" />
                                <span>Registration</span>
                            </Link>
                        </Menu.Item>
                    </SubMenu>

                    <SubMenu
                        key="subReports"
                        title={
                            <span>
                                    <Icon type="profile" />
                                    <span>Reports</span>
                                </span>
                        }>
                        <Menu.Item key="12">
                            <Link to="/rpt/purs">
                                <Icon type="dollar" />
                                <span>Purchases Report</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="13">
                            <Link to="/rpt/cons">
                                <Icon type="solution" />
                                <span>Contracts Report</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="14">
                            <Link to="/rpt/clis">
                                <Icon type="user" />
                                <span>Clients Report</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="15">
                            <Link to="/rpt/srvs">
                                <Icon type="car" />
                                <span>Services Report</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="16">
                            <Link to="/rpt/emps">
                                <Icon type="team" />
                                <span>Employees Report</span>
                            </Link>
                        </Menu.Item>
                    </SubMenu>

                    <SubMenu
                        key="subSettings"
                        title={
                            <span>
                                    <Icon type="setting" />
                                    <span>Settings</span>
                                </span>
                        }>
                        <Menu.Item key="17">
                            <Link to="/set/acc">
                                <Icon type="tool" />
                                <span>Account Settings</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="18">
                            <Link to="/set/smtp">
                                <Icon type="mail" />
                                <span>SMTP Settings</span>
                            </Link>
                        </Menu.Item>
                    </SubMenu>

                </Menu>
            </Sider>
        );
    }
}

export default SiteSider;