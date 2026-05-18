let monedaActual = 'ARS';
// Swiper para el banner
new Swiper('.home-swiper', {
  loop: true,
  effect: 'fade',
  speed: 1000,
  autoplay: { delay: 3000, disableOnInteraction: false }
});

// 🔥 CONFIG DOLAR
const DOLAR_BLUE = 1410;

function convertirADolar(precioARS) {
  if (precioARS <= 1) return 'Consultar';
  return (precioARS / DOLAR_BLUE).toFixed(2);
}
function formatearPrecio(precioARS) {
  if (precioARS <= 1) return 'Consultar';

  if (monedaActual === 'USD') {
    return `USD $${(precioARS / DOLAR_BLUE).toFixed(2)}`;
  }

  return `ARS $${precioARS.toLocaleString('es-AR')}`;
}
const baseProducts = [
  { name: 'juguete iris', category: 'estimuladores', price: 60000, description: 'Vibrador elegante de superficie lisa, ideal para estimulación interna y externa. Diseño ergonómico pensado para uso preciso y cómodo. ', images: ['assets/prod1-1.webp'] },
  { name: 'juguete chirri 1', category: 'estimuladores', price: 13000, description: 'Compacto y manejable, ofrece vibraciones intensas a buen precio. Perfecto para quienes buscan potencia en formato reducido. ', images: ['assets/prod2-1.webp.jpeg'] },
  { name: 'juguete majo 2', category: 'estimuladores', price: 75000, description: 'Estimulador de clitoris MAJO 2, con acabados pulidos y potencia constante. Diseño atractivo y sensación de calidad. ', images: ['assets/prod3-1.webp.jpeg'] },
  { name: 'juguete chiara ', category: 'estimuladores', price: 55000, description: 'Potente y de tamaño moderado, excelente para uso diario. Silencioso y discreto. ', images: ['assets/prod4-1.webp.jpeg'] },
  { name: 'juguete luxury plug', category: 'estimuladores', price: 49000, description: 'Con este delicado plug anal experimentarás una excitación fantástica. Al introducirlo fácilmente por su punta cónica, suave y sedosa penetrará poco a poco hasta alojarse correctamente. Su base hace que quede anclado perfectamente para un goce tranquilo y estimulante.', images: ['assets/prod5-1.webp.jpeg'] },
  { name: 'juguete cristal ring', category: 'estimuladores', price: 30000, description: 'Anillo vibrador transparente con textura suave. Añade estimulación externa sutil y elegante. ', images: ['assets/prod6-1.webp.jpeg'] },
  { name: 'juguete andy 2', category: 'estimuladores', price: 40000, description: 'Perfil delgado y ligero para uso cómodo. Ideal para principiantes que buscan eficacia sin tamaño excesivo. ', images: ['assets/prod7-1.jpg'] },
  { name: 'juguete eva 2', category: 'estimuladores', price: 55000, description: 'Un perfecto vibrador que puede ser utilizado para masajear las zonas erógenas, recordando a orgasmos adolescentes que proporcionan un placer intenso. El diseño es lo suficientemente curva como para poder llegar perfectamente a rozar el punto G. ', images: ['assets/prod8-1.jpg'] },
  { name: 'Juguete finger 4', category: 'estimuladores', price: 25000, description: 'Estimulador tipo dedo, flexible y preciso. Perfecto para exploración manual añadida. ', images: ['assets/prod9-1.jpeg'] },
  { name: 'Finger Due', category: 'estimuladores', price: 25000, description: 'Versión profesional de finger vibrator con potencia ajustable. Ideal para estimulación localizada. ', images: ['assets/prod10-1.jpg'] },
  { name: 'Juguete gabi 2', category: 'estimuladores', price: 70000, description: 'GABI 2 es ideal para vos! Es un vaginal ondulado de hermoso diseño e intensidad. Su material suave y terso te permite utilizarlo para explorar y recorrer cualquier parte del cuerpo que quieras estimular. ', images: ['assets/prod11-1.jpg'] },
  { name: 'juguete gems 6 black', category: 'estimuladores', price: 32500, description: 'Vibrador estilo fálico. 23 cm INTRODUCIBLE: 20.5 cm x 3.6 cm Textura suave. Vibración multi-speed. Usa 2 AA incluidas medidas aproximadas. Recomendaciones de uso: Limpieza con agua y jabón neutro. Es recomendable el uso de lubricantes al agua con este producto. Guardarlo completamente limpio y seco en contenedores de tela preferentemente ', images: ['assets/prod12-1.jpeg'] },
  { name: 'Juguete love vibes zeline', category: 'estimuladores', price: 60000, description: 'Vibrador de uso dual interno y externo, con curvas suaves. Sensación envolvente y diseño moderno. ', images: ['assets/prod13-1.png'] },
  { name: 'juguete hanna 4', category: 'estimuladores', price: 80500, description: 'Vibrador ergonómico doble estimulación, apoya en clítoris y punto G. Perfectamente cubierto con una suave y sedosa superficie de silicona. Es uno de los juguetes más vendidos para utilizar en pareja y poder divertirse ambos con su uso. Su cómodo diseño permite la penetración perfectamente para estimulación de ambos y llegar al goce pleno. Es el juguete perfecto cuando se desee placer instantáneo. Se inserta fácilmente y una vez puesto, se mantiene mientras juegas para una excitante sesión que podrás llevar a cabo sin manos y usarlas para explorar.  ', images: ['assets/prod14-1.jpeg'] },
  { name: 'juguete katy 6', category: 'estimuladores', price: 39000, description: 'Este juguete es un vaginal corto con curvatura para estimular Punto G, de delicado  diseño e intensa vibración. Fácil control. Mantener pulsado durante 3 segundos para prender y apagar. ', images: ['assets/prod15-1.jpeg'] },
  { name: 'juguete silicone balls', category: 'estimuladores', price: 1, description: 'Fortalecen el tono muscular de la zona pélvica, favorecen la lubricación natural e intensifican la sensibilidad y los orgasmos ', images: ['assets/prod16-1.jpeg'] },
  { name: 'kit vibro + anal plus 2 small ', category: 'estimuladores', price: 40000, description: 'Set doble con vibrador pequeño y plug anal. Versátil y perfecto para experimentación controlada. ', images: ['assets/prod17-1.jpeg'] },
  { name: 'juguete lola 1', category: 'estimuladores', price: 50000, description: 'Vibrador discreto y potente. Su diseño curvo es ideal para estimular la zona del Punto G y su extremo chato lo hace aun mas efectivo. Es un vibrador actual y cuidado al máximo detalle, se adapta perfectamente  al cuerpo mientras se activa el motor de alta tecnología. Su suave  textura  ayuda a estimular la cavidad vaginal eficazmente y tambien es perfecto  para un masaje externo. ', images: ['assets/prod18-1.jpeg'] },
  { name: 'juguete luxury egg 1', category: 'estimuladores', price: 75000, description: 'Bullet vaginal a control remoto perfectamente cubierto con una suave y sedosa superficie de silicona. ', images: ['assets/prod19-1.jpg'] },
  { name: 'juguete miky 1', category: 'estimuladores', price: 54000, description: 'Vibrador de tamaño intermedio y vibración estable. Balance atractivo entre potencia y confort. ', images: ['assets/prod20-1.webp'] },
  { name: 'juguete mini vibro 17', category: 'estimuladores', price: 17000, description: 'Pequeño y portátil, muy fácil de usar. Perfecto para llevar y usar en cualquier momento. ', images: ['assets/prod21-1.jpeg'] },
  { name: 'juguete passion cup', category: 'estimuladores', price: 42000, description: 'Forma de copa para estimulación envolvente interna. Innovador y ergonómico. ', images: ['assets/prod22-1.jpeg'] },
  { name: 'juegos de dados ', category: 'juegos', price: 16000, description: 'DADOS ERÓTICOS Para jugar en pareja. Indican partes del cuerpo y acciones a realizar. Dale un toque especial a tus noches de pasión. ', images: ['assets/prod23-1.jpg'] },
  { name: 'juguete blue rings', category: 'estimuladores', price: 13000, description: 'Anillo vibrador azul de textura suave. Añade intensidad externa con comodidad y ligereza. ', images: ['assets/prod24-1.jpg'] },
  { name: 'juguete take me', category: 'estimuladores', price: 22000, description: 'Estimulador compacto con forma anatómica. Ideal para uso puntual y sencillo. ', images: ['assets/prod25-1.webp'] },
  { name: 'juguete nipple champs 7', category: 'fetish', price: 1, description: 'accesorio para estimulación de pezones con estética atrevida. Para juego sensorial puntual. ', images: ['assets/prod26-1.jpg'] },
  { name: 'Tanga 1', category: 'lenceria', price: 10000, description: 'Diseño minimalista en malla blanca, con una delicada cadenita plateada en cintura lateral que aporta brillo y elegancia. Ajuste intermolecular, elástico y fresco, ideal para lucir sensual y sofisticada ', images: ['assets/prod27-4.jpeg'] },
  { name: 'Tanga 2', category: 'lenceria', price: 10000, description: 'Modelo en color negro de tul translúcido, con detalle de cadena metálica fina en cintura posterior. La combinación genera un look atrevido, moderno y muy coqueto', images: ['assets/prod27-7.jpeg', 'assets/prod27-9.jpeg'] },
  { name: 'Tanga 3', category: 'lenceria', price: 10000, description: 'Prenda en red negra, que incluye esposas integradas, ideal para propuestas BDSM ligeras. Ajuste ergonómico y diseño que fusiona sensualidad y juego en una sola pieza.', images: ['assets/prod27-8.jpeg'] },
  { name: 'Tanga 4', category: 'lenceria', price: 10000, description: 'Diseñada en encaje negro con puntilla delicada, esta tanga tiene abertura frontal y trasera, ofreciendo mayor provocación sin perder elegancia. Tejido elástico con suavidad y acabado refinado, perfecto para lucir sofisticada y atrevida ', images: ['assets/prod27-3.jpeg'] },
  { name: 'Tanga 5', category: 'lenceria', price: 10000, description: 'Clásico diseño en blanco malla semitransparente, con una pequeña cadena metálica en la parte trasera uniendo las tiras. Ajuste cómodo y sensual, ideal para ocasiones especiales o looks sorpresa', images: ['assets/prod27-1.jpeg', 'assets/prod27-2.jpeg'] },
  {
    name: 'juegos de dados con Reloj',
    category: 'juegos',
    price: 5500,
    description: 'DADOS ERÓTICOS para jugar en pareja. Indican posiciones y lugares. Dale un toque especial a tus noches de pasión.',
    images: ['assets/juegos1.jpeg']
  },

  {
    name: 'funda peneana',
    category: 'estimuladores',
    price: 22000,
    description: 'Estimulador compacto con forma anatómica. Ideal para uso puntual y sencillo.',
    images: ['assets/funda peneana.jpeg']
  },


  { name: 'bombas de vacio', category: 'estimuladores', price: 30000, description: 'Bomba de vacío para estimulación masculina. Mejora la erección y la sensibilidad con un uso progresivo.', images: ['assets/bomba vacio.jpeg'] },

  { name: 'SUCCIONADOR ANA 14', category: 'estimuladores', price: 80000, description: 'Succionador de clítoris con vibración, diseño ergonómico y múltiples intensidades para un placer intenso.', images: ['assets/SUCCIONADOR ANA 14.jpeg'] },

  { name: 'Succionador ANA 6', category: 'estimuladores', price: 75000, description: 'Estimulador de clítoris con tecnología de ondas de presión y tamaño compacto. Potente y discreto.', images: ['assets/Succionador ANA 6.jpeg'] },

  { name: 'Vibrador para dedo Finger vibe recargable', category: 'estimuladores', price: 32000, description: 'Mini vibrador que se coloca en el dedo. Perfecto para estimulación precisa en clítoris o zonas erógenas.', images: ['assets/Vibrador para dedo Finger vibe recargable.jpeg'] },

  { name: 'Doble estimulador - KT1474', category: 'estimuladores', price: 65000, description: 'Vibrador doble con estimulación interna y externa simultánea. Diseño versátil y recargable.', images: ['assets/Doble estimulador - KT1474.jpeg'] },

  { name: 'Rabbit 2', category: 'estimuladores', price: 80000, description: 'Vibrador Rabbit con doble motor para estimulación vaginal y clitoriana al mismo tiempo.', images: ['assets/Rabbit 2.jpeg'] },

  { name: 'POWER BEAD', category: 'estimuladores', price: 25000, description: 'Plug anal con diseño de cuentas progresivas. Flexible, suave y perfecto para principiantes o avanzados.', images: ['assets/POWER BEADS.jpeg'] },

  { name: 'SILICONA PLAYTAIL FOX', category: 'estimuladores', price: 36000, description: 'Plug anal de silicona con cola estilo zorro. Divertido y sensual para juegos de rol.', images: ['assets/SILICONA PLAYTAIL FOX.jpeg'] },

  { name: 'Estimulador anal SILICONE BLUE', category: 'estimuladores', price: 15000, description: 'Estimulador anal de silicona suave y flexible, fácil de usar y limpiar.', images: ['assets/Estimulador anal SILICONE BLUE.jpeg'] },

  { name: 'Silicone Plug anal blue SMALL,Medium,LARGE', category: 'estimuladores', price: 25000, description: 'Juego de plugs anales en tres tamaños. Material de silicona segura y diseño cómodo.', images: ['assets/Silicone Plug anal blue SMALL,Medium,LARGE.jpeg'] },

  { name: 'Plug anal red SMALL,Medium,LARGE', category: 'estimuladores', price: 25000, description: 'Set de plugs anales metálicos con joya decorativa en varios tamaños.', images: ['assets/Plug anal red SMALL,Medium,LARGE.jpeg'] },

  { name: 'REAL COCK 17', category: 'estimuladores', price: 50000, description: 'Dildo realista de gran tamaño con detalles muy logrados para una experiencia intensa.', images: ['assets/REAL COCK 17.jpeg'] },

  { name: 'huevos masturbadores masculinos', category: 'estimuladores', price: 15000, description: 'Masturbadores compactos, desechables y con texturas internas variadas. Fáciles de usar y discretos.', images: ['assets/huevos masturbadores masculinos.jpeg'] },

  { name: 'Kit bondage de 7 piezas', category: 'fetish', price: 80000, description: 'Incluye: Collar ajustable, correa, muñequeras y tobilleras regulables, látigo, antifaz, sogas y vibrador a pila (no incluida).', images: ['assets/Kit bondage de 7 piezas.jpeg'] },

  { name: 'Fusta', category: 'fetish', price: 10000, description: 'Fusta clásica para juegos de dominación. Flexible, resistente y fácil de usar.', images: ['assets/fetiche1.jpeg'] },

  { name: 'Fusta Corazon Rojo', category: 'fetish', price: 15000, description: 'Fusta con terminación en forma de corazón rojo. Ideal para juegos sensuales y divertidos.', images: ['assets/fetiche2.jpg'] },

  { name: 'Esposas con Peluche', category: 'fetish', price: 15000, description: 'Esposas metálicas recubiertas en peluche suave. Ajustables y cómodas para juegos de rol.', images: ['assets/fetiche3.jpeg'] },

  { name: 'Conjunto Rojo con Tiras', category: 'lenceria', price: 40000, description: 'Conjunto de lencería en tul rojo transparente con detalles de tiras ajustables y diseño atrevido. Ideal para resaltar la sensualidad con un toque provocador.', images: ['assets/Conjunto por pedido hecho a medida personalizado 2.jpeg'] },

  { name: 'Conjunto Bordó Encaje', category: 'lenceria', price: 30000, description: 'Conjunto de lencería en encaje bordó con delicados acabados y diseño romántico. Perfecto para un look elegante, femenino y sofisticado.', images: ['assets/Conjunto por pedido hecho a medida personalizado.jpeg'] },

  { name: 'Muñeco Silicona Alexander', category: 'juegos', price: 3200000, description: 'Muñeco de silicona realista con detalles anatómicos. Ideal para experiencias íntimas y realistas.', images: ['assets/alexander.jpeg'] },
  { name: 'Muñeco Silicona Cintia', category: 'juegos', price: 2800000, description: 'Muñeca de silicona con diseño femenino detallado y realista. Perfecta para acompañar tus fantasías.', images: ['assets/cintia.jpeg'] },
  { name: 'Muñeco Silicona Rocio', category: 'juegos', price: 3000000, description: 'Muñeca de silicona de alta calidad, tamaño real y textura suave para una experiencia natural.', images: ['assets/rocio.jpeg'] },
  { name: 'Muñeco Silicona Carla', category: 'juegos', price: 2400000, description: 'Muñeca de silicona con diseño voluptuoso y realista. Resistente y fácil de mantener.', images: ['assets/carla.jpeg'] },
  { name: 'Muñeco Silicona Sonia', category: 'juegos', price: 3000000, description: 'Muñeca de silicona con rasgos realistas y acabados de calidad. Ideal para experiencias íntimas completas.', images: ['assets/sonia.jpeg'] },
  { name: 'Muñeco Silicona Lucia', category: 'juegos', price: 2400000, description: 'Muñeca de silicona de cuerpo realista y gran detalle anatómico. Perfecta para acompañar tus momentos de placer.', images: ['assets/lucia.jpeg'] },

];

let products = [];

function normalizeProducts(list) {
  return Array.isArray(list) ? list.filter(Boolean).map((product, index) => ({
    id: product.id || `producto_${index}_${Date.now()}`,
    name: String(product.name || '').trim(),
    category: ['estimuladores', 'fetish', 'juegos', 'lenceria'].includes(product.category) ? product.category : 'estimuladores',
    price: Number(product.price) || 1,
    description: String(product.description || '').trim(),
    images: Array.isArray(product.images) && product.images.length ? product.images : ['assets/popup.png'],
    visible: product.visible !== false
  })).filter(product => product.name && product.visible) : [];
}

async function loadProductsFromApi() {
  try {
    const response = await fetch('/api/products');
    if (!response.ok) throw new Error('No se pudo leer el catálogo');
    products = normalizeProducts(await response.json());
  } catch (error) {
    console.warn('No se pudieron cargar productos desde la API. Se usa catálogo base.', error);
    products = normalizeProducts(baseProducts);
  }
}

async function initCatalog() {
  await loadProductsFromApi();
  renderProductsGrid();
  updateCartCount();
  renderCart();
}

function escapeAttr(value) {
  return String(value || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

document.addEventListener("DOMContentLoaded", () => {
  const closeBtn = document.getElementById('close-popup');
  const popup = document.getElementById('popup');

  // Cerrar pop-up al hacer clic en el botón
  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  // Cerrar pop-up al hacer clic fuera del contenido
  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.style.display = 'none';
    }
  });

  // El pop-up se muestra automáticamente al cargar la página
  popup.style.display = 'flex';
  const currencyToggle = document.getElementById('currencyToggle');

if (currencyToggle) {
  currencyToggle.addEventListener('change', () => {
    monedaActual = currencyToggle.checked ? 'USD' : 'ARS';

    renderCart(); // actualiza carrito
  });
}
});

// Renderizado productos con swiper individual
function renderProductsGrid() {
  const categoryContainers = document.querySelectorAll('.catalog-category');
  categoryContainers.forEach(container => container.innerHTML = '');

  products.forEach((product, index) => {
    const container = document.getElementById(`cat-${product.category}`);
    if (!container) return;

    const col = document.createElement('div');
    col.className = 'col-6 col-md-4 col-lg-2 mb-4';
    const swiperId = `swiperProduct${index}`;
    const safeName = escapeAttr(product.name);
    const safeImages = (product.images || []).map(img => `<div class="swiper-slide"><img src="${escapeAttr(img)}" alt="${safeName}"></div>`).join('');

    col.innerHTML = `
      <div class="product-card">
        <div class="swiper ${swiperId}">
          <div class="swiper-wrapper">
            ${safeImages}
          </div>
        </div>
        <h5 class="mt-2">${safeName}</h5>
        <button class="btn btn-outline-pink w-100 mt-2" onclick="addProductToCartByIndex(${index})">
          <i class="fas fa-plus"></i> Añadir
        </button>
        <button class="btn btn-outline-light w-100 mt-2" onclick="openProductModal(${index})">Ver más</button>
      </div>
    `;
    container.appendChild(col);

    const swiper = new Swiper(`.${swiperId}`, {
      loop: true,
      effect: 'fade',
      speed: 600,
      autoplay: { delay: 500, disableOnInteraction: false }
    });

    const swiperEl = col.querySelector(`.${swiperId}`);
    swiperEl.addEventListener('mouseenter', () => swiper.autoplay.start());
    swiperEl.addEventListener('mouseleave', () => swiper.autoplay.stop());
  });
}

initCatalog();

function addProductToCartByIndex(index) {
  const product = products[index];
  if (!product) return;
  addToCart(product.name, 1);
  renderCart();
}

// Modal producto
let modalSlideshowInterval;
function openProductModal(index) {
  const product = products[index];
  document.getElementById('productModalLabel').textContent = product.name;
  document.getElementById('productModalDescription').textContent = product.description;

  document.getElementById('productModalPrice').textContent =
  formatearPrecio(product.price);

  const modalImage = document.getElementById('productModalImage');

  const buyBtn = document.getElementById('productModalBuyBtn');
  buyBtn.onclick = () => window.location.href =
    `https://wa.me/5491168240340?text=Quiero comprar ${encodeURIComponent(product.name)}`;

let currentImage = 0;

if (product.images && product.images.length > 0) {
  modalImage.src = product.images[currentImage];
} else {
  modalImage.src = ''; // o imagen placeholder si querés
}
modalImage.alt = product.name;
  if (modalSlideshowInterval) clearInterval(modalSlideshowInterval);
  if (product.images && product.images.length > 1) {
    modalSlideshowInterval = setInterval(() => {
      currentImage = (currentImage + 1) % product.images.length;
      modalImage.src = product.images[currentImage];
    }, 2000);
  }

  const myModal = new bootstrap.Modal(document.getElementById('productModal'));
  myModal.show();

  document.getElementById('productModal').addEventListener('hidden.bs.modal', () => clearInterval(modalSlideshowInterval), { once: true });
}

// Mostrar catálogo por categoría
document.querySelectorAll('.category-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.getAttribute('data-category');
    document.querySelectorAll('.catalog-category').forEach(div => div.style.display = 'none');
    document.getElementById(`cat-${category}`).style.display = 'flex';
  });
});

function addToCart(productName, quantity = 1) {
  const cart = JSON.parse(localStorage.getItem('cart')) || {};
  cart[productName] = (cart[productName] || 0) + quantity;
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
  updateCartCount(); // ⬅️ agregamos esto
}


function removeFromCart(productName) {
  const cart = JSON.parse(localStorage.getItem('cart')) || {};
  if (cart[productName]) {
    cart[productName]--;
    if (cart[productName] <= 0) delete cart[productName];
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
    updateCartCount(); // ⬅️ agregar
  }
}

function deleteFromCart(productName) {
  const cart = JSON.parse(localStorage.getItem('cart')) || {};
  delete cart[productName];
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
  updateCartCount(); // ⬅️ agregar
}



function renderCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || {};
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';

  let sumPrice = 0;

  for (const [name, quantity] of Object.entries(cart)) {
    const product = products.find(p => p.name === name);
    const price = product?.price || 0;

    let subtotalTexto = '';
let subtotalNumerico = 0;

if (price <= 1) {
  subtotalTexto = 'Consultar';
} else if (monedaActual === 'USD') {
  subtotalNumerico = (price * quantity) / DOLAR_BLUE;
  subtotalTexto = `USD $${subtotalNumerico.toFixed(2)}`;
  sumPrice += subtotalNumerico;
} else {
  subtotalNumerico = price * quantity;
  subtotalTexto = `ARS $${subtotalNumerico.toLocaleString('es-AR')}`;
  sumPrice += subtotalNumerico;
}

    const li = document.createElement('li');
    li.className = 'list-group-item bg-dark d-flex justify-content-between align-items-center';

    li.innerHTML = `
      <span>${name} × ${quantity} — ${subtotalTexto}</span>
      <div>
        <button class="btn btn-sm btn-outline-light me-1" onclick="addToCart('${name}')">+</button>
        <button class="btn btn-sm btn-outline-light me-1" onclick="removeFromCart('${name}')">−</button>
        <button class="btn btn-sm btn-outline-danger" onclick="deleteFromCart('${name}')">x</button>
      </div>
    `;

    cartItems.appendChild(li);
  }

  document.getElementById('cart-total').textContent =
  monedaActual === 'USD'
    ? `USD $${sumPrice.toFixed(2)}`
    : `ARS $${sumPrice.toLocaleString('es-AR')}`;
}

function sendCartToWhatsApp() {
  const cart = JSON.parse(localStorage.getItem('cart')) || {};
  if (Object.keys(cart).length === 0) return alert('Tu carrito está vacío');

  let message = 'Hola! Quiero comprar los siguientes productos:\n\n';
  let sum = 0;

  for (const [name, quantity] of Object.entries(cart)) {
    const product = products.find(p => p.name === name);
    const price = product?.price || 0;

   let subtotalTexto = '';

if (price <= 1) {
  subtotalTexto = 'Consultar';
} else if (monedaActual === 'USD') {
  const subtotalUSD = (price * quantity) / DOLAR_BLUE;
  subtotalTexto = `USD $${subtotalUSD.toFixed(2)}`;
  sum += subtotalUSD;
} else {
  const subtotalARS = price * quantity;
  subtotalTexto = `ARS $${subtotalARS.toLocaleString('es-AR')}`;
  sum += subtotalARS;
}

message += `• ${name} x${quantity} - ${subtotalTexto}\n`;
  }

 message += `\nTotal: ${
  monedaActual === 'USD'
    ? `USD $${sum.toFixed(2)}`
    : `ARS $${sum.toLocaleString('es-AR')}`
}`;

  const url = `https://wa.me/5491168240340?text=${encodeURIComponent(message)}`;
  localStorage.removeItem('cart');
  window.location.href = url;
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || {};
  let totalItems = 0;
  for (const productName in cart) {
    const quantity = typeof cart[productName] === 'object' ? cart[productName].quantity : cart[productName];
    totalItems += quantity;
  }
  const cartCountElement = document.getElementById('cartCount');
  if (cartCountElement) {
    cartCountElement.textContent = totalItems;
  }
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  renderCart();
});

document.getElementById('searchInput').addEventListener('input', function () {
  const term = this.value.toLowerCase();
  let visibleCount = 0;

  document.querySelectorAll('.product-card').forEach(card => {
    const name = card.querySelector('h5')?.textContent.toLowerCase();
    const isVisible = name.includes(term);
    card.style.display = isVisible ? 'block' : 'none';
    if (isVisible) visibleCount++;
  });

  const noResultsMsg = document.getElementById('noResultsMsg');
  if (noResultsMsg) noResultsMsg.style.display = visibleCount === 0 ? 'block' : 'none';
});





window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;       // cuánto bajó el scroll
  const height = document.body.scrollHeight - window.innerHeight;  // total scroll posible
  const scrollPercent = scrollY / height;

  if (scrollPercent < 0.25) {
    document.body.style.backgroundColor = '#000000';  // Primer tramo
  } else if (scrollPercent < 0.5) {
    document.body.style.backgroundColor = '#6B1524';  // Segundo tramo
  } else if (scrollPercent < 0.75) {
    document.body.style.backgroundColor = '#930022';  // Tercer tramo (ejemplo)
  } else {
    document.body.style.backgroundColor = '#441120';  // Último tramo
  }
});


