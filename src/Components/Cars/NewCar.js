import React from 'react'

import {Form,DatePicker,TimePicker,Button,Row,Col,
        Select,InputNumber,Input,Upload,Icon,} from 'antd';
import {Constants,NumericInput} from '../ComponentsImporter'

const { MonthPicker } = DatePicker;
const { Option } = Select;
const { TextArea } = Input;

class CarForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            RandomCode:Math.floor(Math.random()*1000000)
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
    return (
    <React.Fragment>
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Row {...styles.Row}>
            <Col sm={24} md={{span:12, offset:6}}>
                <Form.Item style={styles.FormI} label="Car Owner">
                {getFieldDecorator('CarOwner', {
                    rules: [{ required: true, message: 'Please select Car Owner!' }],
                })(
                    <Select
                    placeholder="Select an option"
                    onChange={this.handleSelectChange}
                    >
                    <Option value="Mr.Mahmoud">Mr.Mahmoud</Option>
                    <Option value="Dr.Ayman">Dr.Ayman</Option>
                    </Select>,
                )}
                </Form.Item>
            </Col>
        </Row>
        <Row {...styles.Row}>
              <Col sm={24} md={12}>
                <Form.Item style={styles.FormI} label="Auto Code">
                    {getFieldDecorator('Code', {initialValue: this.state.RandomCode,
                        rules: [{ required: true, message: 'Please input Code Number!' }],
                    })(<Input style={styles.Input} placeholder="Type Code" min={0} max={999999}/>)}
                </Form.Item>
                <Form.Item style={styles.FormI} label="Name">
                  {getFieldDecorator('EmpName', {
                    rules: [{ required: true, message: 'Please type Name!' }],
                  })(<Input placeholder="Type Employee Name" />)}
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
                <Form.Item style={styles.FormI} label="Color">
                    {getFieldDecorator('Color', {
                        rules: [{ required: true, message: 'Please select Car Color!' }],
                    })(
                        <Select
                        placeholder="Select an option"
                        onChange={this.handleSelectChange}
                        >
                        <Option value="Red">Red</Option>
                        <Option value="Yellow">Yellow</Option>
                        <Option value="Blue">Blue</Option>
                        <Option value="Green">Green</Option>
                        </Select>,
                    )}
                </Form.Item>
                <Form.Item  style={styles.FormI} label="Manufacturing Date">
                    {getFieldDecorator('ManuDate', config)(<MonthPicker style={styles.Input} placeholder="Select Manufacturing Date" />)}
                </Form.Item>
              </Col>
            <Col sm={24} md={12}>
                <Form.Item style={styles.FormI} label="Status">
                  {getFieldDecorator('Status', {})(<Input placeholder="Type Status" />)}
                </Form.Item>
                <NumericInput id={'TenForm_PlateNumber'} setFieldsValue={setFieldsValue} getFieldDecorator={getFieldDecorator} placeholder={'Type Plate Number'} label={'Plate Number'} labelTitle={'PlateNumber'}/>
                <Form.Item  style={styles.FormI} label="Registration Date">
                    {getFieldDecorator('ManuDate', config)( <DatePicker style={styles.Input} placeholder="Select Registration Date" />)}
                </Form.Item>
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
                <Form.Item style={styles.FormI} label="Upload Photo">
                    {getFieldDecorator('upload', {
                    valuePropName: 'fileList',
                    getValueFromEvent: this.normFile,
                    })(
                    <Upload name="logo" action="/upload.do" listType="picture">
                        <Button>
                        <Icon type="upload" /> Click to upload
                        </Button>
                    </Upload>,
                    )}
                </Form.Item>
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

const NewCar = Form.create({ name: 'CarForm' })(CarForm);
export default NewCar;