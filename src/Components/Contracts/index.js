
import React from 'react'

import { Table, Input, Button, Icon,Row,Col,DatePicker } from 'antd';
import Highlighter from 'react-highlight-words';
import './Conditional.css'
import data from './data';
import {Constants} from '../ComponentsImporter'
import Cards from './Cards';

const {RangePicker} = DatePicker

class Contracts extends React.Component {
  constructor(props){
    super(props);
    this.state = {
          data:data,
          searchText: '',
          searchedColumn: '',
  };
  }
  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input ref={node => {
            this.searchInput = node;}}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}/>
        <Button type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          icon="search" size="small"
          style={{ width: 90, marginRight: 8 }}>Search</Button>
        <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          Reset</Button>
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
        <Highlighter highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape textToHighlight={text.toString()} />
      ) : ( text ),});

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
      HSearch(e){
        console.log(e.target)
        let {value,placeholder} = e.target;
        const filteredData = this.state.data.filter(( con ) =>{
          if (placeholder == 'Phone' || placeholder == 'Code') {
            value = value.toString();
            con[placeholder] = con[placeholder].toString();
           } 
          //  else {
          //   value = value.toLowerCase();
          //   con[placeholder] = con[placeholder].toLowerCase();
          // }
          if ((con[placeholder].includes(value.toUpperCase())) || (con[placeholder].includes(value.toUpperCase()))){
            return true
          }

        })
        this.setState({
              data: filteredData
            });
          }
          HReset = () => {
            this.setState({
              data: data
            });
      }
      HRangePicker = (obj,arr) => {
        function between(con, begin, end) {
          return con >= begin && con <= end;
        }
        const filteredData = this.state.data.filter(( con ) =>{
          let BeginDMY = arr[0].split('/');
          let EndDMY = arr[1].split('/');
          let conDMY = con['Date'].split('/');
          if ((between(conDMY[0], BeginDMY[0], EndDMY[0])) && (between(conDMY[1], BeginDMY[1], EndDMY[1]))&&(between(conDMY[2], BeginDMY[2], EndDMY[2]))) {
            return true
          } else return false
        })
        this.setState({
          data: filteredData
        });
    }
  render() {
    const {styles} = Constants;
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
          title: 'Tenant',
          dataIndex: 'Tenant',
          key: 'Tenant',
          align:'center',
          width: '12.5%',
          ...this.getColumnSearchProps('Tenant'),
        },
        {
          title: 'Date',
          dataIndex: 'Date',
          key: 'Date',
          align:'center',
          width: '16%',
          ...this.getColumnSearchProps('Date'),
        },
        {
          title: 'Driver',
          dataIndex: 'Driver',
          key: 'Driver',
          align:'center',
          width: '12.5%',
          ...this.getColumnSearchProps('Driver'),
        },
        {
          title: 'Phone',
          dataIndex: 'Phone',
          key: 'Phone',
          align:'center',
          width: '14.5%',
          ...this.getColumnSearchProps('Phone'),
        },
        {
          title: 'Image',
          dataIndex: 'Image',
          key: 'Image',
          align:'center',
          width: '7.5%',
          render:  (url) => <img width={50} height={50} src={url} />
        },
        {
            title: 'Setting',
            dataIndex: 'Edit',
            colSpan:2,
            key: 'Edit',
            align:'center',
            width: '1%',
            render:  () => <Icon type="form" />
        },
        {
            title: 'Del',
            dataIndex: 'Del',
            colSpan:0,
            key: 'Del',
            align:'center',
            width: '1%',
            render:  () => <Icon type="delete" theme="twoTone" />
        }
      ];
    return (
        <React.Fragment>
          {/* <Row>
            <Col xs={{ span: 24}} md={{ span: 12 }} lg={{ span: 8 }} >
              <Input style={styles.SInput} placeholder="Code" suffix={<Icon type="search"/>} onPressEnter={this.HSearch.bind(this)} />
            </Col>
            <Col xs={{ span: 24}} md={{ span: 12 }} lg={{ span: 8 }} >
              <RangePicker style={{ width: '100%',padding: '5px' }} onChange={this.HRangePicker.bind(this)} format={"DD/MM/YYYY"}/>
            </Col>
            <Col xs={{ span: 24}} md={{ span: 12 }} lg={{ span: 8 }}  >
              <Input style={styles.SInput} placeholder="Name" suffix={<Icon type="search"/>} onPressEnter={this.HSearch.bind(this)} />
            </Col>
            <Col xs={{ span: 24}} md={{ span: 12 }} lg={{ span: 8 }}  >
              <Input style={styles.SInput} placeholder="Driver" suffix={<Icon type="search"/>} onPressEnter={this.HSearch.bind(this)} />
            </Col>
            <Col xs={{ span: 24}} md={{ span: 12 }} lg={{ span: 8 }}  >
              <Input style={styles.SInput} placeholder="Country" suffix={<Icon type="search"/>} onPressEnter={this.HSearch.bind(this)} />
            </Col>
            <Col xs={{ span: 24}} md={{ span: 12 }} lg={{ span: 8 }}  >
              <Input style={styles.SInput} placeholder="Job" suffix={<Icon type="search"/>} onPressEnter={this.HSearch.bind(this)} />
            </Col>
          </Row>
            <Button style={{margin:'5px'}} onClick={this.HReset}>Reset</Button>
            <hr style={{ borderRadius: '5px',border: '1px solid #1890ff'}}/> */}
            <Cards data={this.state.data}/>
            <Table className="TTT" pagination bordered columns={columns} dataSource={this.state.data} />
        </React.Fragment>
    )
  }
}

export default Contracts