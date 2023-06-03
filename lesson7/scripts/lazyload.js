const images = document.querySelectorAll('body');

const imgOptions = {
    threshold: 1,
    rootMargin: '0px 0px 0px 300px 0px'
};

function preloadImage(img) {
    const src = img.getAttribute('body');
    if (!src) {
        return;
    }

    img.src = src;
}


const imgObsever = new IntersectionObserver((entries, imgObsever) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImages(entry.target);
            imgObsever.unobserve(entry.target);
        }
    })

}, imgOptions)

images.forEach(image => {
    imgObsever.observe(image);
});