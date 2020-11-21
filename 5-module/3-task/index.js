function initCarousel() {
  const sliderWrapper = document.querySelector('.carousel__inner');
  const sliderItems = document.querySelectorAll('.carousel__slide');
  const sliderControls = document.querySelector('.carousel__arrow');
  const sliderControlLeft = document.querySelector('.carousel__arrow_left');
  const sliderControlRight = document.querySelector('.carousel__arrow_right');
  const wrapperWidth = parseFloat(getComputedStyle(sliderWrapper).width);
  const itemWidth = parseFloat(getComputedStyle(sliderItems[0]).width);
  let positionLeftItem = 0;
  let transform = 0;
  const step = itemWidth / wrapperWidth * 500;
  const items = [];
  sliderItems.forEach(function (item, index)
  {items.push({ item: item, position: index, transform: 0 });
  });

  const position = {
    getMin: 0,
    getMax: items.length - 1,
  };

  sliderControlLeft.style.display = 'none';

  const transformItem = function (direction) {
    sliderControlLeft.style.display = '';
    if (direction === 'right') {
      if ((positionLeftItem + wrapperWidth / itemWidth - 1) >= position.getMax) {
        return;
      }
      if (!sliderControlLeft.classList.contains('carousel__arrow')) {
        sliderControlLeft.classList.add('carousel__arrow');
      }
      if (sliderControlRight.classList.contains('carousel__arrow') && (positionLeftItem + wrapperWidth / itemWidth) >= position.getMax) {
        sliderControlRight.style.display = 'none';
      }
      positionLeftItem++;
      transform -= step;
    }
    if (direction === 'left') {
      if (positionLeftItem <= position.getMin) {
        return;
      }
      if (!sliderControlRight.classList.contains('carousel__arrow')) {
        sliderControlRight.classList.add('carousel__arrow');
      }
      if (sliderControlLeft.classList.contains('carousel__arrow') && positionLeftItem - 1 <= position.getMin) {
        sliderControlLeft.classList.remove('carousel__arrow');
      }
      positionLeftItem--;
      transform += step;
    }
    sliderWrapper.style.transform = 'translateX(' + transform + 'px)';
  };


  const controlClick = function (e) {
    if (e.target.classList.contains('carousel__arrow')) {
      e.preventDefault();
      const direction = e.target.classList.contains('carousel__arrow_right') ? 'right' : 'left';
      transformItem(direction);
    }
  };

  function controlSliders() {
    sliderControls.addEventListener('click', controlSliders);
    addEventListener('click', controlClick);
  }

  controlSliders();
}
