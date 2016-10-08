"use strict";

dz5_1();
dz5_2();

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
        // Fizz  Buzz

        console.log (
            ((i % 3 == 0) && (i % 5 == 0)) ? "" + i + "   FizzBuzz" :
                (i % 3 == 0) ? "" + i + "   Fizz" :
                    (i % 5 == 0) ? "" + i + "   Buzz" :
                        i
        );
    }
}

function dz3_1() {
    var str = '';
    do {
        console.log (str += '#');

    } while (str.length <= 7);
}

function dz3_2() {
    var str = '', ret = '', i = 1, j = 1;
    while (j++ <= 8) {
        while (++i <= 8) {
            str += (i % 2 == 0) ? '#' : ' ';
        }
        ret += str + '\n';
        i = 1;
        str = (j % 2 == 0) ? ' ' : '';
    }
    
    console.log (ret);
}

function dz4_1() {
    function min() {
        return (arguments[0] <= arguments[1]) ? arguments[0] : arguments[1];
    }

    console.log (min(11, 11));
    console.log (min(0, 10));
    console.log (min(0, -10));
}

function dz4_2() {
    function countChr (str, chr) {
        var i = 0, str = '' + str;

        if (str.length > 1) {
            i = str.charAt (0) === chr ? 1 : 0;
            i += countChr (str.substring (1), chr);

        } else {
            i = str.charAt (0) === chr ? 1 : 0;

        }

        return  i;         
    }

    console.log (
        'буква "t" в строке "Test test test" встречается ' + countChr ('Test test test','t') + " раз(а)"
    );

    console.log (
        'буква "e" в строке "Test test test" встречается ' + countChr ('Test test test','e') + " раз(а)"
    );
}

function dz4_3() {
    function isEven (int) {
        var bool = false;

        int = Math.abs(int);

        if (int > 1) {
            bool = isEven (int - 2);

        } else {
            bool = (int === 1) ? false : true; 

        }

        return bool;
    }

    console.log (
        'чётность 50-и = ' + isEven (50)    
    );

    console.log (
        'чётность 75-и = ' + isEven (75)    
    );

    console.log (
        'чётность (-1) = ' + isEven (-1) + ' (фикс в том чтобы брать по модулю)'
    );
}

function dz5_1() {
    function decToHex() {
        return arguments[0].toString(16) + arguments[1].toString(16) + arguments[2].toString(16);
    }

    console.log (
        'decToHex(244,200,100) = ' + decToHex(244,200,100)
    );

    console.log (
        'decToHex(255,255,255) = ' + decToHex(255,255,255)
    );

    console.log (
        'decToHex(0,0,0) = ' + decToHex(0,0,0)
    );

    console.log ('==========================================');
}

function dz5_2() {
    function IntToObj(int) {
        var obj = {
            единицы: 0,
            десятки: 0,
            сотни: 0,
        }

        if (int <= 999) {
            int += '';
            switch (int.length) {
                case 2:
                    obj.десятки = int.charAt(0);
                    obj.единицы = int.charAt(1);
                    break;

                case 1:
                    obj.единицы = int.charAt(0);
                    break;

                default:
                    obj.сотни = int.charAt(0);
                    obj.десятки = int.charAt(1);
                    obj.единицы = int.charAt(2);
                    break;
            }

        } else {
            console.log ('число превышает 999');

        }
        
        return obj;
    }

    console.log ('IntToObj(1) = ');
    console.log (IntToObj(1));

    console.log ('IntToObj(21) = ');
    console.log (IntToObj(21));

    console.log ('IntToObj(321) = ');
    console.log (IntToObj(321));

    console.log ('IntToObj(1111) = ');
    console.log (IntToObj(1111));

    console.log ('==========================================');

    console.log ('objectToQueryString(321) = ');
    console.log (objectToQueryString(IntToObj(321)));

    function objectToQueryString(obj) {
        var str = '';
        for (var key in obj) {
            str += key + '=' + obj[key] + '&';
        }
        return str.substr (0, str.length - 1);
    }
}