import {
    STUDENTS,
    STUDENTS_SUCCESS,
    STUDENTS_FAIL
} from "./students.types";

export function students(requesting) {
    return {
        type: STUDENTS,
        requesting: requesting
    }
}

export function studentsSuccess(list) {
    return {
        type: STUDENTS_SUCCESS,
        list: list,
        requesting: false
    }
}

export function studentsFail(error) {
    return {
        type: STUDENTS_FAIL,
        error: error,
        requesting: false
    }
}