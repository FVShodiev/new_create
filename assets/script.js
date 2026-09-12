// скрипт для первого слайдера автопрокрутки 
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.hashtag-track');
  const items = document.querySelectorAll('.hashtag-item');

  items.forEach(item => {
    const clone = item.cloneNode(true);
    track.appendChild(clone);
  });

  function updateSlider() {
    const totalWidth = Array.from(items).reduce((sum, item) => {
      return sum + item.offsetWidth + 30;
    }, 0);
    track.style.width = totalWidth * 2 + 'px';
    track.style.animation = `marquee-scroll ${totalWidth / 30}s linear infinite reverse`;
  }
  updateSlider();
  window.addEventListener('resize', updateSlider);
});

// скрипт для второго слайдера с автопрокруткой 
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.slide-box');
  const slides = document.querySelectorAll('.slid-card');

  slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    slider.appendChild(clone);
  });

  function updateSliderAnimation() {
    const totalWidth = Array.from(slides).reduce((sum, slide) => {
      return sum + slide.offsetWidth;
    }, 0);
    slider.style.width = totalWidth * 2 + 'px';
    slider.style.animation = `scroll ${totalWidth / 50}s linear infinite`;
  }
  updateSliderAnimation();
  window.addEventListener('resize', updateSliderAnimation);
});

