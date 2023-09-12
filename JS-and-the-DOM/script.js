const myParagraph = document.getElementById('my-specific-paragraph');
console.log(myParagraph);

const myParagraphs = document.getElementsByClassName('my-paragraph');
console.log(myParagraphs);

const myParagraphQuery = document.querySelector('#my-specific-paragraph');
console.log(myParagraphQuery);

const myParagraphsQuery = document.querySelectorAll('.my-paragraph');
console.log(myParagraphsQuery);

const header = document.querySelector('h1');
console.log(header);

const divHeader = document.querySelector('div h1');
console.log(divHeader);

const div = divHeader.parentElement;
console.log(div);

const divChildren = div.children;
console.log(divChildren);

// these don't necessarily need to be stored as variables, the command can be written within the console.log call
// e.g. console.log(div.children)

const myParagraphSibling = divHeader.nextElementSibling;
console.log(myParagraphSibling);

// tree navigation is more succeptible to errors if html elements are added/changed
// query selectors are more direct and therefore safer

let link = document.querySelector("a");
link.href = "https://www.google.com";

myParagraph.id = 'a-new-element-id';
myParagraph.style.backgroundColor = "#ff0000";