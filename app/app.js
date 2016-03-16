import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';
import common from './common';

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


console.log(object.get('objprop')); // outputs 'This is an Ember object property'
console.log(object.get('property1')); // outputs 'This is a mixin property'
console.log(object.get('isEditing')); // output 'false'
object.edit(); //Starting to edit
console.log(object.get('isEditing')); //outputs 'true'



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default App;
