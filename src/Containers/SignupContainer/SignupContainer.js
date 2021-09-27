import React, {useState, useEffect} from 'react'
import {
    Button,
    Form,
    Space,
} from 'antd'
import MainLayout from '../../Components/Common/MainLayout/MainLayout.jsx';
import PersonalInformation from '../../Components/PersonalInformation/PersonalInformation.jsx';
import InsuranceDetails from '../../Components/InsuranceDetails/InsuranceDetails.jsx';
import FamilyDetails from '../../Components/FamilyDetails/FamilyDetails.jsx';

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

function SignupContainer(props) {

    const [form] = Form.useForm();
    // personal information data
    const [personalFormData, setPersonalFormData] = useState({
        phoneNumber: null,
        email: '',
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gender: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        idSnap: [],
    })

    // insurance details data
    const [insuranceData, setInsuranceData] = useState({
        isInsured: false,
        insuranceProvider: '',
        insurancePolicyNumber: '',
        insuranceDocuments: [],
        isAttested: true,
    })
    

    // family details data
    const [insuranceStatus, setInsuranceStatus] = useState("Other")
    const [insuranceOptions, setInsuranceOptions] = useState([
        {
            label: "Same",
            value: "Same"
        },
        {   
            label: "Other",
            value: "Other"
        },
        {
            label: "None",
            value: "None"
        }
    ])

    const handleInsuranceStatusChange = (value) => {
        setInsuranceData({...insuranceData, isInsured: value})
        !value && setInsuranceOptions([{
            label: "Same",
            value: "Same",
            disabled: false
        },
        {   
            label: "Other",
            value: "Other"
        },
        {
            label: "None",
            value: "None"
        }]) 
    }

    // functions

    const handleSubmit = (data) => {
        console.log(data)
    }

    
    return (
        <MainLayout title="Sign Up Form" {...props}>            
            <Form
                name="personalInformation"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                className="personalInformationForm"
                onFinish={handleSubmit}
                form={form}
            >
                <PersonalInformation 
                    personalFormData={personalFormData}
                    setPersonalFormData={setPersonalFormData}
                    {...props} 
                />
                <InsuranceDetails 
                    insuranceData={insuranceData}
                    setInsuranceData={handleInsuranceStatusChange}
                    InsuranceCompanies={InsuranceCompanies}
                    {...props} 
                />
                <FamilyDetails 
                    insuranceStatus={insuranceStatus}
                    insuranceOptions={insuranceOptions}
                    setInsuranceStatus={setInsuranceStatus}
                    InsuranceCompanies={InsuranceCompanies}
                {...props} />
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit"  >
                    Submit
                    </Button>
                </Form.Item>
            </Form>
            
        </MainLayout>
    )
}

export default SignupContainer
