import React, {Component} from 'react';

import ClientsTable from './clientsTable';

class AllClients extends Component {
    render() {
        return (
            <div style={{ background: '#fff', padding: '30px' }}>
                <ClientsTable/>
            </div>
        );
    }
}

export default AllClients;