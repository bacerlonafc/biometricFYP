function firstStep(){
document.getElementById('file').addEventListener('change', function() {
var fr=new FileReader();
fr.onload=function(){document.getElementById('fileContent').textContent=fr.result;}
fr.readAsBinaryString(this.files[0]);
document.getElementById('secondStep').style.visibility = "visible";
document.getElementById('upload').style.background = 'brown';
})
}



function randomNumber(random){
var number = (1+parseInt((Math.random()*parseInt(random))))%2;
return number;
}



function bin(){
var binMethod = confirm("BIN COMBO performs XOR operation between the original code and a random code to generate a new code");

if(binMethod == true){
var random = prompt("Please enter a random number to generate the random code");
if(Number.isInteger(parseInt(random)) == false){
alert("Accept integer only, not included decimal number, symbol and alphabet");
}

var originalFile = document.getElementById('fileContent').textContent;
var length = originalFile.length;
const codes = [];
for(var i=0; i<length; i+=2){
codes.push(originalFile[i]);
}

const randCode = [];
var strings = "";
for(var i=0;i<codes.length;i++){
var x = randomNumber(random);
strings+=(x).toString();
randCode.push(strings[i]);
}

document.getElementById('randomCodes').style.visibility = "visible";
document.getElementById('randomCode').innerHTML = randCode;

const newCode = [];
for(var i=0; i<codes.length; i++){
newCode.push(((parseInt(codes[i])+parseInt(randCode[i]))%2).toString());
}
document.getElementById('newContent').innerHTML = newCode;
document.getElementById('thirdStep').style.visibility = "visible";
document.getElementById('transform').style.background = 'brown';
document.getElementById('codeLength').innerHTML = codes.length;
}
}



function hash(){
var useHashMethod = confirm("Bio-hashing blends the original code with a random number to distort the code and generate a different code")
}



function hammingDistance(){
var originalCode = document.getElementById('fileContent').textContent;
var length = originalCode.length;
const originalCodes = [];
for(var i=0; i<length; i+=2){
originalCodes.push(originalCode[i]);
}
var newGenerated = document.getElementById('newContent').textContent;
const newCodes = [];
for(var i=0;i<newGenerated.length;i+=2){
newCodes.push(newGenerated[i]);
}
var threshold = document.getElementById('threshold').value;
if(parseInt(threshold)<0 || parseInt(threshold)>originalCodes.length){
alert('Invalid theshold value');
}
else{
var difference=0;
for(var i=0; i<originalCodes.length; i++){
if(originalCodes[i]!=newCodes[i]){
difference+=1;
}
}
}
alert('The Hamming distance is '+difference);
}



window.onscroll = function() {fixMenu()};
var header = document.getElementById("header");
var sticky = header.offsetTop;
function fixMenu() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}