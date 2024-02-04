var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Weeb", "Web Developer"],
    typeSpeed: 200,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function rain() {
    let amount = 20;
    let projectSection = document.getElementById('projects');
  
    for (let i = 0; i < amount; i++) {
      let raindrop = document.createElement('div');
      raindrop.className = 'rain';
  
      let posX = Math.floor(Math.random() * window.innerWidth);
      let duration = Math.random() * 2 + 1; // Adjust the falling speed
  
      raindrop.style.left = posX + 'px';
      raindrop.style.animationDuration = duration + 's';
  
      projectSection.appendChild(raindrop);
    }
  }
  
  // Call the rain function
  rain();
  
