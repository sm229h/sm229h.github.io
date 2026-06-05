document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // Navbar Scroll Effect
    // ==========================================
    const navbar = document.getElementById('navbar');
    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // ==========================================
    // Mobile Navigation
    // ==========================================
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    let overlay = null;

    const createOverlay = () => {
        overlay = document.createElement('div');
        overlay.className = 'nav-overlay';
        document.body.appendChild(overlay);
        overlay.addEventListener('click', closeNav);
    };

    const openNav = () => {
        navToggle.classList.add('active');
        navLinks.classList.add('active');
        if (!overlay) createOverlay();
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeNav = () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    navToggle.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            closeNav();
        } else {
            openNav();
        }
    });

    // Close nav on link click
    navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', closeNav);
    });

    // ==========================================
    // Active Nav Link on Scroll
    // ==========================================
    const sections = document.querySelectorAll('section[id]');
    const navLinksAll = document.querySelectorAll('.nav-link');

    const updateActiveNav = () => {
        const scrollY = window.scrollY + 150;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinksAll.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    window.addEventListener('scroll', updateActiveNav);

    // ==========================================
    // Back to Top Button
    // ==========================================
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ==========================================
    // Scroll Animations (Intersection Observer)
    // ==========================================
    const animateElements = () => {
        // Add animation classes to elements
        const selectors = [
            '.about-card',
            '.service-card',
            '.principle',
            '.team-card',
            '.pub-card',
            '.process-step',
            '.contact-item',
            '.contact-form-wrapper',
            '.approach-visual'
        ];

        selectors.forEach(selector => {
            document.querySelectorAll(selector).forEach((el, i) => {
                el.classList.add('fade-in');
                el.style.transitionDelay = `${i * 0.1}s`;
            });
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        document.querySelectorAll('.fade-in, .fade-in-right, .fade-in-left').forEach(el => {
            observer.observe(el);
        });
    };

    animateElements();

    // ==========================================
    // Counter Animation
    // ==========================================
    const counters = document.querySelectorAll('.stat-number');

    const toPersianDigits = (num) => {
        const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        return num.toString().replace(/\d/g, d => persianDigits[d]);
    };

    const animateCounter = (el) => {
        const target = parseInt(el.getAttribute('data-target'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += step;
            if (current < target) {
                el.textContent = toPersianDigits(Math.floor(current));
                requestAnimationFrame(updateCounter);
            } else {
                el.textContent = toPersianDigits(target);
            }
        };

        updateCounter();
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));

    // ==========================================
    // Smooth Scroll for Anchor Links
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ==========================================
    // Contact Form Handling
    // ==========================================
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Validate
        if (!data.name || !data.phone || !data.service) {
            alert('لطفاً فیلدهای ضروری را پر کنید.');
            return;
        }

        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> در حال ارسال...';
        submitBtn.disabled = true;

        setTimeout(() => {
            contactForm.innerHTML = `
                <div class="form-success show">
                    <i class="fas fa-check-circle"></i>
                    <h3>درخواست شما با موفقیت ارسال شد</h3>
                    <p>کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت.</p>
                </div>
            `;
        }, 1500);
    });

    // ==========================================
    // Service Cards Hover Tilt Effect
    // ==========================================
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });

    // ==========================================
    // Parallax Effect for Hero Shapes
    // ==========================================
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const shapes = document.querySelectorAll('.hero-shapes .shape');

        shapes.forEach((shape, i) => {
            const speed = (i + 1) * 0.15;
            shape.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // ==========================================
    // Keyboard Navigation
    // ==========================================
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeNav();
        }
    });

});
