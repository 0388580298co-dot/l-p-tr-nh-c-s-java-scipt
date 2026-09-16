let cart = JSON.parse(localStorage.getItem('freshmart-cart')) || [];

const cartButton = document.getElementById('cartButton');
const cartModal = document.getElementById('cartModal');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.getElementById('cartCount');
const checkoutButton = document.getElementById('checkoutButton');

function saveCart() {
  localStorage.setItem('freshmart-cart', JSON.stringify(cart));
}

function addToCart(productId) {
  const existing = cart.find(item => item.id === productId);
  if (existing) existing.quantity += 1;
  else cart.push({ id: productId, quantity: 1 });
  saveCart();
  updateCartUI();
  alert('Đã thêm sản phẩm vào giỏ hàng!');
}

function changeQuantity(productId, delta) {
  const item = cart.find(product => product.id === productId);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) cart = cart.filter(product => product.id !== productId);
  saveCart();
  updateCartUI();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartUI();
}

function updateCartUI() {
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalQuantity;

  if (!cart.length) {
    cartItems.innerHTML = '<p class="empty-cart">Giỏ hàng đang trống.</p>';
    cartTotal.textContent = formatPrice(0);
    return;
  }

  let total = 0;
  cartItems.innerHTML = cart.map(item => {
    const product = products.find(p => p.id === item.id);
    if (!product) return '';
    total += product.price * item.quantity;
    return `<div class="cart-item">
      <img src="${product.image}" alt="${product.name}">
      <div class="cart-item-info"><strong>${product.name}</strong><span>${formatPrice(product.price)}</span></div>
      <div class="quantity"><button data-action="minus" data-id="${product.id}">−</button><b>${item.quantity}</b><button data-action="plus" data-id="${product.id}">+</button></div>
      <button class="remove" data-action="remove" data-id="${product.id}">Xóa</button>
    </div>`;
  }).join('');

  cartTotal.textContent = formatPrice(total);
}

cartItems.addEventListener('click', event => {
  const button = event.target.closest('[data-action]');
  if (!button) return;
  const id = Number(button.dataset.id);
  if (button.dataset.action === 'plus') changeQuantity(id, 1);
  if (button.dataset.action === 'minus') changeQuantity(id, -1);
  if (button.dataset.action === 'remove') removeFromCart(id);
});

cartButton.addEventListener('click', () => { cartModal.classList.remove('hidden'); updateCartUI(); });
closeCart.addEventListener('click', () => cartModal.classList.add('hidden'));
cartModal.addEventListener('click', event => { if (event.target === cartModal) cartModal.classList.add('hidden'); });
checkoutButton.addEventListener('click', () => {
  if (!cart.length) return alert('Giỏ hàng đang trống.');
  alert('Đặt hàng thành công! Đây là bản demo JavaScript.');
  cart = [];
  saveCart();
  updateCartUI();
  cartModal.classList.add('hidden');
});

updateCartUI();
