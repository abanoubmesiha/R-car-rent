import React from 'react'

import {Form,DatePicker,Icon,Button,Row,Col,
        Select,InputNumber,Input,Table,AutoComplete} from 'antd';
import {Constants,NumericInput,CarBrandSource} from '../ComponentsImporter'

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
      const rangeValue = fieldsValue['RangeDate'];
      const values = {
        ...fieldsValue,
        'RegDate': fieldsValue['RegDate'].format('DD-MM-YYYY'),
        'RangeDate': [rangeValue[0].format('DD-MM-YYYY'), rangeValue[1].format('DD-MM-YYYY')],
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
      for (let i = 1; i < 100; i++) {
        data.push({
          Code: i,
          Brand: `C200 ${i}`,
          Model: `Mercedes ${i}`,
          PlateNumber: `B M W ${i}`,
          Del:i
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
                <Form.Item style={styles.FormI} label="Tenant">
                    {getFieldDecorator('Tenant', {
                        rules: [{ required: false, message: 'Please select Tenant!' }],
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
                    })(<AutoComplete  dataSource={CarBrandSource}  
                      filterOption={(inputValue, option) =>
                        option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}>
                        <Input placeholder="Type Brand" />
                        </AutoComplete>)}
                </Form.Item>
                <Form.Item style={styles.FormI} label="Model">
                    {getFieldDecorator('Model', {
                        rules: [{ required: true, message: 'Please type Car Model!' }],
                    })(<Input style={styles.Input} placeholder="Type Car Model"/>)}
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
                <Form.Item style={styles.FormI} label="Offer Price">
                    {getFieldDecorator('OfferPrice', {
                        rules: [{ required: true, message: 'Please select Offer Price!' }],
                    })(
                        <Select
                        placeholder="Select an option">
                        <Option value="Offer Price 1">Offer Price 1</Option>
                        <Option value="Offer Price 2">Offer Price 2</Option>
                        </Select>,
                    )}
                </Form.Item>
                <Form.Item style={styles.FormI} label="Tax">
                    {getFieldDecorator('Tax', {
                        rules: [{ required: true, message: 'Please input Tax!' }],
                    })(<Input style={styles.Input} prefix={'%'} placeholder="Type Tax" min={0} max={999999}/>)}
                </Form.Item>
                <Form.Item style={styles.FormI} label="Discount">
                    {getFieldDecorator('Discount', {
                        rules: [{ required: true, message: 'Please input Discount!' }],
                    })(<Input style={styles.Input} prefix={'%'} placeholder="Type Discount" min={0} max={999999}/>)}
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