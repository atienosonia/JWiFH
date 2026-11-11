// Create the custom cursor
var cursor = document.createElement("div");

// Add the custom-cursor class
cursor.classList.add("custom-cursor");

// Add the cursor to the body
document.body.appendChild(cursor);

// Move the cursor with the mouse
document.addEventListener("mousemove", function (event) {
    cursor.style.left = event.clientX + "px";
    cursor.style.top = event.clientY + "px";
});