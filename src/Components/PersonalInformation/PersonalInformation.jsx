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

    const {
        personalFormData, 
        setPersonalFormData,
        onFinish,
    } = props

    const handleDate = (value, formattedDate) => {
        console.log(formattedDate)
        setPersonalFormData({
            ...personalFormData,
            dateOfBirth: formattedDate
        })
    }

    return (
        <Form
            name="personalInformation"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            className="personalInformationForm"
            onFinish={onFinish}
        >
            <Form.Item
                label="Phone number"
                name="phoneNumber"
                wrapperCol={{ span: 8 }}
                rules={[{ required: true, message: 'Please input your Phone number!' }]}
            >
                <InputNumber className="inputNumberField"
                    value={personalFormData["phoneNumber"]}
                    onChange={(value) => setPersonalFormData({...personalFormData, phoneNumber: value})}
                />
            </Form.Item>

            <Form.Item
                label="Email"
                name="email"
                wrapperCol={{ span: 8 }}
                rules={[{ required: true, message: 'Please enter your Email!' }]}
            >
                <Input 
                    placeholder="abc@gmail.com" 
                    value={personalFormData["email"]}
                    onChange={(e) => setPersonalFormData({...personalFormData, email: e.target.value})}
                />
            </Form.Item>

            <Form.Item
                label="First Name"
                name="firstName"
                wrapperCol={{ span: 8 }}
                rules={[{ required: true, message: 'Please enter your First Name!' }]}
            >
                <Input 
                    placeholder="Adam" 
                    value={personalFormData["firstName"]}
                    onChange={(e) => setPersonalFormData({...personalFormData, firstName: e.target.value})}
                />
            </Form.Item>

            <Form.Item
                label="Last Name"
                name="lastName"
                wrapperCol={{ span: 8 }}
                rules={[{ required: true, message: 'Please enter your Last Name!' }]}
            >
                <Input 
                    value={personalFormData["lastName"]}
                    onChange={(e) => setPersonalFormData({...personalFormData, lastName: e.target.value})}
                    placeholder="John" 
                />
            </Form.Item>

            <Form.Item
                label="Date of Birth"
                name="dateOfBirth"
                wrapperCol={{ span: 8 }}
                rules={[{ required: true, message: 'Please enter your Date of Birth!' }]}
            >
                <DatePicker
                    value={personalFormData["dateOfBirth"]}
                    onChange={handleDate}
                />
            </Form.Item>

            <Form.Item
                label="Gender"
                name="gender"
                wrapperCol={{ span: 8 }}
                rules={[{ required: true, message: 'Please enter your Gender!' }]}
            >
                <Radio.Group 
                    options={genders}
                    defaultValue={personalFormData["gender"]}
                    value={personalFormData["gender"]}
                    onChange={(e) => setPersonalFormData({...personalFormData, gender: e.target.value})}
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
                    value={personalFormData["address"]}
                    onChange={(e) => setPersonalFormData({...personalFormData, address: e.target.value})}
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
                            <Input 
                                placeholder="New York" 
                                value={personalFormData["city"]}
                                onChange={(e) => setPersonalFormData({...personalFormData, city: e.target.value})}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            label="State"
                            name="state"
                            rules={[{ required: true, message: 'Please enter your State!' }]}
                        >
                            <Input 
                                value={personalFormData["state"]}
                                onChange={(e) => setPersonalFormData({...personalFormData, state: e.target.value})}
                                placeholder="New York" 
                            />
                        </Form.Item>
                        
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            label="ZIP Code"
                            name="zip"
                            value={personalFormData["zip"]}
                            onChange={(e) => setPersonalFormData({...personalFormData, zip: e.target.value})}
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
