import inquirer from "inquirer";
import banner from "node-banner";
(async () => {
    await banner('L M S', 'Welcome to our Learning Managment System', 'red', 'blue');
})();
const courses_des = [
    {
        name: 'Artifical Intelligence (AI)',
        description: 'AI is for everyone',
        outline: "ML,DL",
    },
    {
        name: 'Web 3.0',
        description: 'Advanced Web development',
        outline: "Decentralization",
    },
    {
        name: 'Blockchain',
        description: 'introducion to blockchain',
        outline: "All about blockchain",
    },
    {
        name: 'IOT',
        description: 'IoT is the internet of things.',
        outline: "All about IOT",
    },
];
let roll_num = 1;
let student_course = [
    {
        name: "courses",
        type: "list",
        choices: ["AI", "Web 3.0", "Blockchain", "IOT"],
        message: "Select your desired course"
    },
];
let st_n = [
    {
        name: "st_name",
        type: "string",
        message: "Enter name",
    },
];
let again = [
    {
        name: "continue_op",
        type: "confirm",
        message: "Add more students"
    }
];
// type obj = 
//     {name : string,
//     course : string,
//     id : number}
async function sel() {
    let condition = true;
    const myArray = [];
    function addObjectToArray(obj) {
        myArray.push(obj);
    }
    while (condition) {
        let { courses } = await inquirer.prompt(student_course);
        let { st_name } = await inquirer.prompt(st_n);
        let student = {
            name: st_name,
            course: courses,
            id: roll_num
        };
        addObjectToArray(student);
        roll_num++;
        let { continue_op } = await inquirer.prompt(again);
        condition = continue_op;
    }
    console.table(myArray);
}
setTimeout(function () {
    console.log("We offer you 4 courses");
    console.log("There information is given below");
    console.table(courses_des);
    sel();
}, 1000);
