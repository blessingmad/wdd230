const imagesToLoad = document.querrySelectorAll("img[data-src]")
const options = {}

const lazyLoadingimages = (img) => {
    img.setAttribute("src", img.getAttribute("data-src"));
    img.onload = () => {img.removeAttribute("data-src")};
};

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) =>{ 
    items.forEach((item)=>{
        if(item.isIntersecting){
            lazyLoadingimages(item.target)
            observer.unobserve(item.target)
        }
      })
   }, options)
   imagesToLoad.forEach((img) => {
    observer.observe(img)
   })   
}
else {
    imagesToLoad .forEach((img) => {
        lazyLoadingimages(img)
    })
}
   