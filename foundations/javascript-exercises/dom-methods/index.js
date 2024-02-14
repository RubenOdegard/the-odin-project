// Add a <p> with red text that says "Hey I'm red!"
const taskOne = document.createElement("p");
taskOne.textContent = "Hey I'm red!";
taskOne.style.color = "red";

// Add an <h3> with blue text that says "Im a blue h3"
const taskTwo = document.createElement("h3");
taskTwo.textContent = "I'm a blue h3";
taskTwo.style.color = "blue";

// Add a <div> with a black border and a pink background color with the following elements inside of it:
// - Another <h1> that says "I'm in a div"
// - A <p> that says "ME TOO!"
// Hint: After creating the <div> with <D-s>createElement, append the <h1> and <p> to it before adding it to the container.
const taskThree = document.createElement("div");
taskThree.style.border = "2px solid black";
taskThree.style.backgroundColor = "pink";

const taskThreeChildrenOne = document.createElement("h1");
taskThreeChildrenOne.textContent = "I'm in a div";

const taskThreeChildrenTwo = document.createElement("p");
taskThreeChildrenTwo.textContent = "ME TOO!";

taskThree.append(taskThreeChildrenOne, taskThreeChildrenTwo);

// Appending taskOne, taskTwo and taskThree to the body which has an id of "body"
document.body.append(taskOne, taskTwo, taskThree);
