function showmenu() {
    document.getElementById("navLinks").style.right = "0";
}

function hidemenu() {
    document.getElementById("navLinks").style.right = "-200px";
}

function scrollLeft() {
    document.querySelector('.visitors-gallery').scrollBy({ left: -300, behavior: 'smooth' });
}

function scrollRight() {
    document.querySelector('.visitors-gallery').scrollBy({ left: 300, behavior: 'smooth' });
}


// Smooth Scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        hidemenu(); // Close menu in mobile view after clicking
    });
});
