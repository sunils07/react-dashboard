import axios from "axios";
import { studentStat, studentStatSuccess, studentStatFail } from "./student-stat.actions";
import { STUDENT_STAT_API_URL } from "../../../../constants/api-urls.constant";

export function getStudentStat() {
    return (dispatch) => {
        dispatch(studentStat(true));
        return axios.get(STUDENT_STAT_API_URL)
            .then((resp) => {
                dispatch(studentStatSuccess(resp.data));
            })
            .catch((error) => {
                dispatch(studentStatFail(error.error));
            });
    };
}