//console.dir(document);

// console.log(document.domain);
// console.log(document.URL);

// console.log(document.title);
// //document.title=568;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms);

//console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// var addItem = document.getElementById('add-items');
// console.log(headerTitle);
// headerTitle.textContent ='Hello';

// headerTitle.style.borderBottom = 'solid 3px #000';
// addItem.style.fontWeight ='bold';
// addItem.style.color ='green';

////get elements by classname
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[2]);
// items[2].style.backgroundColor = 'green';
// //items.style.fontWeight ='bold';
// for(var i=0;i<items.length;i++){
//     items[i].style.fontWeight ='bold';
// }


// GET ELEMENTS BY TAG NAME

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[2]);

// for(var i=0;i<li.length;i++){
//         li[i].style.fontWeight ='bold';
//     }

//QUERY SELECTOR

// var header = document.querySelector('#main-header');
// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'green';

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.visibility= 'hidden';

//TRAVERSING THE DOM//

var itemList = document.querySelector('#items');
//parentNode
//console.log(itemList.parentNode);

//console.log(itemList.childNodes);
// console.log(itemList.children);

// console.log(itemList.firstChild);
// console.log(itemList.firstElementChild);

//CREATE ELEMENT// 
var newDiv = document.createElement('div');
newDiv.className ='hello';
newDiv.id = 'hello1';

newDiv.setAttribute('title', 'Hello Div');
var newDivText = document.createTextNode('Hello World');
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1=document.querySelector('header h1');
console.log(newDiv);

container.insertBefore(newDiv, h1);


