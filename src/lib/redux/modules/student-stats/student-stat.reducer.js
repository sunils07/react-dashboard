import {
    STUDENT_STAT,
    STUDENT_STAT_SUCCESS,
    STUDENT_STAT_FAIL
} from "./student-stat.types";

const studentStatDefaultState = {
    requesting: false,
    list: [],
    error: null
};

export default function (state = studentStatDefaultState, action) {
    switch (action.type) {
        case STUDENT_STAT:
            return {
                ...state,
                type: STUDENT_STAT,
                requesting: action.requesting

            }
        case STUDENT_STAT_SUCCESS:
            return {
                ...state,
                type: STUDENT_STAT_SUCCESS,
                list: action.list
            };
        case STUDENT_STAT_FAIL:
            return {
                ...state,
                type: STUDENT_STAT_FAIL,
                error: action.error
            };
        default:
            return state;
    }
}