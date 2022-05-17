
var input = document.getElementById("input")

var inputValue = input.value

var value= ""

function sum(num){

    input.value +=num 

}

function total(){

    input.value = eval(input.value)

}

function allClear(){

    input.value=""

}

function back(){

    value= input.value

    minus= value.slice(0 , -1)

    input.value= minus

    return input.value


}

