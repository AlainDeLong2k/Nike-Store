const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "src/assets/air.png",
      },
      {
        code: "darkblue",
        img: "src/assets/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "src/assets/jordan.png",
      },
      {
        code: "green",
        img: "src/assets/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "src/assets/blazer.png",
      },
      {
        code: "green",
        img: "src/assets/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "src/assets/crater.png",
      },
      {
        code: "lightgray",
        img: "src/assets/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "src/assets/hippie.png",
      },
      {
        code: "black",
        img: "src/assets/hippie2.png",
      },
    ],
  },
];

// console.log(wrapper);

// wrapper.style.backgroundColor = "red";
// wrapper.style.transform = "translateX(-100px)";
// wrapper.style.transform = "translateX(-400vw)";

const curProductImg = document.querySelector(".productImg");
const curProductTitle = document.querySelector(".productTitle");
const curProductPrice = document.querySelector(".productPrice");
const curProductColor = document.querySelectorAll(".color");
const curProductSize = document.querySelectorAll(".size");
let chosenProduct = products[0];

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // console.log(`you clicked ${item.textContent}!`);

    // change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    // change the chosen product
    chosenProduct = products[index];

    // change texts of current product
    curProductTitle.textContent = chosenProduct.title.toUpperCase();
    curProductPrice.textContent = `$${chosenProduct.price}`;
    curProductImg.src = chosenProduct.colors[0].img;

    // assign new color
    curProductColor.forEach((color, index) => {
      color.style.backgroundColor = chosenProduct.colors[index].code;
    });
  });
});

curProductColor.forEach((color, index) => {
  color.addEventListener("click", () => {
    curProductImg.src = chosenProduct.colors[index].img;
  });
});

curProductSize.forEach((size, index) => {
  size.addEventListener("click", () => {
    curProductSize.forEach((size, index) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
