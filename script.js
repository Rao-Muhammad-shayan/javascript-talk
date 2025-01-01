
// function myNewDate() {
//     let d = new Date();
//     let targetDate = new Date("feb 28, 2025 10:00:00");
//     let diff = Math.abs(d.getTime() - targetDate.getTime());
//     let months = (targetDate.getFullYear() - d.getFullYear()) * 12 + (targetDate.getMonth() - d.getMonth());
//     let days = Math.ceil(diff / (1000 * 60 * 60 * 24));
//     let hours = Math.floor((diff / (1000 * 60 * 60)));
//     let minutes = Math.floor((diff / (1000 * 60)));
//     let seconds = Math.ceil((diff / 1000));
//     let week = Math.ceil(diff / (1000 * 60 * 60 * 24 * 7));
    
//     document.getElementById("months").innerText = months;
//     document.getElementById("weeks").innerHTML = week;
//     document.getElementById("days").innerHTML = days;
//     document.getElementById("hours").innerHTML = hours;
//     document.getElementById("minutes").innerHTML = minutes;
//     document.getElementById("seconds").innerHTML = seconds;
// }

// // Call the function after the DOM is loaded
// document.addEventListener("DOMContentLoaded", function() {
//     myNewDate();
// });
// let word=prompt("Enter the value");
// word=word.toLowerCase();
// let palindrome="";
// for(let i=word.length-1;i>=0;i--){
 
//   palindrome+=word[i]
  
// }if(palindrome==word){
//     console.log(`palindrome word`)
//   }else{
//     console.log(`not palindrome word`)
//   }

// let p="NaN";
// for(i=p.length-1;i>=0-1;i++){
// if(p[i]==p[(p.length-1)-i]){
//  document.write(`clear`)
// }
// }

// Badshah ka wazeer kon chor sipahi ka pta lgao
let arr=["badshah","wazeer","chor","sipahi"];

let a=+prompt("Enter the 1st Number between 0 -4   For Badsha ka wazeer");
let  b=+prompt("Enter the 2nd Number between 0 -4 For Badsha ka wazeer");
let c=+prompt("Enter  3rd the Number between 0 -4 For Badsha ka wazeer");
let d=+prompt("Enter 4rth the Number between 0 -4 For Badsha ka wazeer");
let arrLength=arr.length;
let word=prompt("Badshah ka wazeer kon");

if(word=="ji hazoor ji hazoor"){
    alert(`chor sipahi ka pta lgao`)
    if(!isNaN(a&b&c&d) &(a<=4 )&(b<=4)&(c<=4)&(d<=4)){
        let resultA="";
        let resultB="";
        let resultC="";
        let resultD="";
        let arr2=[];
        for(let i=arr.length-1;i>=0;i--){
    let randomNumber=Math.floor(Math.random()*arrLength)

    arr2.push(randomNumber);
    
    }
    resultA=arr[arr2[0]];
    resultB=arr[arr2[1]];
    resultC=arr[arr2[2]];
    resultD=arr[arr2[3]];
    console.log(`1st is  ${resultA}`);
    console.log(` 2nd is ${resultB}`);
    console.log(` 3rd is ${resultC}`);
    console.log(` 4rth is ${resultD}`);
    
    if(resultA=="Badshah"){
        console.log(`1000 points of ${resultA}`)
    }else if(resultA=="wazeer"){
        console.log(`500 points of ${resultA}`)
    }else if(resultA=="sipahi"){
        console.log(`200 points of ${resultA}`)
    }else{
        console.log(`0 points of ${resultA}`)
    }
    if(resultB=="Badshah"){
        console.log(`1000 points of ${resultB}`)
    }else if(resultB=="wazeer"){
        console.log(`500 points of ${resultB}`)
    }else if(resultB=="sipahi"){
        console.log(`200 points of ${resultB}`)
    }else{
        console.log(`0 points of ${resultB}`)
    }
    if(resultC=="Badshah"){
        console.log(`1000 points of ${resultC}`)
    }else if(resultC=="wazeer"){
        console.log(`500 points of ${resultC}`)
    }else if(resultC=="sipahi"){
        console.log(`200 points of ${resultC}`)
    }else{
        console.log(`0 points of ${resultC}`)
    }
    if(resultD=="Badshah"){
        console.log(`1000 points of ${resultD}`)
    }else if(resultD=="wazeer"){
        console.log(`500 points of ${resultD}`)
    }else if(resultD=="sipahi"){
        console.log(`200 points of ${resultD}`)
    }else{
        console.log(`0 points of ${resultD}`)
    }
    
    
    }else{
        console.log("Invalid input")
    }
}else{
    console.log(` please Enter the valid input`)
    
}