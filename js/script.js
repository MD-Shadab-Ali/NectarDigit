// Initialize Owl Carousel for the hero slider
$(document).ready(function() {
    $("#top-header-slider").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 600,
        dots: false,
        nav: false,
        mouseDrag: false,
        touchDrag: false
    });

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
    if (document.getElementById("particles-js")) {
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
    }    
    
    //     TYPEWRITER EFFECT
    if ($(".typewriter").length) {
        new Typed(".typewriter", {
            strings: [
                "Nectar Digit",
                "Digital Growth Partner",
                "Think Digital Be Digital"
            ],
            typeSpeed: 60,
            backSpeed: 40,
            startDelay: 500,
            backDelay: 2000,
            smartBackspace: true,
            loop: true,
            showCursor: false,
            cursorChar: "|"
        });
    }

    // <Section 2>
    // LOGO CAROUSEL (We Have Worked)
    $('.logo-carousel').owlCarousel({
        loop: true,
        margin: 40,
        autoplay: true,
        autoplayTimeout: 2000,
        smartSpeed: 600,
        dots: false,
        nav: false,
        responsive: {
            0: { items: 2 },
            576: { items: 3 },
            768: { items: 3 },
            992: { items: 4 },
            1200: { items:5 }
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

    
    // THEME TOGGLE 
    const html = document.documentElement;
    const darkBtn = document.getElementById("dark-mode");
    const lightBtn = document.getElementById("light-mode");

    // Load saved theme
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        html.setAttribute("data-bs-theme", "dark");
        darkBtn.style.display = "none";
        lightBtn.style.display = "block";
    } else {
        html.setAttribute("data-bs-theme", "light");
        darkBtn.style.display = "block";
        lightBtn.style.display = "none";
    }

    // Dark click
    darkBtn.addEventListener("click", () => {
        html.setAttribute("data-bs-theme", "dark");
        localStorage.setItem("theme", "dark");

        darkBtn.style.display = "none";
        lightBtn.style.display = "block";
    });

    // Light click
    lightBtn.addEventListener("click", () => {
        html.setAttribute("data-bs-theme", "light");
        localStorage.setItem("theme", "light");

        darkBtn.style.display = "block";
        lightBtn.style.display = "none";
    });

    // AUTO ACTIVE NAVBAR (WITH DROPDOWN SUPPORT)
    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll(".navbar-nav .nav-link, .dropdown-item").forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.classList.add("active");

    // If inside dropdown → activate parent
    const parentDropdown = link.closest(".dropdown");
    if (parentDropdown) {
        parentDropdown.classList.add("active");
        }
    }
    });

    // About-section
    function buildGridSlides($slider) {

        if ($slider.data('grid-built')) return;

            const items = $slider.children('.about-section-item');
            const chunkSize = 8;

        let slides = [];

        for (let i = 0; i < items.length; i += chunkSize) {
            const chunk = items.slice(i, i + chunkSize);

            const $grid = $('<div class="slide-grid"></div>');
            chunk.each(function () {
                $grid.append($(this));
            });

            slides.push($('<div class="item"></div>').append($grid));
        }

    $slider.empty().append(slides);
    $slider.data('grid-built', true);
    }


    function destroySlider($slider) {

    if ($slider.hasClass('owl-loaded')) {
        $slider.trigger('destroy.owl.carousel');
        $slider.removeClass('owl-carousel owl-loaded owl-hidden');

        $slider.find('.owl-stage-outer').children().unwrap();
        $slider.find('.owl-stage').children().unwrap();
        $slider.find('.owl-item').removeClass('owl-item');
        $slider.find('.owl-nav, .owl-dots').remove();
    }
    }


    function initSlider() {

        const $slider = $('#about-product-slider');
        const isMobile = $(window).width() < 992;

        destroySlider($slider);

        if (isMobile) {
            $slider.data('grid-built', false);

            $slider.addClass('owl-carousel');

            $slider.owlCarousel({
                items: 1,
                loop: true,
                nav: true,
                dots: true,
                autoplay: true,
                autoplayTimeout: 3000,
                smartSpeed: 800,
                navText: [
                    '<i class="fas fa-chevron-left"></i>',
                    '<i class="fas fa-chevron-right"></i>'
                ]
            });

        } else {

            buildGridSlides($slider);

            $slider.addClass('owl-carousel');

            $slider.owlCarousel({
                items: 1,   // IMPORTANT: each slide = grid page
                loop: true,
                nav: true,
                dots: true,
                smartSpeed: 800,
                navText: [
                    '<i class="fas fa-chevron-left"></i>',
                    '<i class="fas fa-chevron-right"></i>'
                ]
            });
        }
    }

    $(document).ready(initSlider);

    $(window).on('resize', function () {
        clearTimeout(window._sliderResize);
        window._sliderResize = setTimeout(initSlider, 200);
    });
    
    // <Section 8>
    $(document).on('click', '.accordion-button', function () {

        const $btn = $(this);
        const $item = $btn.closest('.accordion-item');
        const $collapse = $item.find('.accordion-collapse');

        const isOpen = $collapse.hasClass('show');

    // close all
    $('.accordion-collapse').removeClass('show');
    $('.accordion-button').removeClass('active');

        // open clicked if it was closed
        if (!isOpen) {
            $collapse.addClass('show');
            $btn.addClass('active');
        }
    });

    // <Section 10>
    $('#client-slider').owlCarousel({
        loop: true,
        margin: 20,
        items: 1,
        dots: false,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000
    });

    // Footer-Bottom-Move-Top
    const moveTop = document.querySelector(".move-top");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            moveTop.classList.add("active");
        } else {
            moveTop.classList.remove("active");
        }
    });

    moveTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Portfolio-pages
    document.addEventListener("DOMContentLoaded", function () {
    const pagination = document.querySelectorAll("#pagination .page-item");

    pagination.forEach(item => {
        item.addEventListener("click", function (e) {
            const link = this.querySelector("a");

            // ignore if it's disabled or already active span
            if (!link) return;

            e.preventDefault();

            // remove active from all
            pagination.forEach(i => i.classList.remove("active"));

            // add active to clicked
            this.classList.add("active");
        });
    });
});
    
});