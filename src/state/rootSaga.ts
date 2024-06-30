import {all} from 'redux-saga/effects';
import userSaga from "./actions/user/userSaga";
import assessmentSaga from "./actions/assessment/assessment.saga";
export default function* rootSaga(): any {
    yield all([
        userSaga(),
        assessmentSaga(),
    ]);
}
