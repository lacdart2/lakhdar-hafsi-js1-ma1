// answer to question 1 :
const cat = {
  complain: function () {
    console.log("Meow!");
  }
};
cat.complain();

// answer to question 2 :

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

// answer to question 3 

heading.style.fontSize = "2em";


// answer to question 4 

heading.classList.add("subheading");


// answer to question 5 

const paragraphs = document.querySelectorAll("p")


// answer to question 6 

const resultsContainer = document.querySelector(".results")

resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.color = "yellow";

// answer to question 7 
