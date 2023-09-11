// 상품 및 재고 등록 버튼 클릭 이벤트 처리
document.getElementById("addProductWithStock").addEventListener("click", function () {
    const productCode = document.getElementById("productForm").elements[0].value;
    const productName = document.getElementById("productForm").elements[1].value;
    const regularPrice = document.getElementById("productForm").elements[2].value;
    const discountPrice = document.getElementById("productForm").elements[3].value;
    const stock = document.getElementById("productForm").elements[4].value;

    // 상품 및 재고 등록
    const tableBody = document.querySelector("#productTable tbody");
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${productCode}</td>
        <td>${productName}</td>
        <td>${regularPrice}</td>
        <td>${discountPrice}</td>
        <td>${stock}</td>`;
    tableBody.appendChild(newRow);
});
