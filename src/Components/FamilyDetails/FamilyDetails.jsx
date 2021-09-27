import React from 'react'
import {
    Form,
    Typography,
    Radio,
    DatePicker,
    Input,
    Button,
    Checkbox,
    Row, 
    Col,
    Upload,
    Select,
    InputNumber
} from 'antd'
import { MinusCircleOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';

const {Title} = Typography
const { Option } = Select;

function FamilyDetails(props) {

    const {
        insuranceStatus, 
        setInsuranceStatus, 
        insuranceOptions,
        InsuranceCompanies,
    } = props

    const normFile = (name, e) => {
        if (Array.isArray(e)) {
          return e;
        }
        return e.fileList;
    };

    const dummyRequest = ({ file, onSuccess }) => {
        setTimeout(() => {
          onSuccess("ok");
        }, 0);
    };

    return (
        <>
            <Title level={3}>Family Details</Title>
            <Form.List name="familyMembers">
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
                            fieldKey={[fieldKey, 'dateOfBirth']}
                            wrapperCol={{ span: 8}}
                            rules={[{ required: true, message: 'Please input your date of birth!' }]}
                        >
                            <DatePicker/>

                        </Form.Item>
                        <Form.Item
                            noStyle
                            shouldUpdate={(prevValues, currentValues) => prevValues.isInsured !== currentValues.isInsured}
                        >
                            {({  }) => {
                                return (
                                    <Form.Item
                                        {...restField}
                                        label="Insurance Status"
                                        name={[name,"insuranceStatus"]}
                                        fieldKey={[fieldKey, 'insuranceStatus']}
                                        dependencies={['isInsured']}
                                        wrapperCol={{ span: 8}}
                                        rules={[{ 
                                            required: true, 
                                            message: 'Please input your insurance status!' },
                                            ({ getFieldValue }) => ({
                                                validator(_, value) {
                                                if (!getFieldValue('isInsured')) {
                                                    insuranceOptions.find(item => item.value === 'Same').disabled = true
                                                    return Promise.resolve();
                                                }else {
                                                    insuranceOptions.find(item => item.value === 'Same').disabled = false
                                                    return Promise.resolve();
                                                }
                                                },
                                            }),
                                        ]}
                                    >
                                        <Radio.Group 
                                            optionType="button"
                                            options={insuranceOptions}
                                            // defaultValue={insuranceStatus}
                                            value={insuranceStatus}
                                            onChange={ (e) => setInsuranceStatus(e.target.value)}
                                        />

                                    </Form.Item>
                                )
                            }}
                        </Form.Item>
                        
                        <Form.Item
                            noStyle
                            shouldUpdate={(prevValues, currentValues) => prevValues.insuranceStatus !== currentValues.insuranceStatus}
                        >
                            {({ getFieldValue }) => {
                                return getFieldValue('familyMembers')[name]?.insuranceStatus === 'Other' ? (
                                    <>
                                        <Form.Item
                                            {...restField}
                                            label="Insurance Papers"
                                            name={[name,"insurancePapers"]}
                                            fieldKey={[fieldKey, 'insurancePapers']}
                                            dependencies={['insurancePapers']}
                                            wrapperCol={{ span: 8 }}
                                            valuePropName="fileList"
                                            getValueFromEvent={(e) => normFile(name, e)}
                                        >
                                            <Upload name="logo"  listType="picture" customRequest={dummyRequest}>
                                                <Button icon={<UploadOutlined />}>Click to upload</Button>
                                            </Upload>
                                        </Form.Item>
                                        <Form.Item
                                            {...restField}
                                            label="insurancePolicyNumber"
                                            name={[name,"insurancePolicyNumber"]}
                                            fieldKey={[fieldKey, 'insurancePolicyNumber']}
                                            dependencies={['insuranceStatus']}
                                            wrapperCol={{ span: 8 }}
                                        >
                                            <InputNumber style={{width: '100%'}}/>
                                        </Form.Item>
                                        <Form.Item
                                            {...restField}
                                            label="Insurance Company"
                                            name={[name,"insuranceCompany"]}
                                            fieldKey={[fieldKey, 'insuranceCompany']}
                                            dependencies={['insuranceStatus']}
                                            wrapperCol={{ span: 8}}
                                            rules={[{ 
                                                required: true, 
                                                message: 'Please input your insurance company!' },
                                                
                                            ]}
                                        >
                                            <Select>
                                                {InsuranceCompanies.map(item => (
                                                    <Option value={item.value} key={item.value} disabled={item.disabled}>{item.label}</Option>
                                                ))}
                                            </Select>
                                        </Form.Item>
                                    </>
                                ) : getFieldValue('familyMembers')[name]?.insuranceStatus === 'None' && <Form.Item
                                        {...restField}
                                        name="isAttested"
                                        label="insurance attestation"
                                        wrapperCol={{ span: 8 }}
                                        valuePropName="checked"
                                        rules={[{ required: true, message: 'Please check!' }]}
                                    >
                                        <Checkbox>I have attested that I am not insured</Checkbox>
                                </Form.Item>
                            }}


                        </Form.Item>
                        {/* <Form.Item
                            noStyle
                            shouldUpdate={(prevValues, currentValues) => prevValues.insuranceStatus !== currentValues.insuranceStatus}
                        >
                            {({ getFieldValue }) => {
                                
                                return getFieldValue('users')[name]?.insuranceStatus !== 'None' ? (
                                    <>
                                    <Form.Item
                                        {...restField}
                                        label="Submit papers"
                                        name={[name],"insuranceDocuments"}
                                        // dependencies={[name,"insuranceStatus"]}
                                        wrapperCol={{ span: 8 }}
                                        valuePropName="fileList"
                                        getValueFromEvent={normFile}
                                        fieldKey={[fieldKey, 'insuranceDocuments']}
                                        // rules={[{ required: true, message: 'Please submit!' }]}
                                    >
                                        <Upload name="logo"  listType="picture" customRequest={dummyRequest}>
                                            <Button icon={<UploadOutlined />}>Click to upload</Button>
                                        </Upload>
                                    </Form.Item>
                                    <Form.Item
                                        {...restField}
                                        name={[name],"insuranceCompany"}
                                        // dependencies={[name,"insuranceStatus"]}
                                        label="Insurance Company"
                                        wrapperCol={{ span: 8 }}
                                        fieldKey={[fieldKey, 'insuranceCompany']}
                                        // rules={[{ required: true, message: 'Please select insurance company!' }]}
                                    >
                                        <Select
                                            placeholder="Select Insurance Company"
                                        >
                                            {InsuranceCompanies.map((company) => (
                                                <Option key={company.value} value={company.value}>
                                                    {company.label}
                                                </Option>
                                            ))}
                                        </Select>
                                    </Form.Item>
                                    <Form.Item 
                                        {...restField}
                                        name={[name],"insurancePolicyNumber"}
                                        // dependencies={[name,"insuranceStatus"]}
                                        label="Insurance Number"
                                        wrapperCol={{ span: 8 }}
                                        fieldKey={[fieldKey, 'insurancePolicyNumber']}
                                        // rules={[{ required: true, message: 'Please input your insurance number!' }]}
                                    >
                                        <InputNumber style={{width: '100%'}}/>
                                    </Form.Item>
                                </>
                                    
                                ) : (<Form.Item
                                        {...restField}
                                        label="Insurance Attestation"
                                        name={[name, "insuranceAttestation"]}
                                        // dependencies={[name,"insuranceStatus"]}
                                        fieldKey={[fieldKey, 'insuranceAttestation']}
                                        valuePropName="checked"
                                    >
                                        <Checkbox />
                                    </Form.Item>)
                            }}
                            
                        </Form.Item> */}
                        <Row justify="flex-start" >
                            <Col span={16}>
                                <Button 
                                    icon={<MinusCircleOutlined/>} 
                                    type="primary"
                                    block
                                    onClick={() => remove(name)} >Remove</Button>
                            </Col>
                        </Row>
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
        </>
    )
}

export default FamilyDetails
