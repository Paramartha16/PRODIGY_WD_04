// script.js

document.addEventListener("DOMContentLoaded", function () {
  // Function to animate text from left to right
  function animateText(element, duration) {
    const text = element.innerText;
    element.innerHTML = ""; // Clear the text content
    const textArray = text.split("");

    textArray.forEach((char, index) => {
      const charSpan = document.createElement("span");
      charSpan.innerHTML = char;
      charSpan.style.animation = `textAnimation ${duration}s ease forwards ${
        index / 10
      }s`;
      element.appendChild(charSpan);
    });
  }

  // Function to add image effects
  function addImageEffects(imageElement) {
    imageElement.style.transition = "transform 1s ease-in-out";

    imageElement.addEventListener("mouseenter", () => {
      imageElement.style.transform = "scale(1.1) rotate(5deg)";
    });

    imageElement.addEventListener("mouseleave", () => {
      imageElement.style.transform = "scale(1) rotate(0deg)";
    });
  }

  // Call the animation function for the title
  const title = document.querySelector(".title");
  animateText(title, 1.5);

  // Call the image effects function for the profile picture
  const profilePic = document.querySelector("#profile img");
  addImageEffects(profilePic);

  // Add additional elements as needed
});

