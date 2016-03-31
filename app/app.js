import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';
//import common from './common';
import common from './mixins/common';
import secondMixin from './secondMixin';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const obj = Ember.Object.extend(common,{
    objprop: 'This is an Ember object property'
});
const object = obj.create();

console.log("Simple Mixin Example***********************");
console.log("");
console.log(object.get('objprop')); // outputs 'This is an Ember object property'
console.log(object.get('property1')); // outputs 'This is a mixin property'
console.log(object.get('isEditing')); // output 'false'
object.edit(); //Starting to edit
console.log(object.get('isEditing')); //outputs 'true'
console.log("*******************************************");
console.log("");
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const secondobj = Ember.Object.extend(common, secondMixin, {
    objprop: 'This is an Ember object Property'
});
console.log("*******************************************");
console.log("Multi Mixin Example***********************");
console.log("This example outputs a property value from one of the two mixins which the base object uses.");
console.log("");
const secondObject = secondobj.create();
console.log(secondObject.get('secondProperty'));

console.log("*******************************************");
console.log("");
console.log("*******************************************");
console.log("Enumerable Example - forEach ************");
console.log("This iterates through the enumerable, calling the passed function on each item.")
console.log("In this case the function concatenates 'Student' , the idx, and the value.")
console.log("");
const students = ['Erik', 'Jim', 'Shelly', 'Kate'];
students.forEach(function(item, index) {
    console.log(`Student #${index+1}: ${item}`);
});
console.log("Enumerable Example - map ****************");
console.log("");

//Use `map` to convert every item to uppercase
//Notice that the array `students` is hardcoded
//into the resulting function assigned to 
//`upperCaseStudent`
const upperCaseStudent = students.map(function(item) {
    return item.toUpperCase();
});
upperCaseStudent.forEach(function(item, index) {
    console.log(`student #${index+1}: ${item}`);
});

console.log("*******************************************");
console.log("");
console.log("Enumerable Example - mapby ****************");
console.log("Use `mapBy` to deal with arrays of objects");
console.log("In this case to output the `name` property of each of the objects.");
const student = Ember.Object.extend({
    name: 'Erik Hanchett',
    age: 18
});
const teacher = Ember.Object.extend({
    name: 'John P. Smith',
    age: 48
});
const t= teacher.create();
const s = student.create();
const people = [s, t];

//Output the `name` property of each 
//of the objects contained in the 
//`people` array
console.log(people.mapBy('name'));

console.log("*******************************************");
console.log("");
console.log("Enumerable Example - method - `lastObject`");
console.log("");
console.log(students.get('lastObject')); //Kate 
console.log("*******************************************");
console.log("");
console.log("Enumerable Example - method - `firstObject`");
console.log("");
console.log(students.get('firstObject')); //Erik 
console.log("*******************************************");
console.log("");
console.log("Enumerable Example - method - `pushObject`");
console.log("Add an item into the array and then output it.");
console.log("");
students.pushObject('Jeff'); 
console.log(students.get('lastObject')); //Jeff 
console.log("*******************************************");
console.log("");
console.log("Enumerable Example - use filter on an array of primitives");
console.log("A very common practice is to take an array and return a filtered list of items.");
console.log("");
const array = [1,2,5,10,25,23];  
const newArray =array.filter(function(item, index, self) {
    return item > 10;
})
console.log(newArray); //[25,23]
console.log("*******************************************");
console.log("");
console.log("Enumerable Example - use filterBy on an array of primitives");
console.log("A very common practice is to take an array and return a filtered list of items.");
console.log("Here we filter an array of objects and use `forEach` to confirm the result.");
console.log("");
const student = Ember.Object.extend({
    grade: null,
      name: null
});
const listOfStudents = [
    student.create({grade: 'senior', name: 'Jen Smith'}),
    student.create({grade: 'sophmore', name: 'Ben Shine'}),
    student.create({grade: 'senior', name: 'Ann Cyrus'})
];
const newStudent = listOfStudents.filterBy('grade','senior');
newStudent.forEach(function(item,index){
    console.log(item.get('name'));
});









export default App;
