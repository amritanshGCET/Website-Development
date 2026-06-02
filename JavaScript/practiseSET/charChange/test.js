// 1. Target the element and get its text
let a = document.querySelector(".hello");
let text = a.innerText;

// 2. Split the text into an array of characters
const splitText = text.split(''); 

// 3. Create a new empty string to hold our final HTML
let newHTML = "";

// 4. Loop through starting at 0, stopping BEFORE the length
for (let i = 0; i < splitText.length; i++) {
    
    if (splitText[i] !== " ") {
        // If it's a letter, wrap it in a span
        newHTML += `<span>${splitText[i]}</span>`;
    } else {
        // If it is a space, add a normal space back in so words don't merge
        newHTML += " "; 
    }
}

// 5. Inject the newly formatted string back into the HTML element
a.innerHTML = newHTML;

console.log(newHTML);