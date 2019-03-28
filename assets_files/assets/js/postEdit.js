import testColors from './colors';

document.addEventListener("DOMContentLoaded", (event) => {
  const simplemde = new SimpleMDE({ element: document.getElementById("bodyArea") });
  testColors();
});
