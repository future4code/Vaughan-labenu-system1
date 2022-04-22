import {app} from "./app"
import {insertClass} from "./endpoints/Class/insertClass"



app.post("/class", insertClass)
