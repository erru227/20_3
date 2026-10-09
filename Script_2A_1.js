//Collecting elements for easier reading later
//DO NOT FORGET TO SHOW OFF THE CHANGE TO CALL IN HTML FILE!
let output = document.getElementById("content");

import { print_text, print_large } from "./Script_2B_1.js";

function print_r(){
    print_text();
}

function print_l(){
    print_large();
}

window.print_r = print_r;
window.print_l = print_l;