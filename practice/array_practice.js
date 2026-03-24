const tags = ["JavaScript", "HTML", "CSS"];

const hashTags = tags.map((tag) => `#${tag}`);

const taglistEl = document.querySelectorAll(".tag");
taglistElp.innerHTML = "";

tags.map((tag) => {
  const li = document.createElement("li");
  li.textContent = `#${tag}`;
});
