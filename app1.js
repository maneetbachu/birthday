document.addEventListener("DOMContentLoaded", function () {
    function createFlower() {
        let flower = document.createElement("div");
        flower.innerHTML = '<img src="heart.png" style="width:40px; height:40px;">'; 
        flower.classList.add("flower");

        // Random position
        flower.style.left = Math.random() * window.innerWidth + "px";
        flower.style.animationDuration = (Math.random() * 7 + 5) + "s"; 
        flower.style.fontSize = (Math.random() * 10 + 50) + "px"; 

        document.body.appendChild(flower);

        setTimeout(() => {
            flower.remove();
        }, 10000); 
    }

    setInterval(createFlower, 50);
});
