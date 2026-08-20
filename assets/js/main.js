/* ============================================================
   CoFlex-VTLA — Main JavaScript
   Handles: sticky header, mobile nav, bibtex copy
   ============================================================ */

(function () {
  "use strict";

  // --- Sticky header on scroll ---
  const header = document.getElementById("site-header");
  function onScroll() {
    header.classList.toggle("scrolled", window.scrollY > 60);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // --- Mobile nav toggle ---
  const toggle = document.getElementById("nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (toggle && navLinks) {
    toggle.addEventListener("click", function () {
      const open = navLinks.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open);
    });
    // Close menu when a link is clicked
    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // --- Copy BibTeX ---
  const copyBtn = document.getElementById("copy-bibtex");
  const bibtex = document.getElementById("bibtex");
  if (copyBtn && bibtex) {
    copyBtn.addEventListener("click", function () {
      navigator.clipboard.writeText(bibtex.textContent).then(function () {
        const span = copyBtn.querySelector("span");
        const original = span.textContent;
        span.textContent = "Copied!";
        copyBtn.classList.add("copied");
        setTimeout(function () {
          span.textContent = original;
          copyBtn.classList.remove("copied");
        }, 2000);
      });
    });
  }
})();
