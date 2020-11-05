import { combineReducers } from "redux";
import StudentStat from "./modules/student-stats/student-stat.reducer";
import Students from "./modules/students/students.reducer";

const rootReducer = combineReducers({
    StudentStat,
    Students
});

export default rootReducer;