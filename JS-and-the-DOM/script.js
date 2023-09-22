/*const myParagraph = document.getElementById('my-specific-paragraph');
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

let isStyled = false;
document.addEventListener('click', () => {
    if (isStyled) {
        myParagraph.style.backgroundColor = null; 
        isStyled = false; 
    }
    else {
        myParagraph.style.backgroundColor = "#ff0000";
        isStyled = true;
    }
    myParagraph.id = 'a-new-element-id';
});

const usernameInput = document.getElementById('username');
usernameInput.addEventListener('change', () => {
    console.log(usernameInput.value);
});
// try this with 'input' instead of change

const form = document.querySelector('form')
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);
    // this is taking all of the user-entered data from the form 
    // and putting it into a FormData object
    // 
    // this requires adding names to input tags
    console.log(data.get('username'));
    console.log(data.get('password'));
});
THIS WAS ALL FROM THE IN CLASS EXAMPLES ^
*/

// this is to make sure the script file is properly linked
console.log("this is working");

// passwords
let secretPasswords = [
    {
        "name": "Ellen",
        "birthday": new Date('September 21'),
        "imgsrc": "assets/ellenbday.jpg",
        "password": "elegantellen"
    },
    {
        "name": "Sarah",
        "birthday": new Date('September 19'),
        "imgsrc": "assets/sarahbday.jpg",
        "password": "sarahsmiles"
    },
    {
        "name": "Caitlin",
        "birthday": new Date('September 23'),
        "imgsrc": "assets/caitbday.jpg",
        "password": "cutiecait"
    }
]

const bdaySurprise = document.getElementById('bdaysurprise');
const submitForm = document.querySelector('form');
submitForm.addEventListener('submit', event => {
    event.preventDefault();

    const data = new FormData(submitForm);
    console.log(data.get('password'));

    const userInput = data.get('password');
    let user = secretPasswords.find(user => user.password === userInput);
    console.log(user);

    if (user) {
        console.log("password correct");
        bdaySurprise.getElementById('pic').src = user.imgsrc;
        bdaySurprise.getElementById('message').innerHTML = "Happy Birthday "+user.name+"!";
        bdaySurprise.style.visibility = "visible";
        
        // CSS property
    }
    
})

// learned how to add this animation from: https://www.youtube.com/watch?v=9KaUzmdGrWU
function heartAnimation(e) {
    let x = e.clientX - 30, 
        y = e.clientY - 50, 
        heart = `<span class="heart" style="left:${x}px; top:${y}px">♡</span>`;

    document.body.insertAdjacentHTML('beforeend', heart);

    setTimeout(() => document.querySelector('.heart').remove(), 1000);
}

document.addEventListener('click', (e) => {
    heartAnimation(e);
})