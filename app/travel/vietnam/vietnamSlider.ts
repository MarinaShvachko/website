const TOTAL_SLIDES = 11;
export const VIETNAM_PATH = '/travel/vietnam';
const VIETNAM_RETURN_SLIDE_KEY = 'vietnamReturnSlide';
const AUTOPLAY_DELAY_MS = 15000;

type ItemState = { position: number; transform: number };

const state = {
  indicatorIndex: 0,
  transformValue: 0,
  currentPosition: 0,
  itemsArray: [] as ItemState[],
};

let returningViaBack = false;
let autoplayTimer: ReturnType<typeof setInterval> | null = null;
let listenersBound = false;

function getSliderElements() {
  const slider = document.querySelector('.slider');
  const items = slider?.querySelector('.slider__items') as HTMLElement | null;
  const sliderItems = slider?.querySelectorAll('.slider__item');
  const indicators = slider?.querySelectorAll('.slider__indicators > li');
  return { slider, items, sliderItems, indicators };
}

function getSlideIndexFromDayPath(path: string) {
  const match = path.match(/\/travel\/vietnam\/day(\d+)/);
  if (!match) return null;
  const day = parseInt(match[1], 10);
  if (day < 1 || day > TOTAL_SLIDES) return null;
  return day - 1;
}

function getItemIndex(mode: 'min' | 'max') {
  let index = 0;
  for (let i = 0; i < state.itemsArray.length; i++) {
    if (
      (state.itemsArray[i].position < state.itemsArray[index].position && mode === 'min') ||
      (state.itemsArray[i].position > state.itemsArray[index].position && mode === 'max')
    ) {
      index = i;
    }
  }
  return index;
}

function getItemPosition(mode: 'min' | 'max') {
  return state.itemsArray[getItemIndex(mode)].position;
}

function resetSliderState() {
  state.indicatorIndex = 0;
  state.transformValue = 0;
  state.currentPosition = 0;
  state.itemsArray = [];
}

function initItemsArray() {
  const { sliderItems } = getSliderElements();
  if (!sliderItems || sliderItems.length === 0) return;

  if (state.itemsArray.length === sliderItems.length) return;

  state.itemsArray = [];
  for (let i = 0; i < sliderItems.length; i++) {
    state.itemsArray.push({ position: i, transform: 0 });
  }
}

function applyTransform() {
  const { items, indicators, sliderItems } = getSliderElements();
  if (!items) return;

  items.style.transform = `translateX(${state.transformValue}%)`;
  indicators?.forEach((indicator, i) => {
    indicator.classList.toggle('active', i === state.indicatorIndex);
  });
  sliderItems?.forEach((item, i) => {
    const itemState = state.itemsArray[i];
    if (itemState) {
      (item as HTMLElement).style.transform = `translateX(${itemState.transform}%)`;
    }
  });

  if (window.location.pathname === VIETNAM_PATH) {
    sessionStorage.setItem(VIETNAM_RETURN_SLIDE_KEY, String(state.indicatorIndex));
  }
}

function stopAutoplay() {
  if (autoplayTimer !== null) {
    clearInterval(autoplayTimer);
    autoplayTimer = null;
  }
}

function startAutoplay() {
  stopAutoplay();
  autoplayTimer = setInterval(() => move('next'), AUTOPLAY_DELAY_MS);
}

function move(direction: 'next' | 'prev') {
  const { sliderItems } = getSliderElements();
  if (!sliderItems || sliderItems.length === 0) return;

  const indicatorIndexMax = sliderItems.length - 1;

  if (direction === 'next') {
    state.currentPosition++;
    if (state.currentPosition > getItemPosition('max')) {
      const nextItem = getItemIndex('min');
      state.itemsArray[nextItem].position = getItemPosition('max') + 1;
      state.itemsArray[nextItem].transform += state.itemsArray.length * 100;
    }
    state.transformValue -= 100;
    state.indicatorIndex++;
    if (state.indicatorIndex > indicatorIndexMax) {
      state.indicatorIndex = 0;
    }
  } else {
    state.currentPosition--;
    if (state.currentPosition < getItemPosition('min')) {
      const nextItem = getItemIndex('max');
      state.itemsArray[nextItem].position = getItemPosition('min') - 1;
      state.itemsArray[nextItem].transform -= state.itemsArray.length * 100;
    }
    state.transformValue += 100;
    state.indicatorIndex--;
    if (state.indicatorIndex < 0) {
      state.indicatorIndex = indicatorIndexMax;
    }
  }

  applyTransform();
}

function moveTo(index: number) {
  let steps = 0;
  const direction = index > state.indicatorIndex ? 'next' : 'prev';
  while (index !== state.indicatorIndex && steps <= TOTAL_SLIDES) {
    move(direction);
    steps++;
  }
}

function goToSlideInstant(index: number) {
  resetSliderState();
  initItemsArray();
  state.indicatorIndex = index;
  state.transformValue = -index * 100;
  state.currentPosition = index;

  const { items } = getSliderElements();
  if (items) {
    items.style.transition = 'none';
    applyTransform();
    items.offsetHeight;
    items.style.transition = '';
  } else {
    applyTransform();
  }
}

function getRestoreSlideIndex(isBackNav: boolean) {
  if (!isBackNav && getSlideIndexFromDayPath(document.referrer) === null) {
    return null;
  }

  const fromReferrer = getSlideIndexFromDayPath(document.referrer);
  if (fromReferrer !== null) return fromReferrer;

  const stored = sessionStorage.getItem(VIETNAM_RETURN_SLIDE_KEY);
  if (stored !== null) {
    const parsed = parseInt(stored, 10);
    if (parsed >= 0 && parsed < TOTAL_SLIDES) return parsed;
  }

  return null;
}

export function syncVietnamSlider() {
  if (window.location.pathname !== VIETNAM_PATH) return;

  const wasBack = returningViaBack;
  returningViaBack = false;

  const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
  const isBackNav = wasBack || nav?.type === 'back_forward';
  const restoreIndex = getRestoreSlideIndex(isBackNav);

  if (restoreIndex !== null) {
    goToSlideInstant(restoreIndex);
    startAutoplay();
    return;
  }

  const fromFreshNav = !isBackNav && !document.referrer.includes('/travel/vietnam');
  if (fromFreshNav) {
    sessionStorage.removeItem(VIETNAM_RETURN_SLIDE_KEY);
    resetSliderState();
  }

  initItemsArray();
  applyTransform();
  startAutoplay();
}

export function bindVietnamSliderListeners() {
  if (listenersBound || typeof window === 'undefined') return;
  listenersBound = true;

  window.addEventListener('popstate', () => {
    returningViaBack = true;
  });

  window.addEventListener('pageshow', () => {
    syncVietnamSlider();
    requestAnimationFrame(syncVietnamSlider);
  });

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      stopAutoplay();
    } else if (window.location.pathname === VIETNAM_PATH) {
      startAutoplay();
    }
  });

  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;

    if (window.location.pathname === VIETNAM_PATH) {
      const dayLink = target.closest('a[href*="/travel/vietnam/day"]');
      const href = dayLink?.getAttribute('href');
      if (href) {
        const slideIndex = getSlideIndexFromDayPath(href);
        if (slideIndex !== null) {
          sessionStorage.setItem(VIETNAM_RETURN_SLIDE_KEY, String(slideIndex));
        }
      }
    }

    if (window.location.pathname !== VIETNAM_PATH) return;

    const slideTo = target.closest('.slider__indicators > li')?.getAttribute('data-slide-to');
    if (slideTo !== null && slideTo !== undefined) {
      event.preventDefault();
      moveTo(parseInt(slideTo, 10));
      startAutoplay();
      return;
    }

    if (target.closest('.slider__control_next')) {
      event.preventDefault();
      move('next');
      startAutoplay();
      return;
    }

    if (target.closest('.slider__control_prev')) {
      event.preventDefault();
      move('prev');
      startAutoplay();
    }
  });

  document.addEventListener('mouseover', (event) => {
    if ((event.target as HTMLElement).closest('.slider')) {
      stopAutoplay();
    }
  });

  document.addEventListener('mouseout', (event) => {
    const from = (event.target as HTMLElement).closest('.slider');
    const to = (event.relatedTarget as HTMLElement | null)?.closest('.slider');
    if (from && !to && window.location.pathname === VIETNAM_PATH) {
      startAutoplay();
    }
  });
}

export function rememberVietnamSlide(index: number) {
  if (typeof window === 'undefined') return;
  if (index < 0 || index >= TOTAL_SLIDES) return;
  sessionStorage.setItem(VIETNAM_RETURN_SLIDE_KEY, String(index));
}
