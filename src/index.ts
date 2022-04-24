import { app } from "./app";
import { changeClassModule } from "./endpoints/Class/ChangeClassModule";
import { getActiveClass } from "./endpoints/Class/FindActiveClass";
import { insertClass,  } from "./endpoints/Class/insertClass";
import { insertTeacher } from "./endpoints/Teacher/insertTeacher";

//POSTS

app.post("/class", insertClass);
//app.post("/student", insertStudent);
app.post("/teacher", insertTeacher);

//GETS

app.get("/activeclass", getActiveClass)
// app.get("/student", getStudent)
// app.get("/teacher", getTeacher)

//PUTS

app.put("/class/changemodule", changeClassModule);
// app.put("/student/class", changeStudentClass);
// app.put("/teacher/class", changeTeacherClass);
