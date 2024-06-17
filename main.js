document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".search-bar input");
  searchInput.addEventListener("input", (e) => {
    // Handle search functionality
    const query = e.target.value.toLowerCase();
    // Logic to filter and display search results
  });

  // Load categories dynamically
  const categories = [
    { title: "Trending Now", items: ["item1.jpg", "item2.jpg", "item3.jpg"] },
    {
      title: "Popular on Netflix",
      items: ["item4.jpg", "item5.jpg", "item6.jpg"],
    },
  ];

  const categoriesContainer = document.querySelector(".categories");
  categories.forEach((category) => {
    const categoryElement = document.createElement("div");
    categoryElement.classList.add("category");

    const categoryTitle = document.createElement("h2");
    categoryTitle.textContent = category.title;

    const thumbnailsContainer = document.createElement("div");
    thumbnailsContainer.classList.add("thumbnails");

    category.items.forEach((item) => {
      const thumbnail = document.createElement("img");
      thumbnail.src = `images/${item}`;
      thumbnailsContainer.appendChild(thumbnail);
    });

    categoryElement.appendChild(categoryTitle);
    categoryElement.appendChild(thumbnailsContainer);
    categoriesContainer.appendChild(categoryElement);
  });
});
