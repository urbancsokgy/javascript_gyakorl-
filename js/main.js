
// Legkisebb elem
'use strick'
//Random függvény
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}
//Saját tömb feltöltés
let myIntArray = [];
let pContent = ""
let para = document.createElement('p');
para.id = "para1";
function myPushArray(myIntArray) {
    for (let index = 0; index < 10; index++) {
        myIntArray[index] = (getRandomInt(10, 20));
        pContent +=" " + myIntArray[index] + " | ";
    }
}
myPushArray(myIntArray);
para.innerHTML="A tömb elemei: " +pContent;
document.body.appendChild(para);
// Feltöltés vége

// MAximum kiválasztás
let  maxContent = 0;
for( let i = 1; i < myIntArray.length; i++ )
{
    if( myIntArray[i] > maxContent){ 
        maxContent=myIntArray[i]
    }
}
let para2=document.createElement('p');
para2.innerHTML="A legnagyobb szám:"+ maxContent;
para2.id="para2";
document.body.appendChild(para2);

// Átlag
let mySum=0;
myIntArray.forEach(element =>{mySum+=element;})
let myAverage=(mySum/myIntArray.length);
let para3=document.createElement('p');
para3.innerHTML="Az átlag:"+ myAverage;
para3.id="para3";
document.body.appendChild(para3);

// Összeg
let para4=document.createElement('p');
para4.innerHTML="Az összeg:"+ mySum;
para4.id="para4";
document.body.appendChild(para4);

// Páros elemek
let myEvenNumberCount=0;
myIntArray.forEach(element =>{
   if(element%2 ===0){myEvenNumberCount+=1;}
})

let para5=document.createElement('p');
para5.innerHTML="A páros számok száma:"+ myEvenNumberCount;
para5.id="para5";
document.body.appendChild(para5);

// második legkisebb elem
let myIntArray1=[];
myIntArray.forEach(element =>{myIntArray1.push(element) }); //tömb klónozása
function bubbleSort(myIntArray){
let myTemp=0;
for (let i = 0; i < myIntArray.length; i++) {
    for (let j = myIntArray.length-1; j>=i ; j--) {
        if(myIntArray[j-1]>myIntArray[j]){
            myTemp=myIntArray[j-1];
            myIntArray[j-1]=myIntArray[j];
            myIntArray[j]=myTemp;
        }       
    }    
}
}
bubbleSort(myIntArray1);
let sortedNumbers="";
myIntArray1.forEach(element =>{ sortedNumbers+=" | "+element; });

// Eredeti számsor
let para6a=document.createElement('p');
para6a.innerHTML="A számok eredetileg:"+ pContent;
para6a.id="para6a";
document.body.appendChild(para6a);
// új tömb elemei
let para6=document.createElement('p');
para6.innerHTML="A számok sorban \"buborékos rendezéssel\":"+ sortedNumbers;
para6.id="para6";
document.body.appendChild(para6);

// A tömb második legkisebb eleme
let para7=document.createElement('p');
para7.innerHTML="A tömb második legkisebb eleme:"+ myIntArray1[1];
para7.id="para6";
document.body.appendChild(para7);

// harmadik legnagyobb elem
let para8=document.createElement('p');
para8.innerHTML="A harmadik legnagyobb elem:"+ myIntArray1[myIntArray1.length-3];
para8.id="para8";
document.body.appendChild(para8);

// Lineáris keresés
function linearSearch(item){
    let found=false;
    for (let i = 0; i < myIntArray1.length; i++) {
        if(myIntArray1[i]==item ){found=true; } 
    }
    return found; 
}
let foundOut=linearSearch(23);

let para9=document.createElement('p');
if(foundOut==true){
    para9.innerHTML="Van benne 23-as szám";
}else{
    para9.innerHTML="Nincs benne 23-as szám";    
}
para9.id="para9";
document.body.appendChild(para9);

// Logaritmikus keresés 23


function myLogarithmicSearch(sortedArray, item) {
    first = 0;
    last = sortedArray.length;
    middle = Math.floor((first + last) / 2);
    while (first <= last && sortedArray[middle] != item) {
        if (sortedArray[middle] < item) {
            first = middle + 1;
        }else{   last = middle - 1;}
        middle = Math.floor((first + last) / 2);
    }
    if(first<=last){
        console.log('hurrá');
        return middle;
    }else{console.log('A keresett elem '+item +' nem található');}
}
myLogarithmicSearch(myIntArray1, 14);


