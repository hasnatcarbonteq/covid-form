import React from 'react'
import {
    Form,
    InputNumber,
    Select,
    Radio,
    Checkbox,
    DatePicker,
    Input,
    Button,
    Space,
} from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const InsuranceStatus = [
    "Same",
    "Other",
    "None"
]

function FamilyDetails(props) {

    const {insuranceStatus, setInsuranceStatus} = props

    return (
        <Form
            name="familyDetails"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
        >
            {/* <Form.Item
                label="First Name"
                name="firstName"
                wrapperCol={{ span: 8 }}
                rules={[{ required: true, message: 'Please input your first name!' }]}
            >
                <Input placeholder="Will" />

            </Form.Item>
            <Form.Item
                label="Last Name"
                name="lastName"
                wrapperCol={{ span: 8 }}
                rules={[{ required: true, message: 'Please input your last name!' }]}
            >
                <Input placeholder="Smith" />

            </Form.Item>
            
            <Form.Item
                label="Date of Birth"
                name="dateOfBirth"
                wrapperCol={{ span: 8 }}
                rules={[{ required: true, message: 'Please input your date of birth!' }]}
            >
                <DatePicker/>

            </Form.Item>

            <Form.Item
                label="Insurance Status"
                name="insuranceStatus"
                wrapperCol={{ span: 8 }}
                rules={[{ required: true, message: 'Please input your insurance status!' }]}
            >
                <Radio.Group 
                    optionType="button"
                    options={InsuranceStatus}
                    defaultValue={insuranceStatus}
                    value={insuranceStatus}
                    onChange={(e) => setInsuranceStatus(e.target.value) }
                />

            </Form.Item>

            {
                insuranceStatus === "Other" && (
                    <Form.Item
                    label="Insurance Status"
                name="insuranceStatus"
                    >

                    </Form.Item>
                )
            } */}
            <Form.List name="users"
            
            >
                {(fields, { add, remove }) => (
                <>
                    {fields.map(({ key, name, fieldKey, ...restField }) => (
                    <React.Fragment key={key} >
                        <Form.Item
                            {...restField}
                            label="First Name"
                            name={[name, "firstName"]}
                            fieldKey={[fieldKey, 'firstName']}
                            wrapperCol={{ span: 8}}
                            rules={[{ required: true, message: 'Please input your first name!' }]}
                        >
                            <Input placeholder="Will" />

                        </Form.Item>
                        <Form.Item
                            {...restField}
                            label="Last Name"
                            name={[name,"lastName"]}
                            fieldKey={[fieldKey, 'lastName']}
                            wrapperCol={{ span: 8}}
                            rules={[{ required: true, message: 'Please input your last name!' }]}
                        >
                            <Input placeholder="Smith" />

                        </Form.Item>
                        
                        <Form.Item
                            {...restField}
                            label="Date of Birth"
                            name={[name,"dateOfBirth"]}
                            fieldKey={[fieldKey, 'lastName']}
                            wrapperCol={{ span: 8}}
                            rules={[{ required: true, message: 'Please input your date of birth!' }]}
                        >
                            <DatePicker/>

                        </Form.Item>

                        <Form.Item
                            {...restField}
                            label="Insurance Status"
                            name={[name,"insuranceStatus"]}
                            fieldKey={[fieldKey, 'insuranceStatus']}
                            wrapperCol={{ span: 8}}
                            rules={[{ required: true, message: 'Please input your insurance status!' }]}
                        >
                            <Radio.Group 
                                optionType="button"
                                options={InsuranceStatus}
                                defaultValue={insuranceStatus}
                                value={insuranceStatus}
                                onChange={(e) => setInsuranceStatus(e.target.value) }
                            />

                        </Form.Item>

                        {
                            insuranceStatus === "Other" && (
                                <Form.Item
                                {...restField}
                                label="Insurance Status"
                                name={[name, "insuranceStatus"]}
                                fieldKey={[fieldKey, 'insuranceStatus']}
                                >

                                </Form.Item>
                            )
                        }
                        <MinusCircleOutlined onClick={() => remove(name)} />
                    </React.Fragment>
                    ))}
                    <Form.Item>
                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                        Add Member
                    </Button>
                    </Form.Item>
                </>
                )}
            </Form.List>
        </Form>
    )
}

export default FamilyDetails
