const container = document.querySelector(".product__container");
const template = document.querySelector(".template");
const filtrs = document.querySelectorAll(".filtr__btn");

renderProducts(pizza);

filtrs.forEach((filtr) => {
  filtr.addEventListener("click", handleFiltr);
});

function handleFiltr(event) {
  const filtr = event.target.innerHTML;
  console.log(filtr);
}

function renderProducts(arr) {
  arr.forEach((product) => {
    const clone = template.content.cloneNode(true);
    const name = clone.querySelector(".product__name");
    name.innerHTML = product.name;
    const description = clone.querySelector(".product__description");
    description.innerHTML = product.description;
    const price = clone.querySelector(".price");
    price.innerHTML = product.price;
    const img = clone.querySelector(".product__img");
    img.src = product.img;
    container.append(clone);
  });
}
