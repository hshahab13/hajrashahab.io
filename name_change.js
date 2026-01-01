document.addEventListener("DOMContentLoaded", function () {
  const mainName = "Hajra Shahab";
  const titles = ["Transportation Economist", " Research Scientist", "Urban Planner", "City Scientist", "Data Scientist", "Policy Analyst"];
  const nameElement = document.getElementById("dynamic-name");

  if (!nameElement) return;

  let titleIndex = 0;
  let charIndex = 0;
  let typingSpeed = 100;       // ms per character
  let pauseBetweenTitles = 1500;

  function typeTitle() {
    const currentTitle = titles[titleIndex];
    
    // Construct innerHTML: mainName in amber, the colon + title in red
    nameElement.innerHTML = `<span style="color:#ECA72C;">${mainName}:</span> <span style="color:#ff5a5f;">${currentTitle.slice(0, charIndex)}</span>`;

    if (charIndex < currentTitle.length) {
      charIndex++;
      setTimeout(typeTitle, typingSpeed);
    } else {
      setTimeout(() => {
        charIndex = 0;
        titleIndex = (titleIndex + 1) % titles.length;
        typeTitle();
      }, pauseBetweenTitles);
    }
  }

  typeTitle();
});
