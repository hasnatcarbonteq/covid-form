import { combineReducers } from "redux";
import familyDetailsReducer from "./familyDetailsReducer";
import patientPersonalInfoReducer from "./patientPersonalInfoReducer";
import insuranceDetailsReducer from "./insuranceDetailsReducer";

const appReducer = combineReducers({
    familyDetails: familyDetailsReducer,
    patientPersonalInfo: patientPersonalInfoReducer,
    insuranceDetails: insuranceDetailsReducer,
})

const rootReducer = (state, action) => {
    return appReducer(state, action);
}

export default rootReducer;