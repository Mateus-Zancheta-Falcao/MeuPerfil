document.addEventListener("DOMContentLoaded", function () {
  const titleElement = document.getElementById("animated-title");
  const textToType = "Kaito";
  let charIndex = 0;

  function type() {
    titleElement.textContent = textToType.substring(0, charIndex++);
    if (charIndex <= textToType.length) {
      setTimeout(type, 280);
    }
  }

  type();
});
