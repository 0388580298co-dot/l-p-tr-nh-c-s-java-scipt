const productGrid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const categoryTabs = document.getElementById('categoryTabs');
const emptyMessage = document.getElementById('emptyMessage');

let selectedCategory = 'all';

function initCategories() {
  const categories = [...new Set(products.map(product => product.category))];
  categories.forEach(category => {
    categoryFilter.insertAdjacentHTML('beforeend', `<option value="${category}">${category}</option>`);
  });
  categoryTabs.innerHTML = ['all', ...categories].map(category =>
    `<button class="tab ${category === 'all' ? 'active' : ''}" data-category="${category}">${category === 'all' ? 'Tất cả' : category}</button>`
  ).join('');

  categoryTabs.addEventListener('click', event => {
    const button = event.target.closest('.tab');
    if (!button) return;
    selectedCategory = button.dataset.category;
    categoryFilter.value = selectedCategory;
    document.querySelectorAll('.tab').forEach(tab => tab.classList.toggle('active', tab === button));
    renderProducts();
  });
}

function getFilteredProducts() {
  const keyword = searchInput.value.trim().toLowerCase();
  return products.filter(product => {
    const matchCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchSearch = product.name.toLowerCase().includes(keyword);
    return matchCategory && matchSearch;
  });
}

function renderProducts() {
  const list = getFilteredProducts();
  productGrid.innerHTML = list.map(product => `
    <article class="product-card">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <span class="badge ${product.group}">${groupLabels[product.group]}</span>
      </div>
      <div class="product-info">
        <small>${product.category}</small>
        <h3>${product.name}</h3>
        <div class="price"><strong>${formatPrice(product.price)}</strong> <del>${formatPrice(product.oldPrice)}</del></div>
        <button class="add-btn" data-id="${product.id}">+ Thêm vào giỏ</button>
      </div>
    </article>
  `).join('');
  emptyMessage.classList.toggle('hidden', list.length > 0);

  document.querySelectorAll('.add-btn').forEach(button => {
    button.addEventListener('click', () => addToCart(Number(button.dataset.id)));
  });
}

searchInput.addEventListener('input', renderProducts);
categoryFilter.addEventListener('change', event => {
  selectedCategory = event.target.value;
  document.querySelectorAll('.tab').forEach(tab => tab.classList.toggle('active', tab.dataset.category === selectedCategory));
  renderProducts();
});

initCategories();
renderProducts();
