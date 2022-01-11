const $sections = document.querySelectorAll(".section"),
  $links = Array.from(document.querySelectorAll(".link"));

for (let i = 0; i < $links.length; i++) {
  $links[i].dataset.id = `sec-${i + 1}`;
}

const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      location.hash = entry.target.id;
      for (let i = 0; i < $links.length; i++) {
        if ($links[i].dataset.id === entry.target.id) {
          $links[i].classList.add("is-chosen");
        } else {
          $links[i].classList.remove("is-chosen");
        }
      }
    }
  });
};

const options = {
  threshold: 0.5,
};

const observer = new IntersectionObserver(callback, options);
$sections.forEach((el) => {
  observer.observe(el);
});
