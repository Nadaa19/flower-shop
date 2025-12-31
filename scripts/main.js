const flowers = [
  { id: 1, name: "Rose", color: "Red", price: 15, image: "./images/r1.jpg" ,count:1},
  { id: 2, name: "Tulip", color: "Yellow", price: 10, image:"./images/ysix.jpg" ,count:1},
  { id: 3, name: "Lily", color: "White", price: 18, image: "./images/w1.jpg" ,count:1},
  { id: 4, name: "Sunflower", color: "Yellow", price: 12, image: "./images/yfour.jpg" ,count:1},
  { id: 5, name: "Orchid", color: "Purple", price: 25, image: "./images/p1.jpg" ,count:1},
  { id: 6, name: "Daisy", color: "White", price: 8, image: "./images/w2.jpg" ,count:1},
  { id: 7, name: "Carnation", color: "Pink", price: 9, image: "./images/n1.jpg",count:1 },
  { id: 8, name: "Lavender", color: "green", price: 14, image: "./images/g1.jpg" ,count:1},
  { id: 9, name: "Jasmine", color: "White", price: 11, image: "./images/w3.jpg" ,count:1},
  { id: 10, name: "Peony", color: "Pink", price: 20, image: "./images/n2.jpg" ,count:1},

  { id: 11, name: "Iris", color: "Blue", price: 16, image: "./images/b1.jpg" ,count:1},
  { id: 12, name: "Chrysanthemum", color: "Orange", price: 13, image: "./images/o1.jpg",count:1 },
  { id: 13, name: "Geranium", color: "Red", price: 10, image: "./images/r2.jpg" ,count:1},
  { id: 14, name: "Hibiscus", color: "Red", price: 17, image: "./images/r3.jpg" ,count:1},
  { id: 15, name: "Lotus", color: "Pink", price: 22, image: "./images/n3.jpg" ,count:1},
  { id: 16, name: "Poppy", color: "Red", price: 12, image: "./images/r4.jpg" ,count:1},
  { id: 17, name: "Freesia", color: "White", price: 14, image: "./images/w4.jpg" ,count:1},
  { id: 18, name: "Gardenia", color: "White", price: 19, image: "./images/w5.jpg" ,count:1},
  { id: 19, name: "Anemone", color: "Purple", price: 15, image: "./images/p2.jpg" ,count:1},
  { id: 20, name: "Begonia", color: "Pink", price: 11, image: "./images/n4.jpg" ,count:1},

  { id: 21, name: "Camellia", color: "Red", price: 18, image: "./images/r5.jpg" ,count:1},
  { id: 22, name: "Cosmos", color: "Pink", price: 9, image: "./images/n5.jpg" ,count:1},
  { id: 23, name: "Hyacinth", color: "Blue", price: 16, image: "./images/b2.jpg" ,count:1},
  { id: 24, name: "Magnolia", color: "White", price: 21, image: "./images/w6.jpg" ,count:1},
  { id: 25, name: "Marigold", color: "Orange", price: 8, image: "./images/o2.jpg" ,count:1},
  { id: 26, name: "Narcissus", color: "Yellow", price: 13, image: "./images/ythree.jpg",count:1 },
  { id: 27, name: "Oleander", color: "Pink", price: 14, image: "./images/n6.jpg" ,count:1},
  { id: 28, name: "Petunia", color: "Purple", price: 10, image: "./images/p3.jpg" ,count:1},
  { id: 29, name: "Ranunculus", color: "Red", price: 17, image: "./images/r6.jpg" ,count:1},
  { id: 30, name: "Snapdragon", color: "Pink", price: 12, image: "./images/n7.jpg" ,count:1},

  { id: 31, name: "Tuberose", color: "White", price: 20, image: "./images/w7.jpg",count:1 },
  { id: 32, name: "Verbena", color: "Purple", price: 9, image: "./images/p4.jpg" ,count:1},
  { id: 33, name: "Wisteria", color: "green", price: 23, image: "./images/g2.jpg" ,count:1},
  { id: 34, name: "Zinnia", color: "Orange", price: 8, image: "./images/o3.jpg" ,count:1},
  { id: 35, name: "Aster", color: "Blue", price: 11, image: "./images/b3.jpg",count:1 },
  { id: 36, name: "Bluebell", color: "Blue", price: 10, image: "./images/b4.jpg" ,count:1},
  { id: 37, name: "Buttercup", color: "Yellow", price: 7, image: "./images/yellowtwo.jpg" ,count:1},
  { id: 38, name: "Clematis", color: "Purple", price: 18, image: "./images/p5.jpg" ,count:1},
  { id: 39, name: "Delphinium", color: "Blue", price: 19, image: "./images/b5.jpg",count:1},
  { id: 40, name: "Edelweiss", color: "White", price: 24, image: "./images/w8.jpg" ,count:1},

  { id: 41, name: "Foxglove", color: "Pink", price: 15, image: "./images/n8.jpg" ,count:1},
  { id: 42, name: "Gladiolus", color: "Red", price: 17, image: "./images/r7.jpg",count:1 },
  { id: 43, name: "Hellebore", color: "Purple", price: 16, image: "./images/p6.jpg" ,count:1},
  { id: 44, name: "Impatiens", color: "Red", price: 9, image: "./images/r8.jpg",count:1 },
  { id: 45, name: "Jonquil", color: "Yellow", price: 12, image: "./images/yelloonn.jpg",count:1 },
  { id: 46, name: "Kalanchoe", color: "Orange", price: 10, image: "./images/o4.jpg",count:1 },
  { id: 47, name: "Lilac", color: "Purple", price: 14, image: "./images/p7.jpg" ,count:1},
  { id: 48, name: "Mimosa", color: "Yellow", price: 11, image: "./images/yfive.jpg" ,count:1},
  { id: 49, name: "Nasturtium", color: "Orange", price: 8, image: "./images/o5.jpg" ,count:1},
  { id: 50, name: "Yarrow", color: "White", price: 13, image: "./images/w9.jpg" ,count:1}
];

let shopcon = document.querySelector('.shop-con');
let layout = document.querySelector('.layout');
let cartHandler = document.querySelectorAll('.cartHandler');
let totop = document.querySelector('.to-top');
let colorfilter=document.getElementById('colorFilter')
let pricefilter=document.getElementById('priceFilter')

document.addEventListener('DOMContentLoaded', function() {
    // Slick slider
    $('.slider').slick({
        infinite: true,
        dots: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        prevArrow: '.pre',
        nextArrow: '.next',
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
            { breakpoint: 780, settings: { slidesToShow: 2, slidesToScroll: 1 } },
            { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } }
        ]
    });
});

// Scroll to top
if (totop) {
    totop.onclick = function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
}

// Cart handler
if (cartHandler.length && shopcon && layout) {
    cartHandler.forEach(function(el) {
        el.onclick = function() {
            if (this.className.includes('one')) {
                shopcon.classList.add('open')
                layout.classList.add('open')
            } else {
                shopcon.classList.remove('open')
                layout.classList.remove('open')
            }
        }
    });
}

function renderCards(arr){
    if (arr.length==0){
    cardContainer.innerHTML='No Flowers Found'
    return
  }

    let cards = arr.map(function(value,index){
  return `<div class="card">
                <div class="card-img">
                    <img src="${value.image}" alt="">
                </div>
                <div class="card-data">
                    <div class="left-data">
                        <b>${value.name}</b>
                        <p>${value.price}$</p>
                    </div>
                    <div class="salla">
                    <i onclick="addtocard(${value.id})" class="fa-solid fa-cart-shopping"></i>
                    </div>
                </div>
            </div>`;
}).join("");

let cardContainer = document.querySelector('.card-con');
if(cardContainer){
    cardContainer.innerHTML = cards;
}

}
renderCards(flowers);

const colorFilter = document.getElementById("colorFilter");
const priceFilter = document.getElementById("priceFilter");

function applyFilters() {
  let result = [...flowers]; // نبدأ بكل المنتجات

  // فلترة اللون
  if (colorFilter.value !== "") {
    result = result.filter(flower =>
      flower.color.toLowerCase() === colorFilter.value.toLowerCase()
    );
  }

  // فلترة السعر
  if (priceFilter.value !== "") {
    const numbers = priceFilter.value.match(/\d+/g).map(Number); // [min,max]
    const min = numbers[0];
    const max = numbers[1];
    result = result.filter(flower =>
      flower.price >= min && flower.price <= max
    );
  }

  // لو فيه منتجات، نعرضها
  renderCards(result);
}

colorFilter.addEventListener("change", applyFilters);
priceFilter.addEventListener("change", applyFilters);

renderCards(flowers);





let cartitems = [];

function addtocard(id){
    let product = flowers.find(item => item.id === id);

    if(!product) return; 

    let searchItem = cartitems.find(item => item.id === id);
    if(searchItem){
       window.alert('The product is already in your shopping cart.');
       return;
    }

    cartitems.push(product);

    displayItems();
    handlePopupBox();
}


function handlePopupBox(){
    let box = document.createElement('div');
    box.className = 'popup';

    let icon = document.createElement('i');
    icon.className = 'fa-regular fa-thumbs-up';

    let p = document.createElement('p');
    p.innerHTML = 'Done';

    let div = document.createElement('div');
    div.className = 'options';

    let openbtn = document.createElement('button');
    openbtn.innerHTML = 'open card';

    let close = document.createElement('button');
    close.innerHTML = 'close';

    div.appendChild(openbtn);
    div.appendChild(close);
    box.appendChild(icon);
    box.appendChild(p);
    box.appendChild(div);
    
    document.body.appendChild(box);

    setTimeout(function(){
        box.classList.add('open')
        if(layout) layout.classList.add('open')
    }, 200);

    function removeBox(){
        box.classList.remove('open');
        setTimeout(() => box.remove(), 500);
        if(layout) layout.classList.remove('open');
    }

    close.onclick = removeBox;
    openbtn.onclick = function(){
        removeBox();
        if(shopcon) shopcon.classList.add('open');
    }
    if(layout){
        layout.onclick = function(){
            removeBox();
            if(shopcon) shopcon.classList.remove('open');
        }
    }
}

function displayItems() {
  let cartContainer = document.querySelector('.cart-items-con');
  if (!cartContainer) return;

  if (!cartitems.length) {
    cartContainer.innerHTML = "<p style='text-align:center;'>Your cart is empty 🛒</p>";
    sum();
    return;
  }

  let itemsHTML = cartitems.map(val => {
    return `<div class="cart-item">
            <img src="${val.image}" alt="">
            <div class="cart-item-data">
                <b>${val.name}</b>
                <p>${val.price}$</p>
            </div>
            <div class="count">
                <div onclick='plus(${val.id})' class="plus">+</div>
                <p class="number">${val.count}</p>
                <div onclick='minus(${val.id})' class="minus">-</div>
            </div>
            <i onclick='deleteFromCart(${val.id})' class="fa-solid fa-trash-can"></i>
        </div>`;
  }).join(" ");

  cartContainer.innerHTML = itemsHTML;
  sum();
}

function plus(id){
    let findItem = cartitems.find(el => el.id === id);
    if(findItem){
        findItem.count++;
        displayItems();
    }
}

function minus(id){
    let findItem = cartitems.find(el => el.id === id);
    if(!findItem) return;
    findItem.count--;
    if(findItem.count === 0){
        cartitems = cartitems.filter(el => el.id !== id);
    }
    displayItems();
}

function deleteFromCart(id){
    if(window.confirm('Are You Sure To Delete That Product')){
        cartitems = cartitems.filter(val => val.id !== id);
        displayItems();
    }
}

function sum(){
    let total = cartitems.reduce((a,b) => a + (b.price*b.count), 0);
    let totalEl = document.querySelector('.totalPrice');
    if(totalEl) totalEl.innerHTML = total+'$';
}

// FAQ Accordion
document.addEventListener("click", function (e) {
    let question = e.target.closest(".faq-question");
    if (!question) return;

    let answer = question.nextElementSibling;
    let icon = question.querySelector("i");

    if (answer.style.display === "flex") {
        answer.style.display = "none";
        if(icon) icon.classList.replace("fa-minus", "fa-plus");
    } else {
        answer.style.display = "flex";
        if(icon) icon.classList.replace("fa-plus", "fa-minus");
    }
});
const countdown = document.getElementById("countdown");

// مدة الخصم: شهر كامل
const OFFER_DURATION = 30 * 24 * 60 * 60 * 1000;

// احذف أي قيمة قديمة (تجربة)
localStorage.removeItem("offerEndTime");

// نحصل على الوقت النهائي
let endTime = localStorage.getItem("offerEndTime");
const now = new Date().getTime();

// لو مفيش endTime أو انتهت
if (!endTime || now > endTime) {
  endTime = now + OFFER_DURATION;
  localStorage.setItem("offerEndTime", endTime);
}

endTime = Number(endTime);

function updateCountdown() {
  const now = new Date().getTime();
  let distance = endTime - now;

  if (distance <= 0) {
    countdown.innerHTML = 'End Of Discounts ...';
    localStorage.removeItem("offerEndTime");
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  let f=countdown.innerHTML = `   :   ${days} Days : ${hours} Hours : ${minutes} Minutes : ${seconds} Seconds   ⏰ ...`;
countdown.style.textShadow = '0 0 10px  var(--main_color)';

}

updateCountdown();
setInterval(updateCountdown, 1000);

