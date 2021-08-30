import React, {useState, useEffect} from 'react'
import MainLayout from '../../components/common/MainLayout/MainLayout.jsx';
import CustomTabs from '../../components/common/CustomTabs/CustomTabs.jsx';
import PersonalInformation from '../../Components/PersonalInformation/PersonalInformation.jsx';
import InsuranceDetails from '../../Components/InsuranceDetails/InsuranceDetails.jsx';
import FamilyDetails from '../../Components/FamilyDetails/FamilyDetails.jsx';

function SignupContainer(props) {

    // personal information data
    const [personalFormData, setPersonalFormData] = useState({
        phoneNumber: '',
        email: '',
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gender: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        idSnap: '',
    })

    // insurance details data
    const [isInsured, setIsInsured] = useState(false)
    const [insuranceCompany, setInsuranceCompany] = useState('')

    // family details data
    const [insuranceStatus, setInsuranceStatus] = useState("Other")

    // functions

    const handlePersonalFormData = (data) => {
        console.log(data)
    }

    return (
        <MainLayout title="Sign Up Form" {...props}>
            <CustomTabs {...props} >
                <PersonalInformation 
                    index="1" 
                    personalFormData={personalFormData}
                    setPersonalFormData={setPersonalFormData}
                    onFinish={handlePersonalFormData}
                />
                <InsuranceDetails 
                    index="2"
                    isInsured={isInsured}
                    setIsInsured={setIsInsured}
                    insuranceCompany={insuranceCompany}
                    setInsuranceCompany={setInsuranceCompany}
                />
                <FamilyDetails
                    index="3"
                    insuranceStatus={insuranceStatus}
                    setInsuranceStatus={setInsuranceStatus}
                />
            </CustomTabs>
        </MainLayout>
    )
}

export default SignupContainer
