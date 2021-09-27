export const validatePersonalInformation = (data) => {
    const errors = {}
    if(!data.phoneNumber) {
        errors.phoneNumber = 'Phone number is required'
    }
    if(!data.email) {
        errors.email = 'Email is required'
    }
    if(!data.firstName) {
        errors.firstName = 'First name is required'
    }
    if(!data.lastName) {
        errors.lastName = 'Last name is required'
    }
    if(!data.dateOfBirth) {
        errors.dateOfBirth = 'Date of birth is required'
    }
    if(!data.gender) {
        errors.gender = 'Gender is required'
    }
    if(!data.address) {
        errors.address = 'Address is required'
    }
    if(!data.city) {
        errors.city = 'City is required'
    }
    if(!data.state) {
        errors.state = 'State is required'
    }
    if(!data.zip) {
        errors.zip = 'ZIP is required'
    }


    let isValid = (Object.keys(errors).length === 0) ? true : false;
    return {isValid, errors};
}