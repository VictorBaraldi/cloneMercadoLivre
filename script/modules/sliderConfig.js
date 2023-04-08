const slide = document.querySelector('.glider');

export const slider = new Glider(slide, {
  slidesToShow: 1,
  dots: '#dots',
  draggable: false,
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next',
  },
});
