import React from 'react'

import {Form,DatePicker,Icon,Button,Row,Col,
        Select,InputNumber,Input,Table,} from 'antd';
import {Constants,NumericInput} from '../ComponentsImporter'

const { RangePicker } = DatePicker;
const { Option } = Select;
const { TextArea } = Input;

class ConForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // RandomCode:Math.floor(Math.random()*1000000)
        }
    }
  handleSubmit = e => {
    e.preventDefault();

    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }
      
      // Should format date value before submit.
      const rangeValue = fieldsValue['range-picker'];
      const rangeTimeValue = fieldsValue['range-time-picker'];
      const values = {
        ...fieldsValue,
        'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
        'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
        'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
        'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
        'range-time-picker': [
          rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
          rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
        ],
        'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
      };
      console.log('Received values of form: ', values);
    });
  };
  normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  render() {
    const { getFieldDecorator,setFieldsValue } = this.props.form;
    const {formItemLayout,styles}=Constants;
    
    const config = {
      rules: [{ type: 'object', required: true, message: 'Please select time!' }],
    };
    const rangeConfig = {
      rules: [{ type: 'array', required: true, message: 'Please select time!' }],
    };
    const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}
const columns = [
  {
    title: 'Code',
    dataIndex: 'Code',
    width: '10%',
  },
  {
    title: 'Brand',
    dataIndex: 'Brand',
    width: '25%',
    },
  {
    title: 'Model',
    dataIndex: 'Model',
    width: '25%',
  },
  {
    title: 'Plate Number',
    dataIndex: 'PlateNumber',
    width: '30%',
  },
  {
    title: <Icon type="setting" />,
    dataIndex: 'Del',
    width: '10%',
    render:  () => <Icon type="delete" theme="twoTone" />
  },
];
    return (
    <React.Fragment>
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Row {...styles.Row}>
              <Col sm={24} md={12}>
                {/* <Form.Item style={styles.FormI} label="Code">
                    {getFieldDecorator('Code', {
                        rules: [{ required: true, message: 'Please input Code Number!' }],
                    })(<Input style={styles.Input} placeholder="Type Code" min={0} max={999999}/>)}
                </Form.Item> */}
                <NumericInput id={'TenForm_Code'} setFieldsValue={setFieldsValue} getFieldDecorator={getFieldDecorator} placeholder={'Type Code Number'} label={'Code'} labelTitle={'code'}/>
                <Form.Item  style={styles.FormI} label="Registration Date">
                    {getFieldDecorator('RegDate', config)(<DatePicker style={styles.Input} placeholder="Select Registration Date" />)}
                </Form.Item>
                <Form.Item style={styles.FormI} label="Tentant">
                    {getFieldDecorator('Tentant', {
                        rules: [{ required: true, message: 'Please select Tentant!' }],
                    })(
                        <Select
                        placeholder="Select an option">
                        <Option value="Tenant 1">Tenant 1</Option>
                        <Option value="Tenant 2">Tenant 2</Option>
                        </Select>,
                    )}
                </Form.Item>
                <Form.Item style={styles.FormI} label="Driver">
                    {getFieldDecorator('Driver', {
                        rules: [{ required: true, message: 'Please select Driver!' }],
                    })(
                        <Select
                        placeholder="Select an option">
                        <Option value="WithoutDriver">Without Driver</Option>
                        <Option value="Driver 1">Driver 1</Option>
                        <Option value="Driver 2">Driver 2</Option>
                        <Option value="Driver 3">Driver 3</Option>
                        </Select>,
                    )}
                </Form.Item>
                <Form.Item  style={styles.FormI} label="Start And End Date">
                    {getFieldDecorator('RangeDate', rangeConfig)(<RangePicker style={styles.Input} placeholder="Select Time" />)}
                </Form.Item>
              </Col>
            <Col sm={24} md={12}>
                <Form.Item style={styles.FormI} label="Car Code">
                    {getFieldDecorator('CarCode', {
                        rules: [{ required: true, message: 'Please input Car Code Number!' }],
                    })(<Input style={styles.Input} placeholder="Type Car Code" min={0} max={999999}/>)}
                </Form.Item>
                <Form.Item style={styles.FormI} label="Brand">
                    {getFieldDecorator('Brand', {
                        rules: [{ required: true, message: 'Please select Car Brand!' }],
                    })(
                        <Select
                        placeholder="Select an option"
                        onChange={this.handleSelectChange}
                        >
                        <Option value="Mercedes">Mercedes</Option>
                        <Option value="BMW">BMW</Option>
                        </Select>,
                    )}
                </Form.Item>
                <Form.Item style={styles.FormI} label="Model">
                    {getFieldDecorator('Model', {
                        rules: [{ required: true, message: 'Please select Car Model!' }],
                    })(
                        <Select
                        placeholder="Select an option"
                        onChange={this.handleSelectChange}
                        >
                        <Option value="C200">C200</Option>
                        <Option value="X7">X7</Option>
                        </Select>,
                    )}
                </Form.Item>
                <NumericInput id={'TenForm_PlateNumber'} setFieldsValue={setFieldsValue} getFieldDecorator={getFieldDecorator} placeholder={'Type Plate Number'} label={'Plate Number'} labelTitle={'PlateNumber'}/>
                <Form.Item style={styles.FormI} label="Rent Per Day">
                    {getFieldDecorator('Rent', {
                        rules: [{ required: true, message: 'Please type Rent!' }],
                    })(<InputNumber style={styles.Input} placeholder="Type Rent" min={0} max={999999}
                                    formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                    parser={value => value.replace(/\$\s?|(,*)/g, '')}/>)}
                </Form.Item>
            </Col>
        </Row>
        <hr style={{ borderRadius: '5px',border: '1px solid #1890ff'}}/>
        <Row {...styles.Row}>
            <Col sm={24} md={12}>
                <Form.Item style={styles.FormI} label="Notes">
                    {getFieldDecorator('Notes', {})(<TextArea rows={4} placeholder="Notes ........ " />)}
                </Form.Item>
                <Form.Item style={styles.FormI} label="Description">
                    {getFieldDecorator('Description', {})(<TextArea rows={4} placeholder="Description ........ " />)}
                </Form.Item>
            </Col>
            <Col sm={24} md={12}>
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} size='small' />
            </Col>
        </Row>
        <Form.Item style={{margin:'10px'}}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </React.Fragment>
    );
  }
}

const NewCon = Form.create({ name: 'ConForm' })(ConForm);
export default NewCon;