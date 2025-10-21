const wikiData = window.wikiData

let currentCategory = "all"
let searchQuery = ""
let currentArticleId = null

const searchInput = document.getElementById("searchInput")
const categoryBtns = document.querySelectorAll(".category-btn")
const articlesList = document.getElementById("articlesList")
const articleDetail = document.getElementById("articleDetail")
const articleContent = document.getElementById("articleContent")
const backBtn = document.getElementById("backBtn")

searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value.toLowerCase()
  renderArticles()
})

categoryBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    categoryBtns.forEach((b) => b.classList.remove("active"))
    btn.classList.add("active")
    currentCategory = btn.dataset.category
    renderArticles()
  })
})

backBtn.addEventListener("click", () => {
  currentArticleId = null
  articlesList.style.display = "grid"
  articleDetail.style.display = "none"
})

function getFilteredArticles() {
  return wikiData.articles.filter((article) => {
    const matchesCategory = currentCategory === "all" || article.category === currentCategory
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery) ||
      article.description.toLowerCase().includes(searchQuery) ||
      article.sections.some(
        (section) =>
          section.title.toLowerCase().includes(searchQuery) || section.content.toLowerCase().includes(searchQuery),
      )
    return matchesCategory && matchesSearch
  })
}

function renderArticles() {
  const filtered = getFilteredArticles()

  if (filtered.length === 0) {
    articlesList.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🔍</div>
                <div class="empty-state-title">No se encontraron resultados</div>
                <p>Intenta con otros términos de búsqueda o categoría</p>
            </div>
        `
    return
  }

  articlesList.innerHTML = filtered
    .map(
      (article) => `
        <div class="article-card" onclick="showArticle('${article.id}')">
            <div class="article-card-category">${getCategoryName(article.category)}</div>
            <h3 class="article-card-title">${article.title}</h3>
            <p class="article-card-description">${article.description}</p>
            <div class="article-card-footer">
                <span class="read-more">Leer más</span>
            </div>
        </div>
    `,
    )
    .join("")
}

function showArticle(articleId) {
  const article = wikiData.articles.find((a) => a.id === articleId)
  if (!article) return

  currentArticleId = articleId

  let html = `
        <h1>${article.title}</h1>
        <div class="article-description">${article.description}</div>
    `

  article.sections.forEach((section) => {
    html += `
            <h2>${section.title}</h2>
            <p>${section.content}</p>
        `
  })

  if (article.keyPoints && article.keyPoints.length > 0) {
    html += `
            <div class="key-points">
                <h3>Puntos Clave</h3>
                <ul>
                    ${article.keyPoints.map((point) => `<li>${point}</li>`).join("")}
                </ul>
            </div>
        `
  }

  articleContent.innerHTML = html
  articlesList.style.display = "none"
  articleDetail.style.display = "block"
  window.scrollTo(0, 0)
}

function getCategoryName(categoryId) {
  const category = wikiData.categories.find((c) => c.id === categoryId)
  return category ? category.name : categoryId
}

renderArticles()
