import React from 'react'
import MainLayout from '../../components/common/MainLayout/MainLayout.jsx';
import CustomTabs from '../../components/common/CustomTabs/CustomTabs.jsx';
import PersonalInformation from '../../Components/PersonalInformation/PersonalInformation.jsx';

function SignupContainer(props) {
    return (
        <MainLayout title="Sign Up Form" {...props}>
            <CustomTabs {...props} >
                <PersonalInformation index="1" />
            </CustomTabs>
        </MainLayout>
    )
}

export default SignupContainer
