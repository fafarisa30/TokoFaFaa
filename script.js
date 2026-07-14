const cartButton = document.getElementById('cartButton');
const cartPanel = document.getElementById('cartPanel');
const closeCart = document.getElementById('closeCart');
const cartList = document.getElementById('cartList');
const cartTotal = document.getElementById('cartTotal');
const emptyCart = document.getElementById('emptyCart');
const checkoutBtn = document.getElementById('checkoutBtn');
const paymentPanel = document.getElementById('paymentPanel');
const cartFooter = document.getElementById('cartFooter');
const backToCart = document.getElementById('backToCart');
const confirmPaymentBtn = document.getElementById('confirmPaymentBtn');
const paymentMethod = document.getElementById('paymentMethod');
const payerName = document.getElementById('payerName');
const cardNumber = document.getElementById('cardNumber');
const expiryDate = document.getElementById('expiryDate');
const cvv = document.getElementById('cvv');
const bankFields = document.getElementById('bankFields');
const bankName = document.getElementById('bankName');
const bankAccount = document.getElementById('bankAccount');
const ewalletFields = document.getElementById('ewalletFields');
const ewalletProvider = document.getElementById('ewalletProvider');
const ewalletPhone = document.getElementById('ewalletPhone');
const targetAccountNumber = document.getElementById('targetAccountNumber');
const receiptModal = document.getElementById('receiptModal');
const receiptMethod = document.getElementById('receiptMethod');
const receiptName = document.getElementById('receiptName');
const receiptTarget = document.getElementById('receiptTarget');
const receiptSuccess = document.getElementById('receiptSuccess');
const receiptItems = document.getElementById('receiptItems');
const receiptCount = document.getElementById('receiptCount');
const receiptTotal = document.getElementById('receiptTotal');
const closeReceipt = document.getElementById('closeReceipt');
const downloadReceipt = document.getElementById('downloadReceipt');
const paymentOptions = document.querySelectorAll('.payment-option');
const ewalletOptions = document.querySelectorAll('.ewallet-option');
const helpButton = document.getElementById('helpButton');
const promoButton = document.getElementById('promoButton');
const products = document.querySelectorAll('.product-card');
const cart = [];

function formatRupiah(value) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  }).format(value);
}

function updateCart() {
  cartList.innerHTML = '';
  if (cart.length === 0) {
    cartList.appendChild(emptyCart);
    cartTotal.textContent = formatRupiah(0);
    return;
  }

  let total = 0;
  cart.forEach(item => {
    total += item.price * item.quantity;
    const itemEl = document.createElement('div');
    itemEl.className = 'cart-item';
    itemEl.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <div class="cart-item-info">
        <strong>${item.name}</strong>
        <span>${item.quantity} x ${formatRupiah(item.price)}</span>
      </div>
    `;
    cartList.appendChild(itemEl);
  });

  cartTotal.textContent = formatRupiah(total);
}

function addToCart(product) {
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  updateCart();
  cartPanel.classList.add('active');
}

products.forEach(card => {
  const button = card.querySelector('.add-cart');
  button.addEventListener('click', () => {
    const product = {
      id: card.dataset.id,
      name: card.dataset.name,
      price: Number(card.dataset.price),
      image: card.dataset.image,
    };
    addToCart(product);
  });
});

cartButton.addEventListener('click', () => {
  cartPanel.classList.toggle('active');
});

closeCart.addEventListener('click', () => {
  cartPanel.classList.remove('active');
});

cartPanel.addEventListener('click', event => {
  if (event.target === cartPanel) {
    cartPanel.classList.remove('active');
  }
});

function updatePaymentFields() {
  const method = paymentMethod.value;
  cardNumber.closest('.payment-field').style.display = method === 'card' ? 'grid' : 'none';
  expiryDate.closest('.payment-field').style.display = method === 'card' ? 'grid' : 'none';
  cvv.closest('.payment-field').style.display = method === 'card' ? 'grid' : 'none';
  bankFields.style.display = method === 'bank' ? 'block' : 'none';
  ewalletFields.style.display = method === 'ewallet' ? 'block' : 'none';
  targetAccountNumber.value = method === 'card'
    ? '1234 5678 9012 3456'
    : method === 'bank'
    ? '0987 6543 2100 1234'
    : '0812 3456 7890';
}

paymentOptions.forEach(option => {
  option.addEventListener('click', () => {
    paymentOptions.forEach(item => item.classList.remove('selected'));
    option.classList.add('selected');
    paymentMethod.value = option.dataset.method;
    updatePaymentFields();
  });
});

ewalletOptions.forEach(option => {
  option.addEventListener('click', () => {
    ewalletOptions.forEach(item => item.classList.remove('selected'));
    option.classList.add('selected');
    ewalletProvider.value = option.dataset.ewallet;
  });
});

updatePaymentFields();

checkoutBtn.addEventListener('click', () => {
  if (cart.length === 0) {
    alert('Keranjang masih kosong. Tambahkan paling tidak satu produk.');
    return;
  }
  updatePaymentFields();
  showPaymentPanel();
});

helpButton.addEventListener('click', () => {
  alert('Selamat datang di Toko Fafa!');
});

promoButton.addEventListener('click', scrollToProducts);

backToCart.addEventListener('click', () => {
  hidePaymentPanel();
});

confirmPaymentBtn.addEventListener('click', () => {
  const method = paymentMethod.value;
  if (!payerName.value) {
    alert('Isi nama pemesan terlebih dahulu.');
    return;
  }
  if (method === 'card') {
    if (!cardNumber.value || !expiryDate.value || !cvv.value) {
      alert('Lengkapi semua data kartu untuk melanjutkan.');
      return;
    }
  } else if (method === 'bank') {
    if (!bankName.value || !bankAccount.value) {
      alert('Lengkapi data transfer bank untuk melanjutkan.');
      return;
    }
  } else if (method === 'ewallet') {
    if (!ewalletProvider.value || !ewalletPhone.value) {
      alert('Lengkapi data e-wallet untuk melanjutkan.');
      return;
    }
  }
  const paidMethod = method === 'card' ? 'Kartu Kredit/Debit' : method === 'bank' ? 'Transfer Bank' : 'E-Wallet';
  showReceipt(paidMethod);
  cart.length = 0;
  updateCart();
  hidePaymentPanel();
  cartPanel.classList.remove('active');
  payerName.value = '';
  cardNumber.value = '';
  expiryDate.value = '';
  cvv.value = '';
  bankName.value = '';
  bankAccount.value = '';
  ewalletProvider.value = '';
  ewalletPhone.value = '';
});

function showPaymentPanel() {
  paymentPanel.classList.add('active');
  cartFooter.style.display = 'none';
  emptyCart.style.display = 'none';
}

function showReceipt(method) {
  receiptMethod.textContent = method;
  receiptName.textContent = payerName.value || '-';
  receiptTarget.textContent = targetAccountNumber.value;
  receiptSuccess.classList.remove('animate');
  void receiptSuccess.offsetWidth;
  receiptSuccess.classList.add('animate');
  receiptItems.innerHTML = '';
  let total = 0;
  let count = 0;
  cart.forEach(item => {
    const itemRow = document.createElement('div');
    itemRow.className = 'receipt-item';
    itemRow.innerHTML = `<span>${item.name} x ${item.quantity}</span><strong>${formatRupiah(item.price * item.quantity)}</strong>`;
    receiptItems.appendChild(itemRow);
    total += item.price * item.quantity;
    count += item.quantity;
  });
  receiptCount.textContent = count;
  receiptTotal.textContent = formatRupiah(total);
  receiptModal.classList.add('active');
}

closeReceipt.addEventListener('click', () => {
  receiptModal.classList.remove('active');
});

downloadReceipt.addEventListener('click', () => {
  const receiptText = `Bukti Checkout\n\nNama Pemesan: ${receiptName.textContent}\nMetode Pembayaran: ${receiptMethod.textContent}\nNomor Rekening Tujuan: ${receiptTarget.textContent}\nTotal Item: ${receiptCount.textContent}\nTotal Bayar: ${receiptTotal.textContent}\n\nDetail Pesanan:\n` +
    Array.from(receiptItems.children).map(child => child.textContent).join('\n');
  const blob = new Blob([receiptText], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'bukti-checkout.txt';
  a.click();
  URL.revokeObjectURL(url);
});

function hidePaymentPanel() {
  paymentPanel.classList.remove('active');
  cartFooter.style.display = 'grid';
  updateCart();
}

function scrollToProducts() {
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

updateCart();
