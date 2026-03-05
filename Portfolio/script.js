const modal = document.getElementById("projectModal");
const cards = document.querySelectorAll(".project-card");
const closeBtn = document.querySelector(".close-btn");

// Elements inside the modal
const mTitle = document.getElementById("modalTitle");
const mDesc = document.getElementById("modalDesc");
const mGallery = document.getElementById("modalGallery");

cards.forEach(card => {
    card.addEventListener("click", () => {
        // 1. Get data from the clicked card
        const title = card.getAttribute("data-title");
        const desc = card.getAttribute("data-desc");
        const images = card.getAttribute("data-images").split(",");

        // 2. Fill the modal
        mTitle.innerText = title;
        mDesc.innerText = desc;
        
        // Clear old images and add new ones
        mGallery.innerHTML = "";
        images.forEach(imgSrc => {
            const img = document.createElement("img");
            img.src = imgSrc.trim();
            mGallery.appendChild(img);
        });

        // 3. Show the modal
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Prevent background scroll
    });
});

// Close modal logic
closeBtn.onclick = () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
};

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
};