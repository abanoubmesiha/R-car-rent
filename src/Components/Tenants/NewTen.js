import React from 'react'
import {Basics,Location,Constants} from '../ComponentsImporter'
import {Form,Select,Radio,Input,Button,Upload,Icon,Row,Col,
        Checkbox} from 'antd';

  const { Option } = Select;
  const { TextArea } = Input;

  class TenForm extends React.Component {
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
      const { getFieldDecorator } = this.props.form;
      const {formItemLayout,styles} = Constants;

      return (
      <React.Fragment>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <Row {...styles.Row}>
              <Col sm={24} md={12}>
                <Basics getFieldDecorator={getFieldDecorator}/>
              </Col>
              <Col sm={24} md={12}>
                <Location getFieldDecorator={getFieldDecorator}/>
              </Col>
            </Row>
            <hr style={{ borderRadius: '5px',border: '1px solid #1890ff'}}/>

            <Row  {...styles.Row}>
              <Col sm={24} md={12}>
              <Form.Item style={styles.FormI} label="Currency" hasFeedback>
                  {getFieldDecorator('Currency', {
                    rules: [{ required: true, message: 'Please type Mobile Number!' }],
                  })(
                    <Select placeholder="Please select Currency">
                      <Option value="Saudi riyal">Saudi riyal</Option>
                      <Option value="Dollar">Dollar</Option>
                    </Select>,
                  )}
                </Form.Item>
                <Form.Item style={styles.FormI} label="Invoicing Method Status" hasFeedback>
                  {getFieldDecorator('InvMeth', {rules: [{ required: true, message: 'Please type Method!' }],})(
                    <Select placeholder="Please select Invoicing Method Status">
                      <Option value="Method 1">Method 1</Option>
                      <Option value="Method 2">Method 2</Option>
                      <Option value="Method 3">Method 3</Option>
                    </Select>,
                  )}
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 9}} 
                style={styles.FormI} label="Send This Info To Tenant">
                  {getFieldDecorator('SendInfo', {})(
                          <Checkbox value="Yes">Yes</Checkbox>
                  )}
                </Form.Item>
                <Form.Item style={styles.FormI} label="Notes">
                  {getFieldDecorator('Notes', {})(<TextArea rows={4} placeholder="Notes ........ " />)}
                </Form.Item>
              </Col>
              <Col sm={24} md={12}>
                <Form.Item style={styles.FormI} label="Tenant Type" hasFeedback>
                  {getFieldDecorator('TenantType', {})(
                    <Select placeholder="Please select Tenant Type">
                      <Option value="Type 1">Type 1</Option>
                      <Option value="Type 2">Type 2</Option>
                      <Option value="Type 3">Type 3</Option>
                    </Select>,
                  )}
                </Form.Item>
                <Form.Item style={styles.FormI} label="Tenant Status" hasFeedback>
                  {getFieldDecorator('TenantStatus', {})(
                    <Select placeholder="Please select Tenant Status">
                      <Option value="Status 1">Status 1</Option>
                      <Option value="Status 2">Status 2</Option>
                      <Option value="Status 3">Status 3</Option>
                    </Select>,
                  )}
                </Form.Item>
                <Form.Item style={styles.FormI} label="Classification" hasFeedback>
                  {getFieldDecorator('Classification', {})(
                    <Select placeholder="Please select Classification">
                      <Option value="Classification 1">Classification 1</Option>
                      <Option value="Classification 2">Classification 2</Option>
                      <Option value="Classification 3">Classification 3</Option>
                    </Select>,
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
  
  const NewTen = Form.create({ name: 'TenForm' })(TenForm);
  export default NewTen;

