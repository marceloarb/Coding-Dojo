let hello = 'world';
console.log(hello);
console.log('*************************');

let needle = 'haystack';
const test=()=>{
	let needle = 'magnet';
	console.log(needle);
}
test();
console.log('*************************');


let brendan = 'super cool';
const print=()=>{
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);
console.log('*************************');

let food = 'chicken';
console.log(food);
const eat=()=>{
    // console.log(food) Why cant I access variable food?
    let food = 'gone';
    food = 'half-chicken';
    console.log(food);
	
}
eat();
console.log('*************************');


console.log(food);
let mean = function() {
	food = 'chicken';
	console.log(food);
	var food = "fish";
	console.log(food);
}
mean();
console.log(food);
console.log('*************************');


var genre = "disco";
console.log(genre);
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);
rewind();
console.log('*************************');

dojo = "san jose";
console.log(dojo);
const learn = () => {
    let dojo = "burbank";
    console.log(dojo);
    dojo = "seattle";
	console.log(dojo);
}
learn();
console.log(dojo);
console.log('*************************');

function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo.hiring = "closed for now";
        }
        return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));