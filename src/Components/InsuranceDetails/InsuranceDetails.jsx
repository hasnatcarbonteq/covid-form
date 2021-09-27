import React from 'react'
import {
    Form,
    InputNumber,
    Select,
    Switch,
    Checkbox,
    Typography,
    Upload,
    Button,
} from 'antd'
import { UploadOutlined } from '@ant-design/icons';
const {Title} = Typography

const { Option } = Select;

function InsuranceDetails(props) {

    const {
        insuranceData,
        setInsuranceData,
        InsuranceCompanies,
    } = props;

    const normFile = (e) => {
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
            <Title level={3}>Insurance Details</Title>
            <Form.Item
                name="isInsured"
                label="Are you insuranced?"
                wrapperCol={{ span: 8 }}
                valuePropName="checked"
                initialValue={insuranceData.isInsured}
            >
                <Switch
                    // checked={insuranceData['isInsured']}
                    onChange={setInsuranceData}
                />
            </Form.Item>
            <Form.Item
                noStyle
                shouldUpdate={(prevValues, currentValues) => prevValues.isInsured !== currentValues.isInsured}
            >
                {({ getFieldValue }) => {
                    return getFieldValue('isInsured') ? (
                        <>
                            <Form.Item
                                name="insuranceDocuments"
                                label="Submit papers"
                                wrapperCol={{ span: 8 }}
                                valuePropName="fileList"
                                getValueFromEvent={normFile}
                                rules={[{ required: true, message: 'Please submit!' }]}
                            >
                                <Upload name="logo"  listType="picture" customRequest={dummyRequest}>
                                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                                </Upload>
                            </Form.Item>
                            <Form.Item
                                name="insuranceCompany"
                                label="Insurance Company"
                                wrapperCol={{ span: 8 }}
                                rules={[{ required: true, message: 'Please select insurance company!' }]}
                            >
                                <Select
                                    placeholder="Select Insurance Company"
                                    onChange={(e) => setInsuranceData({...insuranceData, insuranceCompany: e})}
                                >
                                    {InsuranceCompanies.map((company) => (
                                        <Option key={company.value} value={company.value}>
                                            {company.label}
                                        </Option>
                                    ))}
                                </Select>
                            </Form.Item>
                            <Form.Item 
                                name="insurancePolicyNumber"
                                label="Insurance Number"
                                wrapperCol={{ span: 8 }}
                                rules={[{ required: true, message: 'Please input your insurance number!' }]}
                            >
                                <InputNumber style={{width: '100%'}}/>
                            </Form.Item>
                        </>
                    ) : <Form.Item
                            name="isAttested"
                            label="insurance attestation"
                            wrapperCol={{ span: 8 }}
                            valuePropName="checked"
                            rules={[{ required: true, message: 'Please check!' }]}
                        >
                            <Checkbox >I have attested that I am not insured</Checkbox>
                        </Form.Item>
                }}

            </Form.Item>
        </>
    )
}

export default InsuranceDetails
