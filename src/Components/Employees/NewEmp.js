import React from 'react'

import {
    Typography,
    Form,
    Layout,
    Breadcrumb,
    Select,
    InputNumber,
    NumericInput,
    Input,
    Switch,
    Radio,
    Slider,
    Button,
    Upload,
    Icon,
    Rate,
    Checkbox,
    Row,
    Col,
  } from 'antd';
  const { Content } = Layout;
  const { Option } = Select;
  const { Title } = Typography;

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
      console.log(this.props.form);
      const { getFieldDecorator } = this.props.form;
      const formItemLayout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
        labelAlign: 'left',
      };
      const styles = {
        inputN:{ width: '100%' },
        FormI:{marginBottom: 0},
      }
      const prefixSelector = getFieldDecorator('prefix', {
        initialValue: '86',
      })(
        <Select style={{ width: 70 }}>
          <Option value="86">+86</Option>
          <Option value="87">+87</Option>
        </Select>,
      );
      return (
      <React.Fragment>
          <Breadcrumb style={{ margin: '10px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Content style={{ background: '#fff',padding: '10px 10px'}}>
            <Row gutter={[8, 8]}>
              <Col span={12}>
                <Form.Item style={styles.FormI} label="Code">
                  {getFieldDecorator('Code', {
                    rules: [{ required: true, message: 'Please input Code!' }],
                  })(<InputNumber placeholder="Type Code" style={styles.inputN} min={0} max={999}/>)}
                </Form.Item>
                <Form.Item style={styles.FormI} label="Employee Name">
                  {getFieldDecorator('input', {
                    rules: [{ required: true, message: 'Please type employee name!' }],
                  })(<Input placeholder="Type Employee Name" />)}
                </Form.Item>
                <Form.Item style={styles.FormI} label="ID Type" hasFeedback>
                  {getFieldDecorator('select', {
                    rules: [{ required: true, message: 'Please select Id Type!' }],
                  })(
                    <Select placeholder="Please select Id Type">
                      <Option value="it type 1">it type 1</Option>
                      <Option value="it type 2">it type 2</Option>
                      <Option value="it type 3">it type 3</Option>
                      <Option value="it type 4">it type 4</Option>
                    </Select>,
                  )}
                </Form.Item>
                <Form.Item style={styles.FormI} label="ID Number">
                  {getFieldDecorator('IDNum', {
                    rules: [{ required: true, message: 'Please type Id Number!' }],
                  })(<InputNumber placeholder="Type ID Number" style={styles.inputN}  max={99999999999999} />)}
                </Form.Item>
                <Form.Item style={styles.FormI} label="Phone">
                  {getFieldDecorator('Phone', {
                    rules: [{ required: true, message: 'Please type Phone Number!' }],
                  })(<Input placeholder="Type Phone" addonBefore={prefixSelector} style={styles.inputN} max={99999999999999} />)}
                </Form.Item>
                <Form.Item style={styles.FormI} label="Mobile">
                  {getFieldDecorator('Mobile', {
                    rules: [{ required: true, message: 'Please type Mobile Number!' }],
                  })(<Input placeholder="Type Mobile" style={styles.inputN} max={99999999999999}/>)}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[8, 8]}>
              <Col span={12}>
                
              </Col>
            </Row>
          </Content>
          {/* <Form.Item label="Select[multiple]">
            {getFieldDecorator('select-multiple', {
              rules: [
                { required: true, message: 'Please select your favourite colors!', type: 'array' },
              ],
            })(
              <Select mode="multiple" placeholder="Please select favourite colors">
                <Option value="red">Red</Option>
                <Option value="green">Green</Option>
                <Option value="blue">Blue</Option>
              </Select>,
            )}
          </Form.Item>
          <Form.Item label="Slider">
            {getFieldDecorator('slider')(
              <Slider
                marks={{
                  0: 'A',
                  20: 'B',
                  40: 'C',
                  60: 'D',
                  80: 'E',
                  100: 'F',
                }}
              />,
            )}
          </Form.Item>
  
          <Form.Item label="Radio.Group">
            {getFieldDecorator('radio-group')(
              <Radio.Group>
                <Radio value="a">item 1</Radio>
                <Radio value="b">item 2</Radio>
                <Radio value="c">item 3</Radio>
              </Radio.Group>,
            )}
          </Form.Item>
  
          <Form.Item label="Radio.Button">
            {getFieldDecorator('radio-button')(
              <Radio.Group>
                <Radio.Button value="a">item 1</Radio.Button>
                <Radio.Button value="b">item 2</Radio.Button>
                <Radio.Button value="c">item 3</Radio.Button>
              </Radio.Group>,
            )}
          </Form.Item>
  
          <Form.Item label="Checkbox.Group">
            {getFieldDecorator('checkbox-group', {
              initialValue: ['A', 'B'],
            })(
              <Checkbox.Group style={{ width: '100%' }}>
                <Row>
                  <Col span={8}>
                    <Checkbox value="A">A</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox disabled value="B">
                      B
                    </Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="C">C</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="D">D</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="E">E</Checkbox>
                  </Col>
                </Row>
              </Checkbox.Group>,
            )}
          </Form.Item> */}
  
          {/* <Form.Item label="Rate">
            {getFieldDecorator('rate', {
              initialValue: 3.5,
            })(<Rate />)}
          </Form.Item> */}
  
          {/* <Form.Item label="Upload" extra="longg">
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
          </Form.Item> */}
  
          {/* <Form.Item label="Dragger">
            {getFieldDecorator('dragger', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
            })(
              <Upload.Dragger name="files" action="/upload.do">
                <p className="ant-upload-drag-icon">
                  <Icon type="inbox" />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">Support for a single or bulk upload.</p>
              </Upload.Dragger>,
            )}
          </Form.Item> */}
  
          <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
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