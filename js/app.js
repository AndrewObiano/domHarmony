/*Hey Prepsters! Let's help Ronald McDonald find true love by revising his online dating profile!*/

//1. In the nav element, target the span element with the id of 'matCount' and change the number from 0 to 11.

var spanBox = document.getElementById('matCount');
spanBox.innerHTML = 11;

//2. In the nav element, target the span element with the id of 'msgCount' and change the number from 0 to 23.

msgCount.innerHTML = 23; // shortcut only works with ids

//3. In the div id data section, target the div element with the id of 'fullname' and change Full Name to Ronald McDonald.

fullname.innerHTML = 'Ronald McDonald';

//4. In the div id data section, target the div element with the id of 'age' and change Age to 63 Years Old.

document.getElementById('age').innerHTML = 63; // also another way to write it out

//5. In the div id data section, create a div with an id of job and give it the following information: Clown and Restauranteur.

var divElem = document.createElement('div');
divElem.id = 'job';
divElem.innerHTML = 'Clown and Restauranteur';
data.appendChild(divElem); // location id, append (what)

//6. In the div id data section, create a div with an id of hobbies and give it the following information: Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.

var divHobby = document.createElement('div');
divHobby.id = 'hobbies';
divHobby.innerHTML = 'Long romantic walks on the beach, candle light Big Mac dinners and tormenting the  King.';
data.appendChild(divHobby);

//7. In the div id data section, create a div with an id of location and give it the following information: Honolulu, HI.

var divLocation = document.createElement('div');
divLocation.id = 'location';
divLocation.innerHTML = 'Honolulu, HI';
data.appendChild(divLocation);

//8. In the div id data section, create a div with an id of wants and give it the following information: Looking for a Mrs. McDonald.

var wantsElem = document.createElement('div');
wantsElem.id = 'Wants';
wantsElem.innerHTML = 'Looking for a Mrs. McDonald';
data.appendChild(wantsElem);

//9. In the div id profile section, create a paragraph element with an id of pro2 and create a your own profile for Ronald (at least 2 sentences).

var newPro = document.createElement('p');
newPro.id = 'pro2';
newPro.innerHTML = 'Im a very sad Ronald right now.';
profile.appendChild(newPro);

//10. In the div id matches section, target the first div element with the class name of firstName and change Name to Wendy.

var nameElem = document.getElementsByClassName('firstName');
nameElem[0].innerHTML = 'Wendy';

//11. In the div id matches section, target the first div element with the class name of otherAge and change Age to 48.

var ageElem = document.getElementsByClassName('otherAge');
ageElem[0].innerHTML = '48';

//12. In the div id matches section, target the first div element with the class name of status and change Status to Single Mother.

var statusElem = document.getElementsByClassName('status');
statusElem[0].innerHTML = 'Single Mother';

//13. In the div id matches section, target the second div element with the class name of firstName and change Name to Peko Chan.

var nameElem2 = document.getElementsByClassName('firstName');
nameElem2[1].innerHTML = 'Peko Chan';

//14. In the div id matches section, target the second div element with the class name of otherAge and change Age to 68.

var ageElem2 = document.getElementsByClassName('otherAge');
ageElem2[1].innerHTML = '68';

 //Final Boss Create your own profile into the page:
 //change image to match your profile
 //div with class name of firstName
 //div with class name of otherAge
 //div with class name of status
 //div with class anem of Motto

document.getElementsByClassName('other')[2].src = 'https://cdn.vox-cdn.com/thumbor/eReqmSD1nz4TXHXzbPslJgRcKRQ=/0x0:3840x2400/1200x800/filters:focal(1613x893:2227x1507)/cdn.vox-cdn.com/uploads/chorus_image/image/62630829/The_Walking_Dead_TV_502082_3840x2400.0.jpg';

var nameElem3 = document.getElementsByClassName('firstName');
nameElem3[2].innerHTML = 'Andrew Obiano';

var ageElem3 = document.getElementsByClassName('otherAge');
ageElem3[2].innerHTML = '25';

var statusElem3 = document.getElementsByClassName('status');
statusElem3[2].innerHTML = 'Fly';

var motto3 = document.getElementsByClassName('motto');
motto3[2].innerHTML = 'If can, can.';