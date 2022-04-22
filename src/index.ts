import { app } from "./app";
import { insertClass } from "./endpoints/Class/insertClass";
import {insertTeacher} from "./endpoints/Teacher/insertTeacher"


//POSTS

app.post("/class", insertClass);
//app.post("/student", insertStudent);
app.post("/teacher", insertTeacher);

//GETS

// app.get("/class", getActiveClasses)
// app.get("/student", getStudent)
// app.get("/teacher", getTeacher)

//PUTS

// app.put("/class/module", changeModule);
// app.put("/student/class", changeStudentClass);
// app.put("/teacher/class", changeTeacherClass);
