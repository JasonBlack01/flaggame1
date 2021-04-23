// make a function that says if button with id is clicked, then subtract from the loop
// Your function won't run if you don't close the bars for another function, 
// if your code isn't running for a function, check if the other funcitons are closed


console.log("hi");

var PartX
var PartY
var PartZ
var info
var this_numb= 0

function Back(){
 
    this_numb-= 1;
    console.log(this_numb);
    Start_This();
    }

function Play_Next(){

var i = 1
//for (i = 0; i <2; i++) {
this_numb += i;

//}

console.log(this_numb);

var showText = document.getElementsByClassName('hide');

for (var i = 0; i<showText.length; i++){
    showText[i].style.visibility = "visible";
    }

var info = document.getElementById('info').innerHTML


Start_This();
}

function Start_This(){

switch (this_numb) {
case 1:


// change the button to say next

document.getElementById('next').innerHTML = "Next"
document.getElementById('QNumber').innerHTML = "Country 1: Ghana"
PartX = document.getElementById('red1').src;
PartY = document.getElementById('GHmid').src;
PartZ = document.getElementById('Green1').src;
info = document.getElementById('GhanaInfo').innerHTML

break;
case 2:
    document.getElementById('Answer').innerHTML = "";

document.getElementById("_top").src = document.getElementById("orgTop").src;
document.getElementById("_middle").src = document.getElementById("orgMid").src;
document.getElementById("_bottom").src = document.getElementById("orgBott").src;

document.getElementById('QNumber').innerHTML = "Country 2: Israel"

PartX = document.getElementById('IsraelTop').src;
PartY = document.getElementById('IsraelMid').src;
PartZ = document.getElementById('IsraelBottom').src;
info = document.getElementById('IsraelInfo').innerHTML


break;
case 3:
    document.getElementById('Answer').innerHTML = "";

document.getElementById("_top").src = document.getElementById("orgTop").src;
document.getElementById("_middle").src = document.getElementById("orgMid").src;
document.getElementById("_bottom").src = document.getElementById("orgBott").src;

document.getElementById('QNumber').innerHTML = "Country 3: United States of America"

PartX = document.getElementById('USATop').src;
PartY = document.getElementById('USAMid').src;
PartZ = document.getElementById('USABottom').src;
info = document.getElementById('USAInfo').innerHTML

break;

case 4:
    document.getElementById('Answer').innerHTML = "";

document.getElementById("_top").src = document.getElementById("orgTop").src;
document.getElementById("_middle").src = document.getElementById("orgMid").src;
document.getElementById("_bottom").src = document.getElementById("orgBott").src;

document.getElementById('QNumber').innerHTML = "Country 4: Spain"

PartX = document.getElementById('SpainTop').src;
PartY = document.getElementById('SpainMid').src;
PartZ = document.getElementById('SpainBottom').src;
info = document.getElementById('SpainInfo').innerHTML

break;
//forgot the break that's why Spain wasn't showing up
case 5:

    document.getElementById('Answer').innerHTML = "";

document.getElementById("_top").src = document.getElementById("orgTop").src;
document.getElementById("_middle").src = document.getElementById("orgMid").src;
document.getElementById("_bottom").src = document.getElementById("orgBott").src;

document.getElementById('QNumber').innerHTML = "Country 5: Kenya"

PartX = document.getElementById('KenyaTop').src;
PartY = document.getElementById('KenyaMid').src;
PartZ = document.getElementById('KenyaBottom').src;
info = document.getElementById('KenyaInfo').innerHTML

break;

case 6:
document.getElementById('QNumber').innerHTML= "Country 6: India"
document.getElementById('Answer').innerHTML = "";


document.getElementById("_top").src = document.getElementById("orgTop").src;
document.getElementById("_middle").src = document.getElementById("orgMid").src;
document.getElementById("_bottom").src = document.getElementById("orgBott").src;

PartX = document.getElementById('IndiaTop').src;
PartY = document.getElementById('IndiaMid').src;
PartZ = document.getElementById('IndiaBottom').src;
info = document.getElementById('IndiaInfo').innerHTML

break;
case 7:

document.getElementById('next').innerHTML = "End" 
//I have to move this "End" code to the last one

document.getElementById('Answer').innerHTML = "";

document.getElementById('QNumber').innerHTML= "Country 7: Venezuela"

document.getElementById("_top").src = document.getElementById("orgTop").src;
document.getElementById("_middle").src = document.getElementById("orgMid").src;
document.getElementById("_bottom").src = document.getElementById("orgBott").src;

PartX = document.getElementById('VenezTop').src;
PartY = document.getElementById('VenezMid').src;
PartZ = document.getElementById('red1').src;
info = document.getElementById('VenezInfo').innerHTML

break;
case 8:

    document.getElementById('Answer').innerHTML = "";

 document.getElementById('QNumber').innerHTML= "Country 8: Ecuador"
 document.getElementById("_top").src = document.getElementById("orgTop").src;
 document.getElementById("_middle").src = document.getElementById("orgMid").src;
 document.getElementById("_bottom").src = document.getElementById("orgBott").src;
PartX = document.getElementById('EcuadorTop').src;
PartY = document.getElementById('EcuadorMid').src;
PartZ = document.getElementById('EcuadorBott').src;
info = document.getElementById('EcudadorInfo').innerHTML
    
break;
case 9:

    document.getElementById('Answer').innerHTML = "";

document.getElementById('QNumber').innerHTML= "Country 9: China"
document.getElementById("_top").src = document.getElementById("orgTop").src;
document.getElementById("_middle").src = document.getElementById("orgMid").src;
document.getElementById("_bottom").src = document.getElementById("orgBott").src;

PartX = document.getElementById('ChinaTop').src;
PartY = document.getElementById('ChinaMid').src;
PartZ = document.getElementById('ChinaBott').src;
info = document.getElementById('ChinaInfo').innerHTML

break;
case 10:

    document.getElementById('Answer').innerHTML = "";

document.getElementById('QNumber').innerHTML= "Country 10: Antigua and Barbuda"
document.getElementById("_top").src = document.getElementById("orgTop").src;
document.getElementById("_middle").src = document.getElementById("orgMid").src;
document.getElementById("_bottom").src = document.getElementById("orgBott").src;

PartX = document.getElementById('AntBarbTop').src;
PartY = document.getElementById('AntBarbMid').src;
PartZ = document.getElementById('AntBarbBott').src;
info = document.getElementById('AntBarbInfo').innerHTML


break;
case 11:
    document.getElementById('Answer').innerHTML = "";

document.getElementById('QNumber').innerHTML= "Country 11: Uganda"

document.getElementById("_top").src = document.getElementById("orgTop").src;
document.getElementById("_middle").src = document.getElementById("orgMid").src;
document.getElementById("_bottom").src = document.getElementById("orgBott").src;

PartX = document.getElementById('UgandaTop').src;
PartY = document.getElementById('UgandaMid').src;
PartZ = document.getElementById('UgandaBott').src;
info = document.getElementById('UgandaInfo').innerHTML
break;
case 12:
    
    document.getElementById('Answer').innerHTML = "";

document.getElementById('QNumber').innerHTML= "Country 12: South Africa"

document.getElementById("_top").src = document.getElementById("orgTop").src;
document.getElementById("_middle").src = document.getElementById("orgMid").src;
document.getElementById("_bottom").src = document.getElementById("orgBott").src;

PartX = document.getElementById('SouthAfrTop').src;
PartY = document.getElementById('SouthAFrMid').src;
PartZ = document.getElementById('SouthAfrBott').src;
info = document.getElementById('SouthAfrInfo').innerHTML
break;
                
    
default:

var reVeal = document.getElementsByClassName('hide');

for (var i = 0; i< reVeal.length; i++){
reVeal[i].style.visibility = "visible";
}

}

}




function show(){
document.getElementById('pHide').style.visibility = "visible"
}

function hide(){
document.getElementById('pHide').style.visibility = "hidden"
}
var Is_Top_True
var Is_Mid_True
var Is_Bottom_True

var extraTops 
var extraMids
var extraBotts


function extraRandoms(){
   // for somereason, the global variable extraRandom is not working or I didnt' define it well: FIX THIS
   // Finally Worked, now I have more variety in random pieces and less frustration because it only 
   //generates numbers form 1 to 5 and 1-3 are real while 4,5 are random
   //I learned that I was trying to create 1 function in each of the button funcitons when all I needed to do 
   //was make the function 1 and call it in the button funcitons 
   //I also learned that when doing random generators the first number you type would be the total you want , then )+ 1 
   
    var extraRandom = Math.floor(Math.random()* 12) +1;
    console.log(extraRandom)
   
    switch (extraRandom){
        // rmemeber it's case 1: not case: 1
        case 1: 
        // Ghana pieces
        
        extraTops = document.getElementById('red1').src;
        extraMids = document.getElementById('GHmid').src;
        extraBotts = document.getElementById('Green1').src;
        break;
        case 2: 
        // Israel  pieces
        
        extraTops = document.getElementById('IsraelTop').src;
        extraMids = document.getElementById('IsraelMid').src;
        extraBotts = document.getElementById('IsraelBottom').src;
        break;
        case 3: 
        // US  pieces
        
        extraTops = document.getElementById('USATop').src;
        extraMids = document.getElementById('USAMid').src;
        extraBotts = document.getElementById('USABottom').src;
        break;
        case 4: 
        // Spain pieces
        
        extraTops = document.getElementById('SpainTop').src;
        extraMids = document.getElementById('SpainMid').src;
        extraBotts = document.getElementById('SpainBottom').src;
        break;
        case 5: 
        // Kenya pieces
        
        extraTops = document.getElementById('KenyaTop').src;
        extraMids = document.getElementById('KenyaMid').src;
        extraBotts = document.getElementById('KenyaBottom').src;
        break;
        case 6:
        // India pieces
        
        extraTops = document.getElementById('IndiaTop').src;
        extraMids = document.getElementById('IndiaMid').src;
        extraBotts = document.getElementById('IndiaBottom').src;
        break;
        case 7:
        // Venezuela pieces
        extraTops = document.getElementById('VenezTop').src;
        extraMids = document.getElementById('VenezMid').src;
        extraBotts = document.getElementById('red1').src;
        break;
        case 8:
        // Ecuador pieces
       
        extraTops = document.getElementById('EcuadorTop').src;
        extraMids = document.getElementById('EcuadorMid').src;
        extraBotts = document.getElementById('EcuadorBott').src;
        break;
        case 9: 
        // China pieces
        extraTops = document.getElementById('ChinaTop').src;
        extraMids = document.getElementById('ChinaMid').src;
        extraBotts = document.getElementById('ChinaBott').src;
        break;
        case 10: 
        // AntBArb pieces
        extraTops = document.getElementById('AntBarbTop').src;
        extraMids = document.getElementById('AntBarbMid').src;
        extraBotts = document.getElementById('AntBarbBott').src;
        break;
        case 11: 
        // Uganda pieces
        extraTops = document.getElementById('UgandaTop').src;
        extraMids = document.getElementById('UgandaMid').src;
        extraBotts = document.getElementById('UgandaBott').src;
        
        break;
        case 12:
        // South Africa pieces
        
        extraTops = document.getElementById('SouthAfrTop').src;
        extraMids = document.getElementById('SouthAFrMid').src;
        extraBotts = document.getElementById('SouthAfrBott').src;
        break;
        
    }
   }
   
function randomerTop(){
// this is for all the 5 pieces tat will generate
var randomgen = Math.floor(Math.random() * 5) + 1;
console.log(randomgen);
// deleting the random generator for the extra pieces 
//and running the funciton inside each of the button funcitons


//this is for the extras
 
switch (randomgen)
{
case 1:
document.getElementById('_top').src = PartX;
// document.getElementById('red1').src
Is_Top_True = true;
break;
case 2:
document.getElementById('_top').src = PartY;
// document.getElementById('GHmid').src
Is_Top_True = false;


break;
case 3:
document.getElementById('_top').src = PartZ;
//document.getElementById('Green1').src
Is_Top_True = false;
break;
case 4:
extraRandoms();

document.getElementById('_top').src = extraMids;
Is_Top_True = false;


break;
case 5:
    
extraRandoms();

document.getElementById('_top').src = extraBotts;
Is_Top_True = false;


break;

}
}



document.onkeyup=function(e){
var e = e || window.event; // for IE to cover IEs window event-object
if(e.which == 65) {
randomerTop();
return false;
}
else if (e.which == 83) {
randomerMid();
return false;

}
else if (e.which == 68){
randomerBottom();
return false;
}
else if (e.which == 67){
check();
return false;
}



}

//_middle

function randomerMid(){

var randomgen = Math.floor(Math.random() * 5) + 1;
console.log(randomgen);


switch (randomgen)
{
case 1:
document.getElementById('_middle').src = PartX;
// document.getElementById('red1').src
Is_Mid_True = false;

break;
case 2:
document.getElementById('_middle').src = PartY;
// document.getElementById('GHmid').src
Is_Mid_True = true;
break;
case 3:
document.getElementById('_middle').src = PartZ;
// document.getElementById('Green1').src
Is_Mid_True = false;
break;
case 4:
    
extraRandoms();

document.getElementById('_middle').src = extraTops;
Is_Mid_True = false;

break;
case 5:
extraRandoms();

document.getElementById('_middle').src = extraBotts;
Is_Mid_True = false;

break;

}
}

//bottoms


function randomerBottom(){


    
var randomgen = Math.floor(Math.random() * 5) + 1;
console.log(randomgen);

switch (randomgen)
{
case 1:
document.getElementById('_bottom').src = PartX;
//document.getElementById('red1').src
Is_Bottom_True = false;

break;
case 2:
document.getElementById('_bottom').src = PartY;
// document.getElementById('GHmid').src;
Is_Bottom_True = false;

break;
case 3:
document.getElementById('_bottom').src = PartZ;
// document.getElementById('Green1').src;
Is_Bottom_True = true;
break;
case 4:
    
extraRandoms();

document.getElementById('_bottom').src = extraTops;
Is_Bottom_True = false;

break;
case 5:
extraRandoms();

document.getElementById('_bottom').src = extraMids;
Is_Bottom_True = false;

break;

}


}


// Since the randomizer can be tedious, I'm keeping the amount to 5
// The first 3 in the case are going to be the actual pieces , the next 2 are
// going to be random variables themselves
// so I have to make another generator that has a greater range of numbers () and can assign more pieces
//assigns each new piece to a case number 
// 2 random variables, one all the top, middle or bottom, for whatever is not the current fucntion(TOP, middle or bottom)
//doing this to have more diversity while keeping it simple 
//don't need to make a function for this, I just need the case structure and I can put the generator in all the button functions        

  
function check() {

if (Is_Top_True  && Is_Bottom_True && Is_Mid_True)
{
document.getElementById('Answer').style.visibility = "visible"
document.getElementById('Answer').innerHTML = " Correct"
}

else {

document.getElementById('Answer').style.visibility = "visible"
document.getElementById('Answer').innerHTML = " INCORRECT"
}

}
