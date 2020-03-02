const challenge1 = () => {
    let students = [
        {name: 'Remy', cohort: 'Jan'},
        {name: 'Genevieve', cohort: 'March'},
        {name: 'Chuck', cohort: 'Jan'},
        {name: 'Osmund', cohort: 'June'},
        {name: 'Nikki', cohort: 'June'},
        {name: 'Boris', cohort: 'June'}
    ];
    for (let x = 0; x<students.length; x++){
        console.log(students[x].name,students[x].cohort);
    }
}
challenge1();

const challenge2 = () => {
    let users = {
        employees: [
            {'first_name':  'Miguel', 'last_name' : 'Jones'},
            {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
            {'first_name' : 'Nora', 'last_name' : 'Lu'},
            {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
        ],
        managers: [
            {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
            {'first_name' : 'Gordon', 'last_name' : 'Poe'}
        ]
    };
    for (let user of users.employees){
        console.log(user.last_name,user.first_name);
    }
    for (let user of users.managers){
        console.log(user.last_name,user.first_name);
    }
    
}
console.log('************************************');
challenge2();