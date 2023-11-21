//import courses from "./courses.json" assert { type: "json" };
//import modules from "./modules.json" assert { type: "json" };
//import assignments from "./assignments.json" assert { type: "json" };
//import users from "./users.json" assert { type: "json" };
//import grades from "./grades.json" assert { type: "json" };
//import enrollments from "./enrollments.json" assert { type: "json" };

import { readFileSync } from "fs";
const courses = JSON.parse(readFileSync("./courses.json"));
const modules = JSON.parse(readFileSync("./modules.json"));
const assignments = JSON.parse(readFileSync("./assignments.json"));
const users = JSON.parse(readFileSync("./users.json"));
const grades = JSON.parse(readFileSync("./grades.json"));
const enrollments = JSON.parse(readFileSync("./enrollments.json"));


export default {
    courses,
    modules,
    assignments,
    users,
    grades,
    enrollments,
};

