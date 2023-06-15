// makes the button have its inputs listened to 
let inputElm = document.querySelector("input");
let timegood = true;
let numcorrect = 0;
let bodyelm = document.querySelector("p");

function getUserItem() {
    if (inputElm.value) {

        // for debugging
        // console.log(inputElm.value);

        // clear the button after clicking
        // additionally, pressing enter 
        return inputElm.value
    }
}

function answerCheck() {

}
let buttonElm = document.querySelector("button");
buttonElm.addEventListener("click", answerCheck);
inputElm.addEventListener("keyup", answerCheck);


function answerCheck() {
    // was that key press enter?
    if (event.key == "Enter") {
        
        attempt = getUserItem();

        // for debugging
        console.log("You inputted " + attempt)
        console.log("The answer was " + ans)

        if (attempt == ans) {
            // makes a new problem
            newProblem()
            // clears the text input
            inputElm.value = "";
            numcorrect++;
            bodyelm.textContent = "Your score is " + numcorrect
            document.body.style.backgroundColor = "green";

        }
        else {
            // clears the text input
            inputElm.value = "";
            document.body.style.backgroundColor = "red";
        }
    }
}

function answerCheckButton() {

        attempt = getUserItem();
        console.log("the answer rn is " + ans)
        if (attempt == ans) {
            // makes a new problem
            newProblem()
            // clears the text input
            inputElm.value = "";
            numcorrect++;
            bodyelm.textContent = "Your score is " + numcorrect
            document.body.style.backgroundColor = "green";
        }
        else {
            // clears the text input
            inputElm.value = "";
            document.body.style.backgroundColor = "red";
        }

}
// timer code
let timeleft = 20;
let downloadTimer = setInterval(function () {
    if (timeleft <= 0) {
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "Finished";
        timegood = false;
        inputElm.remove()
        buttonElm.remove();

        // creates new link to go back to the home page
        newlink = document.createElement('a');
        newlink.innerHTML = 'Home';
        newlink.setAttribute('title', 'Home');
        newlink.setAttribute('href', 'index.html');
        document.getElementById("container").appendChild(newlink);

    } else {
        document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
    }
    timeleft -= 1;
    document.body.style.backgroundColor = "white";
}, 1000);

let ans;

function addProblem() {
    let add1 = 2 + Math.floor(Math.random() * 999);
    let add2 = 2 + Math.floor(Math.random() * 999);
    ans = add1 + add2;
    let headingElm = document.querySelector("h1");
    headingElm.textContent = add1 + " + " + add2

    // for debugging
    console.log("The answer is " + ans)

    // make it so that on enter press answers are correct or wrong
    // add 1 to score if correct, add 0 if incorrect
}

function multProblem() {
    let mult1 = 2 + Math.floor(Math.random() * 99);
    let mult2 = 2 + Math.floor(Math.random() * 11);
    ans = mult1 * mult2;
    let headingElm = document.querySelector("h1");
    headingElm.textContent = mult1 + " * " + mult2

    // for debugging
    console.log("The answer is " + ans)
}

function subProblem(){
    let small = 2 + Math.floor(Math.random() * 999);
    ans = 2 + Math.floor(Math.random() * 999);
    big = ans + small;
    let headingElm = document.querySelector("h1");
    headingElm.textContent = big + " - " + small

    // for debugging
    console.log("The answer is " + ans)
}

function divProblem(){
    let divisor = 2 + Math.floor(Math.random() * 99);
    ans = 2 + Math.floor(Math.random() * 11);
    dividend = divisor * ans;
    let headingElm = document.querySelector("h1");
    headingElm.textContent = dividend + " / " + divisor

    // for debugging
    console.log("The answer is " + ans)
}


function newProblem() {
    // gives a 50 50 chance for each problem
    if (Math.random() < 0.25) {
        addProblem()
    }
    else if(Math.random() < 0.25 && Math.random() < 0.5) {
        multProblem()
    }
    else if(Math.random() < 0.5 && Math.random() < 0.75) {
        subProblem()
    }
    else{
        divProblem()
    }
}

// puts first problem on the page
newProblem()


