# Notes

## Setup

* `npm init`
* `npm install --save react react-dom`

These are only for the `development` environment.

* `npm install --save-dev html-webpack-plugin webpack webpack-dev-server babel-{core,loader} babel-preset-react`

The following compiles all the React assets and stores them in the `dist` directory.

* `npm run production`

To run the `development` server, use the following. This is configured under `scripts` in `package.json`.

* `npm run start`

The (local) server should then be accessible at `http://localhost:8080`.

## React

A "pure" function has the following characteristics:

* It always returns the same result given the same arguments.
* Its execution does not depend on the state of the application.
* It does not modify variables outside of its scope.

React's `render` method is a pure function.

Everything in React must be rendered inside a "root" element.

All React components should be:

* Focused
* Independent
* Reusable
* Small
* Testable

### Lifecycle Methods

1. When a component gets mounted to the DOM and unmounted.
2. When a component receives new data.

On mount:

* Establish some default props in our component.
* Set some initial state in our component.
* Make an Ajax request to fetch some data needed for this component.
* Set up any listeners.

On unmount:

* Remove any listeners you initially set up.

### JavaScript Notes

#### Implicit Binding

    var me = {
      name: 'Vilmos',
      age: 35,
      sayName: function(){
        console.log(this.name);
      }
    };
    
    me.sayName; // Implicit binding (look left of the dot to see what 'this' is referencing)

#### Mixin

    var sayNameMixin = function(obj){
      obj.sayName = function(){
        console.log(this.name);
      };
    };
    
    var me = {
      name: 'Vilmos',
      age: 35
    };
    
    sayNameMixin(me);
    
    me.sayName;

#### Explicit Binding

The `call` function allows us to set the `this` attribute of any function like so:

    var sayName = function(lang1, lang2, lang3){
      console.log(this.name + ' ' + lang1 + ' ' + lang2 + ' ' + lang3);
    };
    
    var me = {
      name: 'Vilmos',
      age: 35
    };
    
    var languages = ['JavaScript', 'Ruby', 'Python'];
    
    sayName.call(me, languages[0], languages[1], languages[2]);
    sayName.apply(me, languages);

In this case, the first parameter ends up being the context. The rest are passed as standard arguments. Note `apply` is the same as `call` except the `languages` arrays gets automatically split up into arguments.

    var newFn = sayName.bind(me, languages[0], languages[1], languages[2]);
    
    newFn();
