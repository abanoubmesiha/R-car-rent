import React, {Component} from 'react';
import { Form, Row, Col, Input, Button, Icon, Card, Select, Tooltip } from 'antd';

const InputGroup = Input.Group;
const { Option } = Select;

class AddClient extends Component {



    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };

        const { Option } = Select;

        function onChange(value) {
            console.log(`selected ${value}`);
        }

        function onBlur() {
            console.log('blur');
        }

        function onFocus() {
            console.log('focus');
        }

        function onSearch(val) {
            console.log('search:', val);
        }

        return (
            <React.Fragment>

                <Form {...formItemLayout} className="ant-advanced-search-form">
                        <div style={{ background: '#ECECEC', padding: '30px' }}>
                            <Card style={{height: "170px", backgroundColor: "#D1E5CE"}}>
                                <p><b>Instructions</b>/nis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </Card>
                            <Row gutter={8}>
                                <Col span={12}>
                                    <Card title="Basic Information" bordered={true} >
                                        <Form.Item label="Code">
                                            {getFieldDecorator('field-code', {
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: 'Provide the code!',
                                                    },
                                                ],
                                            })(<Input placeholder="Code" style={{width:"50%"}}/>)}
                                        </Form.Item>

                                        <Form.Item label="Full Complete Name">
                                            {getFieldDecorator('field-name', {
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: 'Provide the name!',
                                                    },
                                                ],
                                            })(<Input placeholder="Name"
                                                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                      suffix={
                                                          <Tooltip title="Extra information">
                                                              <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                                                          </Tooltip>}/>)}
                                        </Form.Item>

                                        <Form.Item label="Identification">
                                            {getFieldDecorator('field-id', {
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: 'Provide the id!',
                                                    },
                                                ],
                                            })(<InputGroup compact>
                                                <Select defaultValue="ID" style={{width: "20%"}}>
                                                    <Option value="ID">ID</Option>
                                                    <Option value="IQAMA">IQAMA</Option>
                                                </Select>
                                                <Input style={{width:"80%"}}/>
                                            </InputGroup>)}
                                        </Form.Item>

                                        <Form.Item label="Phone">
                                            {getFieldDecorator('field-phone', {
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: 'Provide the id!',
                                                    },
                                                ],
                                            })(<Input/>)}
                                        </Form.Item>

                                        <Form.Item label="Mobile">
                                            {getFieldDecorator('field-mobile', {
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: 'Provide the mobile!',
                                                    },
                                                ],
                                            })(<Input/>)}
                                        </Form.Item>

                                        <Form.Item label="Email">
                                            {getFieldDecorator('field-email', {
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: 'Provide the email!',
                                                    },
                                                ],
                                            })(<Input/>)}
                                        </Form.Item>
                                    </Card>
                                </Col>
                                <Col span={12}>
                                    <Card title="Address Information" bordered={true}>
                                        <Form.Item label="Country">
                                            {getFieldDecorator('field-country', {
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: 'Provide the country!',
                                                    },
                                                ],
                                            })(<Select
                                                showSearch
                                                // style={{ width: 200 }}
                                                placeholder="Select a country"
                                                optionFilterProp="children"
                                                onChange={onChange}
                                                onFocus={onFocus}
                                                onBlur={onBlur}
                                                onSearch={onSearch}
                                                filterOption={(input, option) =>
                                                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                }
                                            >
                                                <Option value="Saudi Arabia">Saudi Arabia</Option>
                                                <Option value="Egypt">Egypt</Option>
                                                <Option value="India">India</Option>
                                            </Select>)}
                                        </Form.Item>

                                        <Form.Item label="Region">
                                            {getFieldDecorator('field-region', {
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: 'Provide the region!',
                                                    },
                                                ],
                                            })(<Select
                                                showSearch
                                                // style={{ width: 200 }}
                                                placeholder="Select a region"
                                                optionFilterProp="children"
                                                onChange={onChange}
                                                onFocus={onFocus}
                                                onBlur={onBlur}
                                                onSearch={onSearch}
                                                filterOption={(input, option) =>
                                                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                }
                                            >
                                                <Option value="Region1">Region1</Option>
                                                <Option value="Region2">Region2</Option>
                                                <Option value="Region3">Region3</Option>
                                            </Select>)}
                                        </Form.Item>

                                        <Form.Item label="City">
                                            {getFieldDecorator('field-city', {
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: 'Provide the city!',
                                                    },
                                                ],
                                            })(<Select
                                                showSearch
                                                // style={{ width: 200 }}
                                                placeholder="Select a city"
                                                optionFilterProp="children"
                                                onChange={onChange}
                                                onFocus={onFocus}
                                                onBlur={onBlur}
                                                onSearch={onSearch}
                                                filterOption={(input, option) =>
                                                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                }
                                            >
                                                <Option value="Cairo">Cairo</Option>
                                                <Option value="Riyadh">Riyadh</Option>
                                                <Option value="Delhi">Delhi</Option>
                                            </Select>)}
                                        </Form.Item>

                                        <Form.Item label="Postal Code">
                                            {getFieldDecorator('field-postalCode', {
                                                rules: [
                                                    {
                                                        required: false,
                                                        message: 'Provide the email!',
                                                    },
                                                ],
                                            })(<Input/>)}
                                        </Form.Item>

                                        <Form.Item label="Address Line(1)">
                                            {getFieldDecorator('field-addressLine1', {
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: 'Provide the address line 1!',
                                                    },
                                                ],
                                            })(<Input/>)}
                                        </Form.Item>

                                        <Form.Item label="Address Line(2)">
                                            {getFieldDecorator('field-addressLine2', {
                                                rules: [
                                                    {
                                                        required: false,
                                                        message: 'Provide the address line 2!',
                                                    },
                                                ],
                                            })(<Input/>)}
                                        </Form.Item>

                                    </Card>
                                </Col>
                            </Row>
                            <Row gutter={24}>
                                <Col span={24}>
                                    <Card>
                                        <Button type="primary">Save</Button>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                </Form>
            </React.Fragment>
        );
    }
}

export default Form.create()(AddClient);