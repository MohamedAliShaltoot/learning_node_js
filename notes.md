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


## 4] Self Invoked Function 
    call itself once 

    ()() then (function (){
        console.log("hi self invoked fun.")
    }) ()

    when add two self invoked fun should separate them with ; 

    ✍ Why using Self Invoked Function ?

    👌 because if we use the same variables we put each developer code in  Self Invoked Function  and error will gone