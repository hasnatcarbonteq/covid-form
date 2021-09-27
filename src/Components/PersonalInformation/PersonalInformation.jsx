import React from 'react'
import {
    Form, 
    Input, 
    Typography,
    InputNumber,
    DatePicker,
    Radio,
    Row, 
    Col,
    Upload,
    Button,
} from 'antd'
import { UploadOutlined } from '@ant-design/icons';
const {TextArea} = Input
const {Title} = Typography

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
    } = props

    const handleDate = (value, formattedDate) => {
        console.log(formattedDate)
        setPersonalFormData({
            ...personalFormData,
            dateOfBirth: formattedDate
        })
    }

    const normFile = (e) => {
        if (Array.isArray(e)) {
          return e;
        }
        return e && e.fileList;
    };

    const dummyRequest = ({ file, onSuccess }) => {
        setTimeout(() => {
          onSuccess("ok");
        }, 0);
    };

    return (
        <>
            <Title level={3}>Personal Information</Title>
            <Form.Item
                label="Phone number"
                name="phoneNumber"
                wrapperCol={{ span: 8 }}
                rules={[{ required: true, message: 'Phone Number is required!',}]}
            >
                <InputNumber className="inputNumberField"
                    placeholder="+92-3030213542"
                    
                />
            </Form.Item>

            <Form.Item
                label="Email"
                name="email"
                wrapperCol={{ span: 8 }}
                rules={[{ required: true, message: 'Email is required!' }]}
            >
                <Input 
                    placeholder="abc@gmail.com" 
                    // value={personalFormData["email"]}
                    // onChange={(e) => setPersonalFormData({...personalFormData, email: e.target.value})}
                />
            </Form.Item>

            <Form.Item
                label="First Name"
                name="firstName"
                wrapperCol={{ span: 8 }}
                rules={[{ required: true, message: 'First Name is required!' }]}
            >
                <Input 
                    placeholder="Adam" 
                    // value={personalFormData["firstName"]}
                    // onChange={(e) => setPersonalFormData({...personalFormData, firstName: e.target.value})}
                />
            </Form.Item>

            <Form.Item
                label="Last Name"
                name="lastName"
                wrapperCol={{ span: 8 }}
                rules={[{ required: true, message: 'Please enter your Last Name!' }]}
            >
                <Input 
                    // value={personalFormData["lastName"]}
                    // onChange={(e) => setPersonalFormData({...personalFormData, lastName: e.target.value})}
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
                    // value={personalFormData["dateOfBirth"]}
                    // onChange={handleDate}
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
                    // value={personalFormData["gender"]}
                    // onChange={(e) => setPersonalFormData({...personalFormData, gender: e.target.value})}
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
                    // value={personalFormData["address"]}
                    // onChange={(e) => setPersonalFormData({...personalFormData, address: e.target.value})}
                />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 7 }}>
                <Row>
                    <Col span={6}>
                        <Form.Item
                            label="City"
                            name="city"
                            rules={[{ 
                                required: true,
                                message: 'Please enter your City!'
                                }]}
                        >
                            <Input 
                                placeholder="New York" 
                                // value={personalFormData["city"]}
                                // onChange={(e) => setPersonalFormData({...personalFormData, city: e.target.value})}
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
                                // value={personalFormData["state"]}
                                // onChange={(e) => setPersonalFormData({...personalFormData, state: e.target.value})}
                                placeholder="New York" 
                            />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            label="ZIP Code"
                            name="zip"
                            rules={[{ required: true, message: 'Please enter your ZIP Code!' }]}
                        >
                            <InputNumber 
                                max={99999} 
                                placeholder="12345" 
                            />
                        </Form.Item>
                    </Col>
                </Row>
            </Form.Item>

            <Form.Item
                label="ID Snapshot"
                name="idSnap"
                wrapperCol={{ span: 8 }}
                valuePropName="fileList"
                getValueFromEvent={normFile}
                rules={[{ required: true, message: 'Please upload your ID Snapshot!' }]}
            >
                <Upload 
                    name="logo"  
                    listType="picture" 
                    customRequest={dummyRequest}>
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
            </Form.Item>

        </>
    )
}

export default PersonalInformation
