const child = document.querySelector('.child');
const cb = function(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      console.log('inview');
      entry.target.classList.add('inview');
    } else {
      console.log('out view');
    }
  });
}
const options = {
  rootMargin: "-300px 0px",


};
const io = new IntersectionObserver(cb, options);
io.observe(child);