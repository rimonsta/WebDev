console.log("this is working");

const obitForm = document.obitForm;
const itemName = document.getElementById('name');
const materialsNodeList = document.obitForm.material;
const age = document.getElementById('age');
const levelOfHell = document.getElementById('level');
const consequences = document.obitForm.consequences;
const color = document.getElementById('colorpicker');

const submitter = document.getElementById('btn-submit');

const prevBtns = document.querySelectorAll('.btn-prev');
const nextBtns = document.querySelectorAll('.btn-next');
const formSteps = document.querySelectorAll('fieldset');
const buttons = document.querySelectorAll('.buttons');

const obitTitle = document.getElementById('obitTitle');
const ageObit = document.getElementById('ageObit');

const dinosaurImg = document.getElementById("dinosaurImg");
const plantImg = document.getElementById("plantImg");
const rockEarthImg = document.getElementById("rockEarthImg");
const animalImg = document.getElementById("animalImg");
const otherImg = document.getElementById("otherImg");

// the following code for progressive disclosure from: https://www.youtube.com/watch?v=JFfVilQSius

let formStepsNum = 0;
nextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        formStepsNum++;
        updateFormSteps();
    });
});

prevBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        formStepsNum--;
        updateFormSteps();
    });
});

function updateFormSteps() {
    formSteps.forEach(formStep => {
        formStep.classList.contains('active-step') && 
        formStep.classList.remove('active-step');
    });
    buttons.forEach(button => {
        button.classList.contains('active-step') && 
        button.classList.remove('active-step');
    });
    formSteps[formStepsNum].classList.add('active-step');
    buttons[formStepsNum].classList.add('active-step');
};

submitter.addEventListener("click", () => {
    formSteps.forEach(formStep => {
        formStep.classList.contains('active-step') && 
        formStep.classList.remove('active-step');
    });
    buttons.forEach(button => {
        button.classList.contains('active-step') && 
        button.classList.remove('active-step');
    });

    showObit();
    document.querySelector('#obit').style.display = "block";
});

obitForm.addEventListener("submit", handleSubmit);

function handleSubmit(event){
    event.preventDefault();
}

function showAge(rangeVal) {
    let val = Math.floor(rangeVal);
    const ages = ['hours','days','weeks','months','years','decades','centuries','milleniums'];
    document.getElementById("rangeValue").innerHTML=ages[val];
};

// function calcAge(rangeVal){
//     let val = Math.floor(rangeVal);
//     let arbitraryAge = 0.0;
//     switch(val) {
//         case 0:
//             arbitraryAge = (rangeVal) * (48.0);
//             break;
//         case 1:
//             arbitraryAge = (2 + ((rangeVal-1.0) * 14));
//             break;
//         case 2:
//             arbitraryAge = 2 + ((rangeVal-2.0) * 8);
//             break;
//         case 3:
//             arbitraryAge = 2 + ((rangeVal-3.0) * 24);
//             break;
//         case 4:
//             arbitraryAge = 2 + ((rangeVal-4.0) * 20);
//             break;
//         case 5:
//             arbitraryAge = 2 + ((rangeVal-5.0) * 20);
//             break;
//         case 6:
//             arbitraryAge = 2 + ((rangeVal-6.0) * 20);
//             break;
//         case 7:
//             arbitraryAge = 2;
//             break;
//     }
// }

function showObit(){

    updateTitle(itemName);
    updateAgeObit(updateImages(materialsNodeList));
    

    console.log("name: " + itemName.value);
    console.log("materials: ");
    for (let i = 0; i < materialsNodeList.length; i++) {
        if (materialsNodeList[i].checked) {
            console.log(materialsNodeList[i].id);
        }
    }
    console.log("potential lifetime: " + potentialLifetime)
    console.log("age: " + age.value);
    console.log("level of hell: " + levelOfHell.value);
    console.log("consequences: ");
    for (let i=0; i<consequences.length; i++){
        if(consequences[i].checked){
            console.log(" - "+consequences[i].id);
        }
    }
    console.log("hex color: " + color.value);
}

function updateTitle(name){
    obitTitle.innerHTML = "RIP " + name.value;
}

function updateImages(materials){
    let potentialLifetime = 0;

    if(materials[0].checked){
        dinosaurImg.style.display = "flex";
        potentialLifetime +=7;
    } else {
        dinosaurImg.style.display = "none";
    }

    if(materials[1].checked) {
        plantImg.style.display = 'flex';
        potentialLifetime +=3;
    } else {
        plantImg.style.display = 'none';
    }

    if(materials[2].checked) {
        rockEarthImg.style.display = 'flex';
        potentialLifetime +=2;
    } else {
        rockEarthImg.style.display = 'none';
    }

    if(materials[3].checked) {
        animalImg.style.display = 'flex';
        potentialLifetime +=5;
    } else {
        animalImg.style.display = 'none';
    }

    if(materials[4].checked) {
        otherImg.style.display = 'flex';
        potentialLifetime +=3;
    } else {
        otherImg.style.display = 'none';
    }

    return potentialLifetime;
}

function updateAgeObit(materialLifetime) {
    if (age.value <  materialLifetime) {
        ageObit.innerHTML = "they died too soon";
    } else {
        ageObit.innerHTML = "they lived a full life";
    }
}

function changeColor(color) {
    document.body.style.background = color;
}
