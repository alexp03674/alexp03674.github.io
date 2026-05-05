document.addEventListener("DOMContentLoaded", async () => {

  // 1. LOAD NAVBAR
  const navRes = await fetch("navbar.html");
  const navHTML = await navRes.text();
  document.getElementById("navbar-container").innerHTML = navHTML;

const currentPage = window.location.pathname.split("/").pop();

  document.querySelectorAll(".nav-link").forEach(link => {
    const href = link.getAttribute("href");

    if (href === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
  
  // 2. LOAD ARTWORKS (safe fallback)
  let artworks = [];
  try {
    const artRes = await fetch("artworks.json");
    artworks = await artRes.json();
  } catch (err) {
    console.error("artworks.json failed to load", err);
  }

  // 3. RANDOM BUTTON (after navbar exists)
  const randomLink = document.getElementById("random-link");

  if (randomLink) {
    randomLink.addEventListener("click", (e) => {
      e.preventDefault();

      if (!artworks.length) return;

      const random =
        artworks[Math.floor(Math.random() * artworks.length)];

      window.location.href = random.link;
    });
  }

  // 4. GALLERY (ONLY if gallery exists on page)
  const gallery = document.getElementById("gallery");

  if (gallery) {
    const drawings = artworks.filter(a => a.type === "drawing");

drawings.forEach(d => {
  const card = document.createElement("div");
  card.className = "card paintingcard cardtext";

  card.innerHTML = `
    <a href="${d.link}">
      <img src="${d.img}"
      alt="${d.alt || d.title}"
      class="card-img-top-painting card-img-top" 
      loading="lazy">
    </a>
    <div class="card-body">
      <h5 class="card-title">${d.title}</h5>
    </div>
  `;

  gallery.appendChild(card);
});
}

});

