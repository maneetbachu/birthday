document.addEventListener("DOMContentLoaded", function () {
    function createFlower() {
        let flower = document.createElement("div");
        flower.innerHTML = '<img src="flower.png" style="width:40px; height:40px;">'; // Flower Emoji
        flower.classList.add("flower");

        // Random position
        flower.style.left = Math.random() * window.innerWidth + "px";
        flower.style.animationDuration = (Math.random() * 7 + 5) + "s"; // Random fall speed
        flower.style.fontSize = (Math.random() * 10 + 60) + "px"; // Random size

        document.body.appendChild(flower);

        setTimeout(() => {
            flower.remove();
        }, 9000); // Remove flower after animation
    }

    // Generate flowers every 200ms
    setInterval(createFlower, 200);
});
