import {
    STUDENT_STAT,
    STUDENT_STAT_SUCCESS,
    STUDENT_STAT_FAIL
} from "./student-stat.types";

export function studentStat(requesting) {
    return {
        type: STUDENT_STAT,
        requesting: requesting
    }
}

export function studentStatSuccess(list) {
    return {
        type: STUDENT_STAT_SUCCESS,
        list: list,
        requesting: false
    }
}

export function studentStatFail(error) {
    return {
        type: STUDENT_STAT_FAIL,
        error: error,
        requesting: false
    }
}