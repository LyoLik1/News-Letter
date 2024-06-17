function reviews() {
  const swiperContainer = document.querySelector(".card-slider");
  const Dots = document.querySelector(".swiper-pagination");

  if (!swiperContainer) {
    console.error("Swiper container not found");
    return;
  }
  const swiper = new Swiper(swiperContainer, {
    slidesPerView:
      window.innerWidth < 760 ? 1 : window.innerWidth < 1024 ? 2 : 3,
    spaceBetween: 20,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: Dots,
      clickable: true,
    },
  });
}

function header() {
  const burgerButton = document.querySelector(".burger-icon");
  const burgerButtonClose = document.querySelector(".burger-icon-close");
  const headerMenu = document.querySelector(".menu-items");

  burgerButton.addEventListener("click", toggleMenu);
  burgerButtonClose.addEventListener("click", toggleMenu);

  function toggleMenu() {
    headerMenu.classList.toggle("menu-items-active");
  }
  const links = [
    {
      link: document.querySelector(".header-link_features"),
      target: "features",
    },
    {
      link: document.querySelector(".header-link_about"),
      target: "about",
    },
    {
      link: document.querySelector(".header-link_price"),
      target: "price",
    },
    {
      link: document.querySelector(".header-link_faq"),
      target: "faq",
    },
    {
      link: document.querySelector(".header-link_features_mobile"),
      target: "features",
    },
    {
      link: document.querySelector(".header-link_about_mobile"),
      target: "about",
    },
    {
      link: document.querySelector(".header-link_price_mobile"),
      target: "price",
      yOffsets: -20,
    },
    {
      link: document.querySelector(".header-link_faq_mobile"),
      target: "faq",
    },
  ];

  const yOffsetDesktop = -60;

  links.forEach(({ link, target, yOffsets }) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const element = document.getElementById(target);
      const yOffset =
        window.innerWidth > 480
          ? yOffsetDesktop
          : yOffsets
          ? yOffsets
          : yOffsetDesktop;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    });
  });
}

function footer() {
  const footerButton = document.querySelector(".footer-button");
  footerButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

function accordion() {
  const accordionItem = document.querySelectorAll(".accordion-item");
  accordionItem.forEach((item) => {
    item
      .querySelector(".accordion-item-header")
      .addEventListener("click", () => {
        item.classList.toggle("open");
      });
  });
}

function createSlideAnimation(selector, yStart, yEnd, duration) {
  const timeline = new TimelineMax();
  timeline
    .set(selector, { y: yStart, opacity: 0 })
    .to(selector, duration, { y: yEnd, opacity: 1 });
  return timeline;
}

function createFeatureAnimation(
  selector,
  xStart,
  xEnd,
  duration,
  displayStart = "block",
  displayEnd = "block"
) {
  const timeline = new TimelineMax();
  timeline
    .set(selector, { display: displayStart, x: xStart, opacity: 0 })
    .to(selector, duration, { display: displayEnd, x: xEnd, opacity: 1 });
  return timeline;
}

function createScrollScene(triggerElement, triggerHook, duration, timeline) {
  const controller = new ScrollMagic.Controller();

  return new ScrollMagic.Scene({
    triggerElement: triggerElement,
    triggerHook: triggerHook,
    duration: duration,
  })
    .setTween(timeline)
    .addTo(controller);
}

function initAnimations() {
  const featureAnimations = [
    {
      selector: "#features",
      xStart: "0%",
      xEnd: "0%",
      duration: 1,
      displayStart: "block",
      displayEnd: "block",
      triggerElement: window.innerWidth < 480 ? ".home-image" : ".home-info",
      triggerHook: 0,
      durationValue: "30%",
    },
    {
      selector: ".feature-info-consumers",
      xStart: "-100%",
      xEnd: "0%",
      duration: 7,
      displayStart: "block",
      displayEnd: "block",
      triggerElement: window.innerWidth < 480 ? ".home-image" : ".home-info",
      triggerHook: 0,
      durationValue: window.innerWidth < 480 ? "30%" : "30%",
    },
    {
      selector: ".features-consumers_img",
      xStart: "100%",
      xEnd: "0%",
      duration: window.innerWidth < 480 ? 1 : 1,
      displayStart: "block",
      displayEnd: "block",
      triggerElement: window.innerWidth < 480 ? ".feature-title" : ".home-info",
      triggerHook: 0,
      durationValue: window.innerWidth < 480 ? "1%" : "30%",
    },
    {
      selector: ".feature-info-specialist",
      xStart: "50%",
      xEnd: "0%",
      duration: 15,
      displayStart: "block",
      displayEnd: "block",
      triggerElement:
        window.innerWidth < 480
          ? "#features"
          : window.innerWidth < 1024
          ? ".home-image"
          : "#features",
      triggerHook: 0,
      durationValue: window.innerWidth < 480 ? "100%" : "30%",
    },
    {
      selector: ".features-specialist_img",
      xStart: "-50%",
      xEnd: "0%",
      duration: window.innerWidth < 480 ? 1 : 1,
      displayStart: "block",
      displayEnd: "block",
      triggerElement:
        window.innerWidth < 480
          ? ".features-consumers_img"
          : window.innerWidth < 1024
          ? ".home-image"
          : "#features",
      triggerHook: 0,
      durationValue: window.innerWidth < 480 ? "40%" : "30%",
    },
    {
      selector: ".feature-info-busy",
      xStart: window.innerWidth < 480 ? "-100%" : "-100%",
      xEnd: "0%",
      duration: 1,
      displayStart: "block",
      displayEnd: "block",
      triggerElement:
        window.innerWidth < 480 ? ".features-text-consumers" : "#features",
      triggerHook: 0,
      durationValue:
        window.innerWidth < 480
          ? "150%"
          : window.innerWidth < 1024
          ? "20%"
          : "100%",
    },
    {
      selector: ".features-busy_img",
      xStart: "50%",
      xEnd: "0%",
      duration: window.innerWidth < 480 ? 1 : 1,
      displayStart: "block",
      displayEnd: "block",
      triggerElement:
        window.innerWidth < 480 ? ".features-specialist_img" : "#features",
      triggerHook: 0,
      durationValue:
        window.innerWidth < 480
          ? "65%"
          : window.innerWidth < 1024
          ? "20%"
          : "100%",
    },
  ];

  const additionalAnimations = [
    {
      selector: "#price",
      yStart: "10%",
      yEnd: "0%",
      duration: 0.5,
      triggerElement:
        window.innerWidth < 480
          ? ".features-title-busy"
          : ".features-text-specialist",
      triggerHook: 0,
      durationValue: "100%",
    },
    {
      selector: "#faq",
      yStart: "10%",
      yEnd: "0%",
      duration: 0.5,
      triggerElement: "#price",
      triggerHook: 0,
      durationValue: "30%",
    },
  ];

  featureAnimations.forEach((anim) => {
    const timeline = createFeatureAnimation(
      anim.selector,
      anim.xStart,
      anim.xEnd,
      anim.duration,
      anim.displayStart,
      anim.displayEnd
    );
    createScrollScene(
      anim.triggerElement,
      anim.triggerHook,
      anim.durationValue,
      timeline
    );
  });

  additionalAnimations.forEach((anim) => {
    const timeline = createSlideAnimation(
      anim.selector,
      anim.yStart,
      anim.yEnd,
      anim.duration
    );
    createScrollScene(
      anim.triggerElement,
      anim.triggerHook,
      anim.durationValue,
      timeline
    );
  });
}

function test() {
  let tl = anime.timeline({
    autoplay: false,
  });
  let tl2 = anime.timeline({
    autoplay: false,
  });

  document.querySelectorAll(".slide").forEach((slide, index) => {
    const length = document.querySelectorAll(".slide").length;

    const info = slide.querySelector(".slide-info");
    const img = slide.querySelector(".slide-img-second");

    tl.add({
      targets: info,
      opacity: [index == 0 ? 1.5 : 0, 1],
      scale: [index == 0 ? 1 : 0.1, 1],
      duration: 5000,
      easing: "easeInOutSine",
      offset: index * 2000,
    }).add({
      targets: info,
      opacity: [1, 5, index == length - 1 ? 1.5 : 0],
      scale: [1, index == length - 1 ? 1 : 0.1],
      duration: 5000,
      easing: "easeInOutSine",
      offset: index * 2000 + 1000,
      complete: function (anim) {
        if (anim.progress === 100) {
          stopScroll();
        }
      },
    });
    tl2
      .add({
        targets: img,
        opacity: [index == 0 ? 1.5 : 0, 1],
        duration: 5000,
        easing: "easeInOutSine",
        offset: index * 2000,
      })
      .add({
        targets: img,
        opacity: [1, 5, index == length - 1 ? 1.5 : 1],
        duration: 5000,
        easing: "easeInOutSine",
        offset: index * 2000 + 1000,
        complete: function (anim) {
          if (anim.progress === 100) {
            stopScroll();
          }
        },
      });
  });

  let controller = new ScrollMagic.Controller();

  let scene = new ScrollMagic.Scene({
    triggerElement: "#slider",
    duration:
      document.querySelector(".slider").clientHeight *
      document.querySelectorAll(".slide").length,
    triggerHook: 0,
  })
    .on("progress", function (event) {
      tl.seek(tl.duration * event.progress);
      tl2.seek(tl.duration * event.progress);
    })
    .setPin("#slider")
    .addTo(controller);
}

document.addEventListener("DOMContentLoaded", function (event) {
  header();
  reviews();
  accordion();
  footer();
  initAnimations();
  test();
});
