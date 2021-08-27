import React, {useState} from 'react'
import {
    Form, 
    Input, 
    Button,
    InputNumber,
    DatePicker,
    Radio,
    Row, 
    Col,
} from 'antd'
import DragDrop from '../common/DragDrop/DragDrop.jsx';
const {TextArea} = Input

const genders = [
    {
        label: 'Male',
        value: 'male'
    },
    {
        label: 'Female',
        value: 'female'
    },
]

function PersonalInformation(props) {

    const [gender, setGender] = useState()

    return (
        <Form
            name="personalInformation"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}

        >
            <Form.Item
                label="Phone number"
                name="phoneNumber"
                wrapperCol={{ span: 8 }}
                rules={[{ required: true, message: 'Please input your Phone number!' }]}
            >
                <InputNumber/>
            </Form.Item>

            <Form.Item
                label="Email"
                name="email"
                wrapperCol={{ span: 8 }}
                rules={[{ required: true, message: 'Please enter your Email!' }]}
            >
                <Input type="email" placeholder="abc@gmail.com" />
            </Form.Item>

            <Form.Item
                label="First Name"
                name="firstName"
                wrapperCol={{ span: 8 }}
                rules={[{ required: true, message: 'Please enter your First Name!' }]}
            >
                <Input type="text" placeholder="Adam" />
            </Form.Item>

            <Form.Item
                label="Last Name"
                name="lastName"
                wrapperCol={{ span: 8 }}
                rules={[{ required: true, message: 'Please enter your Last Name!' }]}
            >
                <Input type="text" placeholder="John" />
            </Form.Item>

            <Form.Item
                label="Date of Birth"
                name="dob"
                wrapperCol={{ span: 8 }}
                rules={[{ required: true, message: 'Please enter your Date of Birth!' }]}
            >
                <DatePicker/>
            </Form.Item>

            <Form.Item
                label="Gender"
                name="gender"
                wrapperCol={{ span: 8 }}
                rules={[{ required: true, message: 'Please enter your Gender!' }]}
            >
                <Radio.Group 
                    options={genders}
                    value={gender}
                    onChange={setGender}
                    optionType="button"
                />
            </Form.Item>

            <Form.Item
                label="Address"
                name="address"
                wrapperCol={{ span: 8 }}
                rules={[{ required: true, message: 'Please enter your Address!' }]}
            >
                <TextArea 
                    rows={4} 
                    allowClear
                    maxLength={150}
                    showCount
                />
            </Form.Item>

            <Form.Item
            wrapperCol={{ offset: 7 }}
            >
                <Row>
                    <Col span={6}>
                        <Form.Item
                            label="City"
                            name="city"
                            rules={[{ required: true, message: 'Please enter your City!' }]}
                        >
                            <Input type="text" placeholder="New York" />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            label="State"
                            name="state"
                            rules={[{ required: true, message: 'Please enter your State!' }]}
                        >
                            <Input type="text" placeholder="New York" />
                        </Form.Item>
                        
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            label="ZIP Code"
                            name="zip"
                            rules={[{ required: true, message: 'Please enter your ZIP Code!' }]}
                        >
                            <InputNumber max={99999} placeholder="12345" />
                        </Form.Item>
                    </Col>
                </Row>
            </Form.Item>

            <Form.Item
                wrapperCol={{ offset: 8, span: 8 }}
            >
                <DragDrop
                    name="avatar"
                    className="avatar-uploader"
                    listType="picture-card"
                    {...props}
                />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default PersonalInformation
