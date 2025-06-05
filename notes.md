## 1] === VS ==

=== compares between values only
== compares between types

## 2] False values :

    a) false b)""  c) 0   d) null d) undefined

## 3] hoisting

means separate declaration and initialization like this
var x =10; ---> var x ; then x=10;

## 4] Declaration Function VS Expression Function

    Declaration Function: can call it before or after fun implementation

    function demo(){
    console.log("demo);
    }

    Expression Function : can call it  after fun implementation only

    var demo =function (){
    console.log("demo);
    }

    then call fun like that demo()

    🧨 important note :

          after return inside fun statement will be as a ded code except declaration fun. will hoisting before applying return.


## 5] Self Invoked Function 
    call itself once 

    ()() then (function (){
        console.log("hi self invoked fun.")
    }) ()

    when add two self invoked fun should separate them with ; 

    ✍ Why using Self Invoked Function ?

    👌 because if we use the same variables we put each developer code in  Self Invoked Function  and error will gone

## 6] Destructing

    avoid doting[user.children.dsd.sds.sd.trt]

    we use this 

    var user={
        name: "mo",
        age:30,
        children:{
            child1:{
                name:"omr"
            },
             child2:{
                name:"ahmed"
            }
        }
    }

    then use 

    let {name,age,children} = user  [ user.children.child1.name == children.child1.name]

## 7] URL vs URI

    URL : google.com/about.html
    URI : google.com/about.html.product  but in the page product written like that Product 

    so in url should write the path correctly 
    but in 
    uri it is optional

## 8] npm and modules
    const os = module.require("node:os")
    const fs = module.require("node:fs")
    const http = module.require("node:http")


