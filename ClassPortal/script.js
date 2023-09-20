console.log("This is working");

// source: https://css-tricks.com/working-with-javascript-media-queries/
// seems legit
function checkMediaQuery() {
    // If the inner width of the window is less than 400px
    if (window.innerWidth < 400) {
        // Then abbreviate these titles
        document.body.querySelector("#assignments").innerHTML = "A";
        document.body.querySelector("#projects").innerHTML = "P";
    } else {
        document.body.querySelector("#assignments").innerHTML = "Assignments";
        document.body.querySelector("#projects").innerHTML = "Projects"; 
    }
  }
  
  // Add a listener for when the window resizes
  window.addEventListener('resize', checkMediaQuery);
//console.log(x);