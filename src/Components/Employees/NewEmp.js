import React from 'react'
import {Basics,Location} from '../ComponentsImport'
import {
    Form,
    Layout,
    Select,
    Radio,
    Input,
    Breadcrumb,
    Button,
    Upload,
    Icon,
    Row,
    Col,
  } from 'antd';

  const { Content } = Layout;
  const { Option } = Select;
  const { TextArea } = Input;

  class Demo extends React.Component {
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
      const formItemLayout = {
        labelCol: {xs: {span: 3},sm: {span: 10},md: {span: 10},lg: {span: 8}},
        wrapperCol: {xs: {span: 3},sm: {span: 14},md: {span: 14},lg: {span: 16}},
        labelAlign: 'left',
      };
      const styles = {
        inputN:{ width: '100%' },
        FormI:{marginBottom: 0},
      }
      return (
      <React.Fragment>
          <Breadcrumb style={{ margin: '10px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Content style={{ background: '#fff',padding: '10px 10px'}}>
            <Row gutter={[24, 24]}>
              <Col sm={24} md={12}>
                <Basics getFieldDecorator={getFieldDecorator}/>
              </Col>
              <Col sm={24} md={12}>
                <Location getFieldDecorator={getFieldDecorator}/>
              </Col>
            </Row>
            {/* <Row gutter={[24, 24]}><Col sm={24} md={12}><div><h1>a</h1></div></Col></Row> */}
            <Row gutter={[24, 24]}>
              <Col sm={24} md={12}>
                <Form.Item style={styles.FormI} label="Notes">
                  {getFieldDecorator('EmpName', {})(<TextArea rows={4} placeholder="Notes ........ " />)}
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
          </Content>
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
  
  const NewEmp = Form.create({ name: 'validate_other' })(Demo);
  export default NewEmp;

