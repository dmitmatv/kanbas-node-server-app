//import courses from "./courses.json" assert { type: "json" };
//import {modules} from "./modules";
//import {assignments} from "./assignments"
//import {users} from "./users"
//import {grades} from "./grades"
//import {enrollments} from "./enrollments"
//import {courses} from "./courses.json" assert {type: "json"};

import { readFileSync } from "fs";
import { readFile } from 'node:fs/promises';
const coursesUrl = new URL("./courses.json", import.meta.url);
const courses = JSON.parse(await readFileSync(coursesUrl, 'utf8'));

const modulesUrl = new URL("./modules.json", import.meta.url);
const modules = JSON.parse(await readFileSync(modulesUrl, 'utf8'));

const assignmentsUrl = new URL("./assignments.json", import.meta.url);
const assignments = JSON.parse(await readFileSync(assignmentsUrl, 'utf8'));

const usersUrl = new URL("./users.json", import.meta.url);
const users = JSON.parse(await readFileSync(usersUrl, 'utf8'));

const gradesUrl = new URL("./grades.json", import.meta.url);
const grades = JSON.parse(await readFileSync(gradesUrl, 'utf8'));

const enrollmentsUrl = new URL("./enrollments.json", import.meta.url);
const enrollments = JSON.parse(await readFileSync(enrollmentsUrl, 'utf8'));

/*import { readFileSync } from "fs";
const courses = JSON.parse(readFileSync(".Database/courses.json"));
const modules = JSON.parse(readFileSync(".Database/modules.json"));
const assignments = JSON.parse(readFileSync(".Database/assignments.json"));
const users = JSON.parse(readFileSync(".Database/users.json"));
const grades = JSON.parse(readFileSync(".Database/grades.json"));
const enrollments = JSON.parse(readFileSync(".Database/enrollments.json"));*/


export default {
    courses,
    modules,
    assignments,
    users,
    grades,
    enrollments,
};

