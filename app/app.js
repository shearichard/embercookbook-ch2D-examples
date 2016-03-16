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
console.log("Multi Mixin Example***********************");
console.log("");
const secondObject = secondobj.create();
console.log(secondObject.get('secondProperty'));

console.log("*******************************************");
console.log("");

console.log("Enumerable Example - forEach ************");
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

//Use `mapBy` to deal with arrays of objects
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
export default App;
