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

//get elements by classname
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[2]);
items[2].style.backgroundColor = 'green';
//items.style.fontWeight ='bold';
for(var i=0;i<items.length;i++){
    items[i].style.fontWeight ='bold';
}

