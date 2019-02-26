(function(){
    'use strict'
    class Student{
        constructor(a='sam', b='rav', c){
            this.firstName = a
            this.lastName = b
            this.age = c
        }
        getFullName = () => {
           return this.firstName+" "+this.lastName
        }
        add(x,y){
            return x+y;
        }
    }
    class Department extends Student{
        constructor(a, b){
            super(a, b)
            this.name
        }
    }
    let student = new Student();
    student.firstName = 'Google'
    student.lastName = 'Doodle'
    student.age = 29
    console.log(student.getFullName())

    let dept = new Department('asa','sas');
    dept.firstName = 'axa'
    dept.lastName = 'csc'
    console.log(dept)

    console.log(student.add(3))

    let m = new Map()
})()

// var fname = ""

// var t1 = document.getElementById('t1')
// var t2 = document.getElementById('t2')
// t1.addEventListener('keydown',function(e){
//     t2.value += e.key
//     e.preventDefault()
// })
// t2.addEventListener('keydown',function(e){
//     t1.value += e.key
//     e.preventDefault()
// })