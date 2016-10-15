"use strict";
var selected = {
    cell: '',
    bgColor: ''
}

alert ('реализовано только движение фигур по доске\n(без проверки по правилам шахмат)');

init();

// реализовано только движение фигур по доске (без проверки по правилам шахмат)
function eventClick(cell) {
    var curr = document.getElementById(cell);

    if (selected.cell != '') {
        if (selected.cell.id != cell && curr.innerText.length == 0) {
            curr.innerText = selected.cell.innerText;
            selected.cell.innerText = '';
        } 
            selected.cell.style.backgroundColor = selected.bgColor;
            selected.cell = '';

    } else {
        selected.cell = curr;
        selected.bgColor = curr.style.backgroundColor;
        curr.style.backgroundColor = 'red';
    }
}


function init() {
    document.body.innerHTML += '<div class="main" id="main"></div>';
    var main = document.getElementById('main');

    main.innerHTML += '<div class="hLegend" id="hLegend1"></div>';
    main.innerHTML += '<div class="vLegend" id="vLegend1"></div>';
    main.innerHTML += '<div class="board" id="board"></div>';
    main.innerHTML += '<div class="vLegend" id="vLegend2"></div>';
    main.innerHTML += '<div class="hLegend" id="hLegend2"></div>';

    var hLegend = document.getElementsByClassName('hLegend');
    for (var i = 0; i < 2; i++) {
        hLegend[i].innerHTML = '<div class="sq"></div>';
        for (var j = 1; j < 9; j++) {
            hLegend[i].innerHTML += '<div class="hlCell">' + String.fromCharCode(64 + j) + '</div>';
        }
    }

    var hLegend = document.getElementsByClassName('vLegend');
    for (var i = 0; i < 2; i++) {
        hLegend[i].innerHTML = '<div class="sq"></div>';
        for (var j = 8; j > 0; j--) {
            hLegend[i].innerHTML += '<div class="vlCell">' + j + '</div>';
        }
    }

    var board = document.getElementById('board');
    var light = '<div class="light" id="_TMP_" onClick="eventClick(\'_TMP_\')"></div>';
    var dark = '<div class="dark" id="_TMP_" onClick="eventClick(\'_TMP_\')"></div>';

    var cell = {
        val: dark,
        row: 8,
        col: 1,
        toString: function() {
            var tmp = '';
            tmp = this.val = this.val == light ? dark : light;

            switch (this.row) {
                case 8:
                    switch (this.col) {
                        case 1:
                        case 8:
                            tmp = tmp.replace(/></g, '>&#9820;<');
                            break;

                        case 2:
                        case 7:
                            tmp = tmp.replace(/></g, '>&#9822;<');
                            break;

                        case 3:
                        case 6:
                            tmp = tmp.replace(/></g, '>&#9821;<');
                            break;

                        case 4:
                        case 5:
                            tmp = this.val == light ? tmp.replace(/></g, '>&#9818;<') : tmp.replace(/></g, '>&#9819;<');
                            break;
                    }
                    break;

                case 7:
                    tmp = tmp.replace(/></g, '>&#9823;<');
                    break;

                case 2:
                    tmp = tmp.replace(/></g, '>&#9817;<');
                    break;

                case 1:
                    switch (this.col) {
                        case 1:
                        case 8:
                            tmp = tmp.replace(/></g, '>&#9814;<');
                            break;

                        case 2:
                        case 7:
                            tmp = tmp.replace(/></g, '>&#9816;<');
                            break;

                        case 3:
                        case 6:
                            tmp = tmp.replace(/></g, '>&#9815;<');
                            break;

                        case 4:
                        case 5:
                            tmp = this.val == light ? tmp.replace(/></g, '>&#9813;<') : tmp.replace(/></g, '>&#9812;<');
                            break;
                    }
                    break;
                
                default:
                    break;                
            }

            if (++this.col == 9) {
                this.row--;
                this.col = 1;
                this.val = this.val == light ? dark : light;
                tmp = tmp.replace(/_TMP_/g, String.fromCharCode(64 + this.col + 7) + (this.row + 1));

            } else {
                tmp = tmp.replace(/_TMP_/g, String.fromCharCode(64 + this.col - 1) + this.row);

            }

            return tmp;
        }
    }

    var j = 0;
    while (j++ < 64) {        
        board.innerHTML += cell;
    }
}