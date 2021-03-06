import React, {Component} from 'react';
import { Layout } from 'antd';

import SiteSider from "./SiteSider";
import SiteLayout from "./SiteLayout";


class Index extends Component {
    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <SiteSider/>
                <SiteLayout/>
            </Layout>
        );
    }
}

export default Index;