import React from 'react'
import {
    Form,
    InputNumber,
    Select,
    Switch,
    Checkbox,
} from 'antd'
import DragDrop from '../common/DragDrop/DragDrop.jsx';

const { Option } = Select;

const InsuranceCompanies = [
    {
        value: 'stateFarm',
        label: 'State Farm',
    },
    {
        value: 'geico',
        label: 'Geico',
    },
    {
        value: 'progressive',
        label: 'Progressive',
    },
    {
        value: 'allState',
        label: 'Allstate',
    },
    {
        value: 'usaa',
        label: 'USAA',
    },
    {
        value: 'libertyMutual',
        label: 'Liberty Mutual',
    },
    {
        value: 'farmersInsurance',
        label: 'Farmers Insurance',
    },
    {
        value: 'nationwide',
        label: 'Nationwide',
    },
    {
        value: 'americanFamilyInsurance',
        label: 'American Family Insurance',
    },
    {
        value: 'travelers',
        label: 'Travelers',
    },
]

function InsuranceDetails(props) {

    const {
        isInsured, 
        setIsInsured,
        insuranceCompany,
        setInsuranceCompany,
    } = props;
    return (
        <Form
            name="insuranceDetails"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
        >
            <Form.Item
                name="insuranceCheckbox"
                label="Are you insuranced?"
                wrapperCol={{ span: 8 }}
                rules={[{ required: true, message: 'Please select!' }]}
            >
                <Switch
                    checked={isInsured}
                    onChange={setIsInsured}
                />
            </Form.Item>
            {isInsured ? (
                <>
                    <Form.Item
                        name="paperCollection"
                        label="Submit papers"
                        wrapperCol={{ span: 8 }}
                        rules={[{ required: true, message: 'Please submit!' }]}
                    >
                        <DragDrop
                            name="insurance-papers"
                            className="avatar-uploader"
                            listType="picture-card"
                            maxCount={2}
                            {...props}
                        />
                    </Form.Item>

                    <Form.Item
                        name="selectCompany"
                        label="Select your insurance Company"
                        wrapperCol={{ span: 8 }}
                        rules={[{ required: true, message: 'Please select one from options!' }]}
                    >
                        <Select defaultValue={insuranceCompany} onChange={setInsuranceCompany} >
                            {
                                InsuranceCompanies.map(company => (
                                    <Option value={company.value}>{company.label}</Option>
                                ))
                            }
                        </Select>
                    </Form.Item>

                    <Form.Item 
                        name="insuranceNumber"
                        label="Insurance Number"
                        wrapperCol={{ span: 8 }}
                        rules={[{ required: true, message: 'Please input your insurance number!' }]}
                    >
                        <InputNumber/>
                    </Form.Item>
                </>
            ) : (
                <Form.Item
                    name="insuranceAttestation"
                    label="insurance attestation"
                    wrapperCol={{ span: 8 }}
                    rules={[{ required: true, message: 'Please submit!' }]}
                >
                    <Checkbox />
                </Form.Item>
            )}
        </Form>
    )
}

export default InsuranceDetails
