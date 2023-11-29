// html elements
let tile1 = document.querySelector('.tile-1')
let tile2 = document.querySelector('.tile-2')
let tile3 = document.querySelector('.tile-3')
let tile4 = document.querySelector('.tile-4')
let tile5 = document.querySelector('.tile-5')
let tile6 = document.querySelector('.tile-6')
let tile7 = document.querySelector('.tile-7')
let tile8 = document.querySelector('.tile-8')
let tile9 = document.querySelector('.tile-9')


/********* NOTE: unsure which tile is which? Be sure to reference the HTML when you need to double-check! ************/


// 1. Tile 1 feels a little sad. 
// - Update the inner HTML to show an encouraging message! 
// - Something like "YOU GOT THIS!" or even a "You're a beautiful person!" 
tile1.innerHTML = "You Got This"


// 2. Tile 2 has a button. 
// - Create a click event and have the background color of tile 2 change to a shade of green.
// - BE SURE TO SAVE THE BUTTON FIRST AS A VARIABLE.
// - Can you see if there's a way to toggle it???
clickButton = document.querySelector('button');

let originalColor = tile2.style.backgroundColor

clickButton.addEventListener("click", (event) => {
  if (tile2.style.backgroundColor === "green") {
    tile2.style.backgroundColor = originalColor;
  }
  else {
    tile2.style.backgroundColor = "green"
  }
});



// 3. What's this? A totoro? Where's his friends? 
// - Using createElement, create a friend (an image element).
// - Once created, set the src of it to the image address.
// - Append the element to tile 3. 
// - Need some inspiration? Go to giphy.com, search a character and choose the "stickers".
friendImage = document.createElement("img");
friendImage.src = "https://media2.giphy.com/media/ZYZEFjLzOV3fq/giphy.gif?cid=ecf05e47jwlib5tvy4d1f0248ryigzn7en1qu2rs63nv9mjo&ep=v1_gifs_search&rid=giphy.gif&ct=g"
tile3.appendChild(friendImage);

// 4. Oh no! A broken image! We need to fix this.
// - Set the src for tile 4 to have an image of your favorite TV show.
tile4.src = "https://tv-fanatic-res.cloudinary.com/iu/s--GAhBhEba--/t_slideshow/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1503671939/slides/2659/high-times.png"



// These following tasks may require a little bit of digging. 
// Unsure how to complete the task? Use your resources! Code Nation reference table might help. 
// Can't find it there? Google search the keywords of what you're trying to do and use web dev documentation! 
// W3schools, MDN Web Docs, and Stack Overflow all super reliable 😊


// 5. Hmm. Looks like the font is too small. 
// - Update the font-size of tile 5 to 35 pixels.
tile5.style.fontSize = "35px"

// 6. Another sad box! 
// - Let make this tile 6 feel special and add a gradient background! 
// - What kind of gradient? What color? YOU CHOOSE!

tile6.style.backgroundColor = ""

// 7. Too many squares. 
// - Let's change tile 7 to have rounded edges - be sure to search for which CSS property does this :)
tile7.style.borderRadius = "20px"

// 8. Replace the image with your favorite emoji. 
// - Try going to this site to search: https://emojipedia.org/

tile8.src = "https://m.media-amazon.com/images/I/417ayPE62RL._UF1000,1000_QL80_.jpg"

// 9. Display a random number in the tile when the button is clicked.
// - BE SURE TO SAVE THE BUTTON FIRST AS A VARIABLE.



