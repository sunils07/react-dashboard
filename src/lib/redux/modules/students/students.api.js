import axios from "axios";
import { students, studentsSuccess, studentsFail } from "./students.actions";
import { STUDENTS_API_URL } from "../../../../constants/api-urls.constant";

export function getStudents() {
    return (dispatch) => {
        dispatch(students(true));
        return axios.get(STUDENTS_API_URL)
            .then((resp) => {
                dispatch(studentsSuccess(resp.data));
            })
            .catch((error) => {
                dispatch(studentsFail(error.error));
            });
    };
}