// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  const ticker = document.getElementById('news-ticker');

  if (!ticker) return; // safety check

  // Duplicate items for seamless loop
  ticker.innerHTML += ticker.innerHTML;

  // Calculate scroll duration dynamically
  const itemCount = ticker.children.length / 2; // divide by 2 because we duplicated
  const itemHeight = ticker.children[0].offsetHeight;
  const totalHeight = itemCount * itemHeight;

  // Scroll speed: 30 pixels per second (adjustable)
  const speed = 20; // pixels per second
  const duration = totalHeight / speed; // seconds

  // Apply animation using inline style
  ticker.style.animation = `scrollNews ${duration}s linear infinite`;

  // Create keyframes dynamically
  const styleSheet = document.createElement('style');
  styleSheet.type = 'text/css';
  styleSheet.innerText = `
    @keyframes scrollNews {
      0% { transform: translateY(0); }
      100% { transform: translateY(-${totalHeight}px); }
    }
  `;
  document.head.appendChild(styleSheet);
});
