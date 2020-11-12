const buttons=document.getElementsByClassName('button');

/* const handleClick=()=>{
   const myButton= document.getElementsByClassName('button');
}; */
handleClick=()=>{
for (let i = 0; i < buttons.length; i++) 
{
    buttons[i].addEventListener("click", ()=> {console.log('siker'+i);});   
}}
handleClick();

/* 2. Feladat
Hozz létre két függvény kifejezést arrow functionnel! A függvények neve summation és subtraction. Mindegyik függvény két paramétert kap, ezek neve a és b. Amennyiben bármelyik paraméter hiányozna a függvény meghívásakor, úgy az alapértelemezett érték a 0 legyen.
A summation visszatér a két szám összegével, a subtraction visszatér a két szám különbségével. */
let summation=(a=0,b=0)=>(a+b) ;
const subtracticon=(a=0,b=0)=> {return a-b ;}

/* 3. Feladat
Hozz létre egy függvény kifejezést arrow functionnel! A függvény neve personDataLog legyen. A függvény paraméterként egy objektumot vár, ami egy firstname, lastname, és age tulajdonságokkal rendelkezik. Amennyiben bármelyik tulajdonság hiányozna úgy rendre a következő alapértelemezett értékeket vegyék fel: - firstname: John - lastname: Doe - age: 33 */

/* const personDataLog= ({firstname= John, lastname= Doe,  age= 33} ={})=> {console.log(firstname)};
personDataLog({firstname:pali});
 */
const human={firstname:'Pali', lastname: 'Gerde', age:18 };


const personDataLog =({firstname= 'John', lastname= 'Doe',  age= 33} ={})=>{ return console.log('My name is: ' +firstname+ ' '+lastname +  '   Im '+age +' years old.')};
personDataLog(human);