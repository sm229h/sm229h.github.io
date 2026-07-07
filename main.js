// وضعیت سبد خرید (در حافظه‌ی مرورگر برای این نسخه‌ی دمو)
let CART = window.__blueShopCart || {};
window.__blueShopCart = CART;

function addToCart(id, qty = 1){
  CART[id] = (CART[id] || 0) + qty;
  updateCartCount();
  showToast('به سبد خرید اضافه شد');
}

function removeFromCart(id){
  delete CART[id];
  updateCartCount();
  if (typeof renderCartPage === 'function') renderCartPage();
}

function setQty(id, qty){
  if (qty <= 0){ removeFromCart(id); return; }
  CART[id] = qty;
  updateCartCount();
  if (typeof renderCartPage === 'function') renderCartPage();
}

function cartCount(){
  return Object.values(CART).reduce((a,b)=>a+b, 0);
}

function updateCartCount(){
  document.querySelectorAll('.cart-count').forEach(el => {
    const n = cartCount();
    el.textContent = n;
    el.style.display = n > 0 ? 'flex' : 'none';
  });
}

let toastTimer;
function showToast(msg){
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.querySelector('span').textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

function renderStars(rating){
  const full = Math.round(rating);
  let html = '';
  for (let i = 0; i < 5; i++){
    html += `<i class="fa-star ${i < full ? 'fas' : 'far'}"></i>`;
  }
  return html;
}

function productCardHTML(p){
  const discount = p.oldPrice ? Math.round(100 - (p.price / p.oldPrice) * 100) : null;
  return `
  <div class="product-card">
    <a class="product-media" href="product.html?id=${p.id}">
      ${discount ? `<span class="tag-fold">${discount}%-</span>` : ''}
      <img src="${p.image}" alt="${p.title}" loading="lazy">
    </a>
    <button class="wish-btn" aria-label="افزودن به علاقه‌مندی"><i class="far fa-heart"></i></button>
    <div class="product-body">
      <span class="product-cat">${p.category}</span>
      <a href="product.html?id=${p.id}" class="product-title">${p.title}</a>
      <div class="rating">${renderStars(p.rating)} <span>(${p.reviews})</span></div>
      <div class="price-row">
        ${p.oldPrice ? `<span class="price-old">${formatPrice(p.oldPrice)}</span>` : ''}
        <span class="price-new">${formatPrice(p.price)}</span>
      </div>
      <button class="add-btn" onclick="addToCart(${p.id});event.stopPropagation();">
        <i class="fas fa-cart-plus"></i> افزودن به سبد
      </button>
    </div>
  </div>`;
}

function getQueryId(){
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get('id'), 10);
}

document.addEventListener('DOMContentLoaded', updateCartCount);
