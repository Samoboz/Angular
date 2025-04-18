export function createArticle(artikel) {
  const artikel1 = document.createElement("article");

  artikel1.innerHTML = `	<h2>${artikel.title}</h2>
	<p><b>${artikel.date}</b> von ${artikel.author}</p>
	<p>${artikel.intro}</p>
  <p>${artikel.content}</p>
<p>
  ${artikel.tags
    .map(
      (tag) =>
        `<span class="badge rounded-pill text-bg-primary me-1">${tag}</span>`
    )
    .join("")}
</p>
<br />
    <div>
      <a title="Facebook" href="https://www.facebook.com/share.php?u=https%3A%2F%2Fmyblog.local%2Fartikelurl" target="_blank">Teilen auf Facebook</a> |
      <a title="Twitter" href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmyblog.local%2Fartikelurl&text=${encodeURIComponent(
        artikel.title
      )}&via=myblog&lang=de" target="_blank">Twittern</a> |
      <a href="teilenEmail.html">Teilen via E-Mail</a>
    </div>
`;

  return artikel1;
}
