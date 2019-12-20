
import React from 'react'

import { Table, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';
import data from './data';


class Employees extends React.Component {
  state = {
    searchText: '',
    searchedColumn: '',
  };

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  render() {
    const columns = [
        {
          title: 'Code',
          dataIndex: 'Code',
          key: 'Code',
          align:'center',
          width: '7.5%',
          ...this.getColumnSearchProps('Code'),
        },
        {
          title: 'Name',
          dataIndex: 'Name',
          key: 'Name',
          align:'center',
          width: '12.5%',
          ...this.getColumnSearchProps('Name'),
        },
        {
          title: 'Country',
          dataIndex: 'Country',
          key: 'Country',
          align:'center',
          width: '10%',
          ...this.getColumnSearchProps('Country'),
        },
        {
          title: 'Job',
          dataIndex: 'Job',
          key: 'Job',
          align:'center',
          width: '12.5%',
          ...this.getColumnSearchProps('Job'),
        },
        {
          title: 'Phone',
          dataIndex: 'Phone',
          key: 'Phone',
          align:'center',
          width: '12.5%',
          ...this.getColumnSearchProps('Phone'),
        },
        {
          title: 'Image',
          dataIndex: 'Image',
          key: 'Image',
          align:'center',
          width: '7.5%',
          ...this.getColumnSearchProps('Image'),
          render:  (url) => <img width={50} height={50} src={url} />
        },
        {
            title: 'Edit',
            dataIndex: 'Edit',
            key: 'Edit',
            align:'center',
            width: '5%',
            ...this.getColumnSearchProps('Edit'),
            render:  () => <Icon type="form" />
        },
        {
            title: 'Del',
            dataIndex: 'Del',
            key: 'Del',
            align:'center',
            width: '5%',
            ...this.getColumnSearchProps('Del'),
            render:  () => <Icon type="delete" />
        }
      ];
    
    return <Table pagination = {{ position: 'both' }} bordered columns={columns} dataSource={data} />;
  }
}

export default Employees