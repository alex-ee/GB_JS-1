"use strict";

dz2_2();
dz2_3();

function dz1() {
    var admin, name = "Василий";
    admin = name;

    alert("«Привет, Javascript»");

    alert(admin);
}

function dz2_1() {
    var a = 1, b = 1, c, d;

    c = ++a; alert(c); // 2
    // к 'a' сначала добавляется 1 и только потом значение присваивается 'c'

    d = b++; alert(d); // 1
    // сначала значение 'b' присваивается 'd' и только потом к 'b' добавляется 1

    c = (2+ ++a); alert(c); // 5
    // 2+ (1+a) = 2 + 3 = 5 ('a' стало = 2 при 'c = ++a;')

    d = (2+ b++); alert(d); // 4
    // 2+ (b) = 2 + 2 = 4; b=b+1  ('b' стало = 2 при 'd = b++;') 

    alert(a); // 3
    // 'a' стало = 3 при 'c = (2+ ++a);'

    alert(b); // 3
    // 'b' стало = 3 при 'd = (2+ b++);'
}

function dz2_2() {
    var a = 2;
    var x = 1 + (a *= 2); // = 1 + ('a' * 2) = 5

    alert('"х" равен "' + x + '"');
}

function dz2_3() {
    for (var i = 1; i <= 100; i++) {
        // Fizz | Buzz
/*
        if (i % 3 == 0) {
            console.log ("" + i + "   Fizz");
        } else if (i % 5 == 0) {
            console.log ("" + i + "   Buzz");
        } else {
            console.log (i);
        }
*/
        //Fizz & Buzz
        if ((i % 3 == 0) || (i % 5 == 0)) {
            console.log ("" + i + "   FizzBuzz");
        } else {
            console.log (i);
        }
    }
}