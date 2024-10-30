// Controlling CSS & Attributes from JS

// document.getElementById("some-id").style; // Accesses CSS rule for "some-id" element

// document.getElementById("some-id").style.border = "2px soid black";

// document.getElementById("some-image").src = "images/newpic.jpg"; // Changes an image ;

// document.getElementById("some-a-tag").href = "http://newlink.com" // Changes the hyperlink

// Changing an Image ve Adding a New Image
// To add an image where there wasnt one before you need a container for the image un HTML
// Containers are empty <p>, <h1>, <div> elements.
// For E.g. In HTML: <div id="img-container"> dog </div>

// document.getElementById("img-container").innerHTML =
//   "<img scr='images/pic.jpg' >";

// Apple vs Android

// Android
document.getElementById("android").addEventListener("click", androidHome);

function androidHome() {
  // Change the 'Android vs Apple' image to the Android Logo in the images folder
  document.getElementById("logo").src = "images/Android-Logo.jpg";
  // Change the 'Explore the Debate' link so that the link says 'Android Home'
  document.getElementById("link").innerHTML = "Android Home";
  // Change the 'Explore the Debate' link so that the background color is #a4c93b
  document.getElementById("link").style.background = "#a4c93b";
  //   Change the 'Explore the Debate' link so that the href is now 'https://www.android.com/;
  document.getElementById("link").href = "https://www.android.com/";
  //   Change the background color of the html to #a4c93b
  document.getElementById("html").style.background = "#a4c93b";
  //   Change the base font-family to 'Roboto', sans-serif
  document.getElementById("body").style.fontFamily = "'Roboto', sans-serif";
  //   Add the class 'active' to the Android button.
  document.getElementById("android").classList.add("redborder");
  //   Remove the class 'active' from the Apple button.
  document.getElementById("apple").classList.remove("redborder");
}

// Apple
document.getElementById("apple").addEventListener("click", appleHome);

function appleHome() {
  // Change the 'Android vs Apple' image to the Apple Logo in the images folder
  document.getElementById("logo").src = "images/Apple-Logo.jpg";
  // Change the 'Explore the Debate' link so that the link says 'Apple Home'
  document.getElementById("link").innerHTML = "Apple Home";
  // Change the 'Explore the Debate' link so that the background color is #b6bcca
  document.getElementById("link").style.background = "#b6bcca";
  // Change the 'Explore the Debate' link so that the href is now 'https://www.apple.com/;
  document.getElementById("link").href = "https://apple.com/";
  // Change the background color of the body to #b6bcca
  document.getElementById("html").style.background = "#b6bcca";
  // Change the base font family to 'Brygada 1918', serif
  document.getElementById("body").style.fontFamily = "'Brygada 1918', serif";
  // Add the class 'active' to the Apple button.
  document.getElementById("apple").classList.add("redborder");
  // Remove the class 'active' from the Android button.
  document.getElementById("android").classList.remove("redborder");
}
