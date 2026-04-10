// Initialize Owl Carousel for the hero slider
$(document).ready(function() {
    $('.hero-slider').owlCarousel({
        loop: true,
        margin: 15,
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: false,
        responsive: {
            0: { items: 1 },
            576: { items: 1 },
            768: { items: 1 },
            992: { items: 1 }
        }
    });

    // <Section 1>
    // Particles
    particlesJS("particles-js", {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 5,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  });

    // <Section 2>
    // LOGO CAROUSEL (We Have Worked)
    $('.logo-carousel').owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 2000,
        smartSpeed: 600,
        dots: false,
        nav: false,
        responsive: {
            0: { items: 2 },
            576: { items: 3 },
            768: { items: 5 },
            992: { items: 6 }
        }
    });

    // <Section 3>
    // Services Carousel
    $('.services-carousel').owlCarousel({
        loop: true,
        margin: 25,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 800,
        dots: false,
        nav: false,
        navText: ['←','→'],
        responsive: {
            0: { items: 1 },
            576: { items: 1 },
            768: { items: 2 },
            992: { items: 3 }
        }
    });

    // <Section 4>
    // Counter Section
    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 800,
        once: true,
        offset: 100,
    });
    (function() {
        // select all counter spans that have .purecounter class
        const counters = document.querySelectorAll('.purecounter');
        // store initialization status
        let started = false;     // flag to ensure counters start only when visible
        let animated = false;    // prevent re-run

        // function to animate a specific counter element
        function animateCounter(counterElement) {
            const target = parseInt(counterElement.getAttribute('data-target'), 10);
            if (isNaN(target)) return;
            let current = 0;
            const duration = 2000;        // 2 seconds animation
            const stepTime = 16;           // ~60fps
            const totalSteps = duration / stepTime;
            let step = Math.ceil(target / totalSteps);
            if (step < 1) step = 1;

            const updateCounter = () => {
                current += step;
                if (current >= target) {
                    counterElement.innerText = target;
                    return;
                }
                counterElement.innerText = current;
                requestAnimationFrame(() => {
                    setTimeout(updateCounter, stepTime);
                });
            };
            updateCounter();
        }

        // function to start all counters (one by one slight stagger)
        function startCounters() {
            if (animated) return;
            animated = true;
            // add small staggered delay for elegance (but all will start within 300ms)
            const counterItems = document.querySelectorAll('.counter-card');
            counters.forEach((counter, idx) => {
                setTimeout(() => {
                    animateCounter(counter);
                }, idx * 180); // staggered start: each counter 0.18s later
            });
        }

        // Intersection Observer: when the counter section becomes visible, fire counters
        const observer = new IntersectionObserver((entries, observerInstance) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animated) {
                    startCounters();
                    observerInstance.unobserve(entry.target); // stop observing after trigger
                }
            });
        }, { threshold: 0.3 }); // 30% visibility triggers counters

        const section = document.querySelector('#counterSection');
        if (section) {
            observer.observe(section);
        } else {
            // fallback: if section not found, just start after load
            window.addEventListener('load', startCounters);
        }

        // edge: if page loads and section already visible (e.g., fast connection)
        if (section && !animated) {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                startCounters();
            }
        }
    })();

});