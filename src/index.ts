import { app } from "./app";
import { changeClassModule } from "./endpoints/Class/ChangeClassModule";
import { getActiveClass } from "./endpoints/Class/FindActiveClass";
import { insertClass } from "./endpoints/Class/insertClass";
import { changeStudentClass } from "./endpoints/Students/ChangeStudentClass";
import { getStudentByname } from "./endpoints/Students/FindStudent";
import { InsertStudent } from "./endpoints/Students/insertStudent";
import { changeTeacherClass } from "./endpoints/Teacher/ChangeTeacherClass";
import { getTeachers } from "./endpoints/Teacher/FindTeachers";
import { insertTeacher } from "./endpoints/Teacher/insertTeacher";

//POSTS

app.post("/class", insertClass);
app.post("/student", InsertStudent);
app.post("/teacher", insertTeacher);

//GETS

app.get("/activeclass", getActiveClass);
app.get("/student", getStudentByname);
app.get("/teacher", getTeachers);

//PUTS

app.put("/class/changemodule", changeClassModule);
app.put("/student/class", changeStudentClass);
app.put("/teacher/class", changeTeacherClass);
