(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Sticky nav border on scroll
  const nav = document.querySelector(".nav");
  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile menu
  const toggle = document.querySelector(".nav__toggle");
  const menu = document.getElementById("mobile-menu");
  const setMenu = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    menu.hidden = !open;
  };
  toggle.addEventListener("click", () => setMenu(menu.hidden));
  menu.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });

  // Typed AI response in the hero console
  const typed = document.querySelector(".msg__typed");
  const cites = document.querySelector(".cites");
  const text = typed.dataset.text;
  const render = (s) => s.replace(/\[(\d)\]/g, '<sup class="ref">[$1]</sup>');

  if (reduceMotion) {
    typed.innerHTML = render(text);
    cites.hidden = false;
  } else {
    let i = 0;
    const tick = () => {
      i += 1 + Math.floor(Math.random() * 2);
      typed.innerHTML = render(text.slice(0, i)) + '<span class="caret"></span>';
      if (i < text.length) {
        setTimeout(tick, 18 + Math.random() * 30);
      } else {
        typed.innerHTML = render(text);
        cites.hidden = false;
      }
    };
    setTimeout(tick, 700);
  }

  // Reveal on scroll
  const revealTargets = document.querySelectorAll(".section__head, .card, .chart, .code, .dev__copy, .plan, .faq__list");
  revealTargets.forEach((el) => el.classList.add("reveal"));
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealTargets.forEach((el) => io.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add("is-visible"));
  }

  // Code tabs
  const tabs = document.querySelectorAll(".code__tabs [role=tab]");
  const panels = document.querySelectorAll(".code pre");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.setAttribute("aria-selected", String(t === tab)));
      panels.forEach((p) => { p.hidden = p.dataset.panel !== tab.dataset.tab; });
    });
  });

  // Copy code
  const copyBtn = document.querySelector(".code__copy");
  copyBtn.addEventListener("click", async () => {
    const visible = [...panels].find((p) => !p.hidden);
    try {
      await navigator.clipboard.writeText(visible.innerText);
      copyBtn.textContent = "Copied";
    } catch {
      copyBtn.textContent = "Press ⌘C";
    }
    setTimeout(() => { copyBtn.textContent = "Copy"; }, 1600);
  });

  // Signup form
  const form = document.querySelector(".cta__form");
  const email = document.getElementById("email");
  const msg = document.querySelector(".cta__msg");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
    email.setAttribute("aria-invalid", String(!ok));
    msg.classList.toggle("is-error", !ok);
    msg.textContent = ok
      ? "You're on the list — check your inbox for your API key."
      : "Please enter a valid work email.";
    if (ok) form.reset();
  });

  document.getElementById("year").textContent = new Date().getFullYear();
})();
