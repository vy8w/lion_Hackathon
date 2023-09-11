const itemsList = document.getElementById("items-list");

// 가상의 데이터 예시
let reservations = [
  { id: 1, itemName: "생선", quantity: 5, image: "fish.png", price: 2000},
  { id: 2, itemName: "쌀", quantity: 3, image: "rice.png", price: 2000 },
  { id: 3, itemName: "계란", quantity: 2, image: "eggs.png", price: 2000 },
];

function generateItemsList() {
  itemsList.innerHTML = "";

  reservations.forEach((reservation) => {
    const listItem = document.createElement("li");
    
    // 전체 div 박스 생성
    const itemBlock = document.createElement("div");
    itemBlock.classList.add("item-block");

    // 상품 img와 상품명을 담을 div 박스 생성
    const blockProduct = document.createElement('div');
    blockProduct.classList.add('product');
    itemBlock.appendChild(blockProduct);

    // 상품 img를 담을 div 박스 생성
    const blockImg = document.createElement('div');
    blockImg.classList.add('blockImg');
    blockProduct.appendChild(blockImg);

    // 상품 img 태그 생성
    const itemImage = document.createElement("img");
    itemImage.src = reservation.image;
    itemImage.alt = reservation.itemName;
    blockImg.appendChild(itemImage);
    
    // 상품명을 담을 div 박스 생성
    const blockName = document.createElement('div');
    blockName.classList.add('blockName');
    blockProduct.appendChild(blockName);

    // 상품명 p 태그 생성
    const itemName = document.createElement("p");
    itemName.textContent = reservation.itemName;
    blockName.appendChild(itemName);

    // 재고 수량을 담을 div 박스 생성
    const blockStock = document.createElement('div');
    blockStock.classList.add('stock');
    itemBlock.appendChild(blockStock);

    // 수량 p 태그 생성
    const itemQuantity = document.createElement("p");
    const quantityText = Number(reservation.quantity);   // 문자열 -> 숫자 전환
    itemQuantity.textContent = `${quantityText}`;
    blockStock.appendChild(itemQuantity);

    // 가격을 담을 div 박스 생성
    const blockPrice = document.createElement('div');
    itemBlock.appendChild(blockPrice);
    blockPrice.classList.add('price');

    // 가격 p 태그 생성
    const itemPrice = document.createElement("p");
    const priceText = Number(reservation.price);   // 문자열 -> 숫자 전환
    itemPrice.textContent = `${priceText}원`;
    blockPrice.appendChild(itemPrice);

    // 상품별 합계 금액 담을 div 박스 생성
    const blockTotal = document.createElement('div');
    itemBlock.appendChild(blockTotal);
    blockTotal.classList.add('total');

    // 상품별 합계 금액 p 태그 생성
    const itemTotal = document.createElement('p');
    const totalText = Number(quantityText * priceText)   // 문자열 -> 숫자 전환
    itemTotal.textContent = `${totalText}원`;
    blockTotal.appendChild(itemTotal);
    
    listItem.appendChild(itemBlock);
    
    itemsList.appendChild(listItem);    
  });
}

generateItemsList();
