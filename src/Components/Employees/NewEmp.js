import React from 'react'
import {Basics,Location,Constants} from '../ComponentsImporter'
import {Form,Select,Radio,Input,Button,Upload,Icon,Row,Col,
  } from 'antd';

  const { Option } = Select;
  const { TextArea } = Input;

  class EmpForm extends React.Component {
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
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
      const {formItemLayout,styles} = Constants;

      return (
      <React.Fragment>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <Row {...styles.Row}>
              <Col sm={24} md={12}>
                <Basics setFieldsValue={setFieldsValue} getFieldDecorator={getFieldDecorator}/>
              </Col>
              <Col sm={24} md={12}>
                <Location getFieldDecorator={getFieldDecorator}/>
              </Col>
            </Row>
            <hr style={{ borderRadius: '5px',border: '1px solid #1890ff'}}/>

            <Row  {...styles.Row}>
              <Col sm={24} md={12}>
                <Form.Item style={styles.FormI} label="Notes">
                  {getFieldDecorator('Notes', {})(<TextArea rows={4} placeholder="Notes ........ " />)}
                </Form.Item>
              </Col>
              <Col sm={24} md={12}>
                <Form.Item style={styles.FormI} label="Job" hasFeedback>
                  {getFieldDecorator('Job', {})(
                    <Select placeholder="Please select Job">
                      <Option value="Driver">Driver</Option>
                      <Option value="Accountant">Accountant</Option>
                      <Option value="Manager">Manager</Option>
                    </Select>,
                  )}
                </Form.Item>
                <Form.Item style={styles.FormI} label="Employee Status">
                  {getFieldDecorator('radio-button')(
                    <Radio.Group>
                      <Radio.Button value="Emp">Employed</Radio.Button>
                      <Radio.Button value="Unemp">Unemployed</Radio.Button>
                    </Radio.Group>,
                  )}
                </Form.Item>
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
  
  const NewEmp = Form.create({ name: 'EmpForm' })(EmpForm);
  export default NewEmp;

