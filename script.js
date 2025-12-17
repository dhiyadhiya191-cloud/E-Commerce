const products = {
  
  gold: [
    { name: "Gold Ring", price: 15000, weight: 6, img: "https://manubhai.in/SocialMedia/post_artworks/DCBE00658.jpg" },
    { name: "Gold Necklace", price: 50000, weight: 18, img: "https://akshayagold.in/wp-content/uploads/2023/04/336052524_594628079068489_8991184652865232177_n.jpg" },
    { name: "Gold Bracelet", price: 22000, weight: 10, img: "https://clarusworld.com/media/catalog/product/cache/0b98583e815a46c68015344254d5cc73/d/s/dsc00926.jpg" },
    { name: "Gold Chain", price: 35000, weight: 15, img: "https://tribalornaments.com/cdn/shop/products/il_fullxfull.1591198827_chm0.jpg?v=1616690413" },
    { name: "Gold Bangles", price: 42000, weight: 22, img: "https://www.sanvijewels.com/cdn/shop/files/IMG_20230922_133843.jpg?v=1723881322&width=1920" },
    { name: "Gold Earrings", price: 12000, weight: 4, img: "https://manubhai.in/SocialMedia/post_artworks/DLBD02841.jpg" },
    { name: "Gold Pendant", price: 9000, weight: 3, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgHSktUkGpLSY_MtORFX9I4tgcUrodRzZpUg&s" },
    { name: "Gold Kada", price: 38000, weight: 20, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrBthIkSJJ9qTU7tnVl5Mp0_Sg5_ZJfyMEHg&s" },
    { name: "Gold Nosepin", price: 5500, weight: 2, img: "https://m.media-amazon.com/images/I/71XNeUnEQqL._AC_UY1100_.jpg" },
    { name: "Gold Mangalsutra", price: 60000, weight: 25, img: "https://manubhai.in/SocialMedia/post_artworks/DHBD03339.jpg" }
  ],

  platinum: [
    { name: "Platinum Ring", price: 25000, weight: 5, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROT-j00l5oaeZBeyyc8JsYARf-jvovbhqKEA&s" },
    { name: "Platinum Chain", price: 70000, weight: 15, img: "https://i.etsystatic.com/12697690/r/il/0c5502/4809403463/il_1080xN.4809403463_tski.jpg" },
    { name: "Platinum Bracelet", price: 55000, weight: 12, img: "https://www.candere.com/media/jewellery/images/KC06479PLT_Creative.jpeg" },
    { name: "Platinum Pendant", price: 18000, weight: 4, img: "https://www.candere.com/media/jewellery/images/CP00158_1.jpeg" },
    { name: "Platinum Necklace", price: 95000, weight: 20, img: "https://www.soosi.co.in/cdn/shop/products/WhatsAppImage2022-04-19at1.10.39PM_2048x.jpg?v=1650384310" },
    { name: "Platinum Earrings", price: 27000, weight: 5, img: "https://cdn.orra.co.in/media/catalog/product/cache/10238651d5f95594b9023f998383bb67/p/p/ppe16008_1_zrsqjsnlc3miemnr.jpg" },
    { name: "Platinum Bangles", price: 80000, weight: 25, img: "https://www.soosi.co.in/cdn/shop/products/WhatsAppImage2021-11-21at19.46.21_300x300.jpg?v=1637507125" },
    { name: "Platinum Kada", price: 65000, weight: 18, img: "https://i.etsystatic.com/12697690/r/il/cd335c/6143362369/il_1080xN.6143362369_mvje.jpg" },
    { name: "Platinum Studs", price: 19000, weight: 3, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG4C8rCjMsIMcd-PDJ5vqvaAFuIN90oL7AtA&s" },
    { name: "Platinum Royal Ring", price: 33000, weight: 6, img: "https://www.zarkan.co/cdn/shop/files/ring_adu_2_720eb9e6-1ec9-4c53-9718-5e1b674be2fc_490x.progressive.png.jpg?v=1751893431" }
  ],

  silver: [
    { name: "Silver Chain", price: 2500, weight: 8, img: "https://www.giva.co/cdn/shop/files/CH0230_1.jpg?v=1758204808&width=533" },
    { name: "Silver Ring", price: 1300, weight: 3, img: "https://clara.in/cdn/shop/files/xB1Y1FZ_1024x1024.jpg?v=1744796545" },
    { name: "Silver Earrings", price: 1500, weight: 4, img: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/CIW/2025/6/29/07f72d3d-917c-45c6-ad87-314106e293ac_675152_1.jpg" },
    { name: "Silver Bracelet", price: 2800, weight: 10, img: "https://www.truesilver.co.in/cdn/shop/files/BR0865S_600x.jpg?v=1751692994" },
    { name: "Silver Kada", price: 3500, weight: 12, img: "https://fourseven.com/cdn/shop/files/jai-mahakaal-silver-kada-bangle-front-view.jpg?v=1741597368&width=1024" },
    { name: "Silver Necklace", price: 4000, weight: 15, img: "https://giftedbeautyjewels.com/cdn/shop/products/chrome_image_29-Jan-20226_44_05pmIST.png?v=1645812962" },
    { name: "Silver Anklet", price: 2200, weight: 8, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlalDg7xMRTQcj87FuMec_KwlR8_pdZKDVIQ&s" },
    { name: "Silver Bangles", price: 3800, weight: 12, img: "https://www.griiham.in/cdn/shop/files/Fancy-Silver-Plated-Bangles-Set-of-12-bangles-11455K-Designer-Bangles-Griiham-2_2.jpg?v=1718395112" },
    { name: "Silver Toe Ring", price: 900, weight: 2, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9o6cIFxi748Q6TA5paa0Nz_tmFuAHUjXdVQ&s" },
    { name: "Silver Pendant", price: 1200, weight: 3, img: "https://5.imimg.com/data5/ECOM/Default/2024/5/420106888/QN/SM/RO/72558170/silverpendantforgirlsandwomen1-500x500.jpg" }
  ],

  diamond: [
    { name: "Diamond Ring", price: 90000, weight: 6, img: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/d/3/d32f129DY-RNG-5214_1.jpg?tr=w-512" },
    { name: "Diamond Necklace", price: 250000, weight: 20, img: "https://images.bhimagold.com/products/necklaces/images/970f71fb-38cb-4578-a0b4-f04f6fc8e4a8-NGD-CHDN_18K-BNQ3-D-L-NA-24185990-additional-3.webp" },
    { name: "Diamond Earrings", price: 65000, weight: 5, img: "https://5.imimg.com/data5/SELLER/Default/2024/8/442669392/FH/ME/KH/223061847/solitaire-diamond-earring-500x500.jpg" },
    { name: "Diamond Bracelet", price: 120000, weight: 10, img: "https://www.soosi.co.in/cdn/shop/products/WhatsAppImage2023-02-10at8.34.27PM_2048x.jpg?v=1676044831" },
    { name: "Diamond Pendant", price: 50000, weight: 4, img: "https://shop.swarna.com/wp-content/uploads/2022/01/MG24311_2.jpg" },
    { name: "Diamond Bangles", price: 180000, weight: 15, img: "https://vrikshamindia.com/cdn/shop/products/IMG_3028.jpg?v=1710377985" },
    { name: "Diamond Crown Ring", price: 110000, weight: 7, img: "https://i.etsystatic.com/9279964/r/il/baf89a/1447471712/il_fullxfull.1447471712_dosp.jpg" },
    { name: "Diamond Kada", price: 140000, weight: 18, img: "https://www.darjewellery.com/product_image/s1200__aHR0cHM6Ly9tZWRpYS5kYXJqZXdlbGxlcnkuaW4vcHJvZHVjdF9pbWFnZXMvczEyMDBfXzE3MTAyMTg5MDQ5NTguanBn" },
    { name: "Diamond Studs", price: 45000, weight: 3, img: "https://maioradiamonds.in/cdn/shop/files/MD-ER00028_2_1800x.jpg?v=1764580005" },
    { name: "Diamond Royal Necklace", price: 350000, weight: 25, img: "https://sencowebfiles.s3.ap-south-1.amazonaws.com/products/Toj58o3XaZdGhppj3iA4nydBuvpZIPcR7GwsYtMP.jpeg" }
  ],

  coins: [
    { name: "1g Gold Coin", price: 6500, weight: 1, img: "https://m.media-amazon.com/images/I/61bgeqAf45L._AC_UY1100_.jpg" },
    { name: "2g Silver Coin", price: 700, weight: 2, img: "https://rukminim2.flixcart.com/image/480/480/xif0q/coin/5/3/s/na-2-999-silver-coin-giva-original-imah6xgxxeywhbzk.jpeg?q=90" },
    { name: "5g Gold Coin", price: 31000, weight: 5, img: "https://m.media-amazon.com/images/I/61tIdW21XXL._AC_UY1100_.jpg" },
    { name: "10g Silver Coin", price: 1400, weight: 10, img: "https://m.media-amazon.com/images/I/81fOPmZMTUL._AC_UY1100_.jpg" },
    { name: "10g Gold Coin", price: 60000, weight: 10, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjgMP0BjQ3R1-00Jg4px_ayDM0vNELVjxXjA&s" }
  ]

};

let currentCategory = "";
let cart = [];

/* ------------------ DISPLAY PRODUCTS ------------------ */
function loadCategory(cat) {
  currentCategory = cat;
  const container = document.getElementById("product-container");
  container.innerHTML = "";

  products[cat].forEach((p, i) => {
    container.innerHTML += `
      <div class="product">
        <img src="${p.img}" onclick="openViewer('${p.img}')">
        <h4>${p.name}</h4>
        <p>Price: ₹${p.price}</p>
        <p>Weight: ${p.weight}g</p>
        <button onclick="addToCart('${cat}', ${i})">Add to Cart</button>
      </div>
    `;
  });
}

/* ------------------ FILTER FUNCTION ------------------ */
function applyFilters() {
  let maxPrice = document.getElementById("priceFilter").value;
  let minWeight = document.getElementById("weightFilter").value;

  const container = document.getElementById("product-container");
  container.innerHTML = "";

  products[currentCategory]
    .filter(p => (!maxPrice || p.price <= maxPrice) && (!minWeight || p.weight >= minWeight))
    .forEach((p, i) => {
      container.innerHTML += `
        <div class="product">
          <img src="${p.img}" onclick="openViewer('${p.img}')">
          <h4>${p.name}</h4>
          <p>Price: ₹${p.price}</p>
          <p>Weight: ${p.weight}g</p>
          <button onclick="addToCart('${currentCategory}', ${i})">Add to Cart</button>
        </div>
      `;
    });
}

/* ------------------ CART FUNCTIONS ------------------ */
function addToCart(cat, index) {
  cart.push(products[cat][index]);
  displayCart();
}

function displayCart() {
  const cartBox = document.getElementById("cartItems");
  cartBox.innerHTML = "";
  let total = 0;

  cart.forEach((item, i) => {
    total += item.price;
    cartBox.innerHTML += `
      <p>${item.name} - ₹${item.price}
      <button onclick="removeItem(${i})">X</button></p>
    `;
  });

  document.getElementById("totalPrice").innerText = total;
}

function removeItem(i) {
  cart.splice(i, 1);
  displayCart();
}

/* ------------------ 360 VIEWER ------------------ */
function openViewer(img) {
  document.getElementById("viewer").style.display = "block";

  let frames = [
    img, img, img, img, img, img // Use repeated images (replace with real 360 frames)
  ];

  let index = 0;
  setInterval(() => {
    document.getElementById("viewerImg").src = frames[index];
    index = (index + 1) % frames.length;
  }, 300);
}
function closeViewer() {
  document.getElementById("viewer").style.display = "none";
}


/* ------------------ SHOW LOGIN ON PAGE LOAD ------------------ */
window.onload = () => {
    document.getElementById("loginPopup").style.display = "flex";
    document.getElementById("shopPage").style.display = "none";
    document.getElementById("logoutBtn").style.display = "none";
};

/* ------------------ POPUP CONTROL ------------------ */
function openLogin() {
    document.getElementById("loginPopup").style.display = "flex";
    document.getElementById("registerPopup").style.display = "none";
}

function openRegister() {
    document.getElementById("loginPopup").style.display = "none";
    document.getElementById("registerPopup").style.display = "flex";
}

function closePopups() {
    document.getElementById("loginPopup").style.display = "none";
    document.getElementById("registerPopup").style.display = "none";
}

/* ------------------ REGISTER ------------------ */
function register() {
    let name = document.getElementById("regName").value;
    let email = document.getElementById("regEmail").value;
    let pass = document.getElementById("regPass").value;

    if (!name || !email || !pass) {
        alert("All fields are required!");
        return;
    }

    localStorage.setItem("user", JSON.stringify({ name, email, pass }));
    alert("Registration successful! Please login.");
    openLogin();
}

/* ------------------ LOGIN ------------------ */
// LOGIN FUNCTION
function login() {
    let email = document.getElementById("loginEmail").value;
    let pass = document.getElementById("loginPass").value;
    let user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        alert("No user registered! Please register first.");
        openRegister();
        return;
    }

    if (email === user.email && pass === user.pass) {
        alert("Login Successful!");
        document.getElementById("loginPopup").style.display = "none";
        document.getElementById("shopPage").style.display = "block";
    } else {
        alert("Incorrect email or password!");
    }
}

/* ------------------ DISPLAY PRODUCTS ------------------ */
function loadCategory(cat) {
  currentCategory = cat;
  const container = document.getElementById("product-container");
  container.innerHTML = "";

  products[cat].forEach((p, i) => {
    container.innerHTML += `
      <div class="product">
        <img src="${p.img}" onclick="openViewer('${p.img}')">
        <h4>${p.name}</h4>
        <p>Price: ₹${p.price}</p>
        <p>Weight: ${p.weight}g</p>
        <button onclick="addToCart('${cat}', ${i})">Add to Cart</button>
      </div>
    `;
  });
}

/* ------------------ FILTER FUNCTION ------------------ */
function applyFilters() {
  let maxPrice = document.getElementById("priceFilter").value;
  let minWeight = document.getElementById("weightFilter").value;

  const container = document.getElementById("product-container");
  container.innerHTML = "";

  products[currentCategory]
    .filter(p => (!maxPrice || p.price <= maxPrice) && (!minWeight || p.weight >= minWeight))
    .forEach((p, i) => {
      container.innerHTML += `
        <div class="product">
          <img src="${p.img}" onclick="openViewer('${p.img}')">
          <h4>${p.name}</h4>
          <p>Price: ₹${p.price}</p>
          <p>Weight: ${p.weight}g</p>
          <button onclick="addToCart('${currentCategory}', ${i})">Add to Cart</button>
        </div>
      `;
    });
}

/* ------------------ CART FUNCTIONS ------------------ */
function addToCart(cat, index) {
  cart.push(products[cat][index]);
  displayCart();
}

function displayCart() {
  const cartBox = document.getElementById("cartItems");
  cartBox.innerHTML = "";
  let total = 0;

  cart.forEach((item, i) => {
    total += item.price;
    cartBox.innerHTML += `
      <p>${item.name} - ₹${item.price}
      <button onclick="removeItem(${i})">X</button></p>
    `;
  });

  document.getElementById("totalPrice").innerText = total;
}

function removeItem(i) {
  cart.splice(i, 1);
  displayCart();
}


function closeViewer() {
  document.getElementById("viewer").style.display = "none";

  // Stop the running interval
  if (viewerInterval) clearInterval(viewerInterval);
}

/* ------------------ PAYMENT ------------------ */
function openPayment() {
    document.getElementById("payment-page").style.display = "block";
}

function completePayment() {
    alert("Payment Successful! Order Placed.");
}