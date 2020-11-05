import {
    STUDENTS,
    STUDENTS_SUCCESS,
    STUDENTS_FAIL
} from "./students.types";

const studentStatDefaultState = {
    requesting: false,
    list: [],
    error: null
};

export default function (state = studentStatDefaultState, action) {
    switch (action.type) {
        case STUDENTS:
            return {
                ...state,
                requesting: action.requesting

            }
        case STUDENTS_SUCCESS:
            return {
                ...state,
                list: action.list
            };
        case STUDENTS_FAIL:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
}