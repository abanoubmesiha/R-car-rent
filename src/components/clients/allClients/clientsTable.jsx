// import React, {Component} from 'react';
// import { Table, Input, Button, Icon } from 'antd';
// import Highlighter from 'react-highlight-words';

// const data = [
//     {
//         key: '1',
//         name: 'John Brown',
//         age: 32,
//         address: 'New York No. 1 Lake Park',
//     },
//     {
//         key: '2',
//         name: 'Joe Black',
//         age: 42,
//         address: 'London No. 1 Lake Park',
//     }];

// class ClientsTable extends Component {
//     state = {
//         searchText: '',
//         searchedColumn: '',
//     };

//     getColumnSearchProps = dataIndex => ({
//         filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
//             <div style={{ padding: 8 }}>
//                 <Input
//                     ref={node => {
//                         this.searchInput = node;
//                     }}
//                     placeholder={`Search ${dataIndex}`}
//                     value={selectedKeys[0]}
//                     onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
//                     onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
//                     style={{ width: 188, marginBottom: 8, display: 'block' }}
//                 />
//                 <Button
//                     type="primary"
//                     onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
//                     icon="search"
//                     size="small"
//                     style={{ width: 90, marginRight: 8 }}
//                 >
//                     Search
//                 </Button>
//                 <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
//                     Reset
//                 </Button>
//             </div>
//         ),
//         filterIcon: filtered => (
//             <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
//         ),
//         onFilter: (value, record) =>
//             record[dataIndex]
//                 .toString()
//                 .toLowerCase()
//                 .includes(value.toLowerCase()),
//         onFilterDropdownVisibleChange: visible => {
//             if (visible) {
//                 setTimeout(() => this.searchInput.select());
//             }
//         },
//         render: text =>
//             this.state.searchedColumn === dataIndex ? (
//                 <Highlighter
//                     highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
//                     searchWords={[this.state.searchText]}
//                     autoEscape
//                     textToHighlight={text.toString()}
//                 />
//             ) : (
//                 text
//             ),
//     });

//     handleSearch = (selectedKeys, confirm, dataIndex) => {
//         confirm();
//         this.setState({
//             searchText: selectedKeys[0],
//             searchedColumn: dataIndex,
//         });
//     };

//     handleReset = clearFilters => {
//         clearFilters();
//         this.setState({ searchText: '' });
//     };

//     render() {

//         const columns = [
//             {
//                 title: 'Code',
//                 dataIndex: 'code',
//                 key: 'code',
//                 width: '10%',
//                 ...this.getColumnSearchProps('code'),
//             },
//             {
//                 title: 'Name',
//                 dataIndex: 'name',
//                 key: 'name',
//                 width: '20%',
//                 ...this.getColumnSearchProps('name'),
//             },
//             {
//                 title: 'Type',
//                 dataIndex: 'type',
//                 key: 'type',
//                 width: '10%',
//                 filters: [{ text: 'Individual', value: 'individual' }, { text: 'Business', value: 'business' }],

//             },
//             {
//                 title: 'Mobile',
//                 dataIndex: 'mobile',
//                 key: 'mobile',
//                 width: '10%',
//                 ...this.getColumnSearchProps('mobile'),
//             },
//             {
//                 title: 'City',
//                 dataIndex: 'city',
//                 key: 'city',
//                 width: '10%',
//                 ...this.getColumnSearchProps('city'),
//             },
//             {
//                 title: 'Nationality',
//                 dataIndex: 'nationality',
//                 key: 'nationality',
//                 width: '10%',
//                 ...this.getColumnSearchProps('nationality'),
//             },
//             {
//                 title: 'Picture',
//                 dataIndex: 'picture',
//                 key: 'picture',
//                 width: '10%',
//             },
//             {
//                 title: 'Status',
//                 dataIndex: 'status',
//                 key: 'status',
//                 width: '10%',
//                 ...this.getColumnSearchProps('status'),
//             },
//             {
//                 title: 'Actions',
//                 dataIndex: 'actions',
//                 key: 'actions',
//                 width: '10%'
//             }
//         ];

//         return (
//             <Table
//                 columns={columns}
//                 dataSource={data}
//                 bordered
//                 title={() => 'Header'}
//                 footer={() => 'Footer'}
//             />
//         );
//     }
// }

// export default ClientsTable;