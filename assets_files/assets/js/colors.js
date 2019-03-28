function testColors() {
  const check = document.querySelector(".check");
  
  check.addEventListener("click", (event) => {
    event.preventDefault();
    const firstColor = document.querySelector(".firstColor").value;
    const secondColor = document.querySelector(".secondColor").value;
    const headerTitle = document.querySelector(".container-headertitle");
    headerTitle.style.background = `linear-gradient(120deg, ${firstColor}, ${secondColor})`;
  });
}

export default testColors;
