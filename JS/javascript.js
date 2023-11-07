// document.getElementsByTagName("h2")[0].style.color = "green";
// document.querySelector("h2").innerHTML = "Yasin Arafat Shakil";
// console.log("Hello world");


// document.write(9/5-4**3+20/20+100*5-50 + '<br>');
// document.write(",,,,,,,,,,,,")

// let num = 1;
// document.write(num++)
// document.write(num++)
// document.write(num++)
// document.write(num++)
// document.write(num++)
// document.write(num++)
// document.write(num++)
// document.write(num++)
// document.write(num++)
// document.write(num++)
// document.write(num++)
// document.write(num++)
// document.write(num++)
// document.write(num++)
// document.write(num++)

// document.write("<br> <br>,,,,,,,,,,,,")

// num += 14;
// document.write(nom--)
// document.write(nom--)
// document.write(nom--)
// document.write(nom--)
// document.write(nom--)
// document.write(nom--)
// document.write(nom--)
// document.write(nom--)
// document.write(nom--)
// document.write(nom--)
// document.write(nom--)
// document.write(nom--)
// document.write(nom--)
// document.write(nom--)
// document.write(nom--)
// document.write(nom--)
// document.write(nom--)
// document.write(nom--)
// document.write(nom--)
// document.write(nom--)
// document.write(nom--)
// document.write(nom--)
// document.write(nom--)

// let num = 200;

// num %= 2;


// document.querySelector('h2').innerText = num;

// let num1 = '5';
// let num2 = 4;

// document.write(num1 <= num2)


function submit(){

let num3 = document. querySelector('#Gr').value;


if(num3 >= 80 && num3 <= 100){
    document.querySelector('h1').innerHTML ='A+';
}else if(num3 >= 70 && num3 <= 100){
    document.querySelector('h1').innerHTML ='A';
}else if(num3 >= 60 && num3 <= 100){
    document.querySelector('h1').innerHTML ='A-';
}else if(num3 >= 50 && num3 <= 100){
    document.querySelector('h1').innerHTML ='B';
}else if(num3 >= 40 && num3 <= 100){
    document.querySelector('h1').innerHTML ='C';
}else if(num3 >= 33 && num3 <= 100){
    document.querySelector('h1').innerHTML ='D';
}else if(num3 >= 0 && num3 <= 100){
    document.querySelector('h1').innerHTML ='F';
}else{
    document.querySelector('h1').innerHTML ='Invalid Number';
}
}