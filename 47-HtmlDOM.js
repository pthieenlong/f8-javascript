//HTML DOM
// 1. Element: ID, class, tag, 
//      css selector, html collection
// 2. Attributes
// 3. Text



//=== Element ===
//ID, CLASS, TAG
//1. getElementByID
//2. getElementsByClassName
//3. getElementsByTagName

//CSS Selector
//4. querySelector
//5. querySelectorAll

//6. HTML Collection

//7. document.write


//=== Attributes ===
//.attributes
//getAttribute
//setAttribute


//=== Text ===
//.innerText
//textContent

var elements = document.getElementsByClassName('anchor');
var divElements = document.getElementsByTagName('div');

for(var index of elements) {
    index.setAttribute('href', 'facebook.com');

    // index.href = 'facebook.com';    
    // console.log(index.hasAttributes('href'));
}

for (var index of divElements) {
    // console.log(index.innerText = `this is a inner text by ${index.className}`);
}

var boxElement = document.querySelector('.box');

console.log(boxElement.outerHTML);



// boxElement.innerHTML = '<h1 title="Heading">New heading</h1>';
// console.log(boxElement.innerHTML);
// console.log(document.querySelector('h1').innerText);

