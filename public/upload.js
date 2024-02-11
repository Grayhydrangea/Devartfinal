document.getElementById('sellForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const productCategory = document.getElementById('productCategory').value;
    const productCode = document.getElementById('productCode').value;
    const productName = document.getElementById('productName').value;
    const productDescription = document.getElementById('productDescription').value;
    const productImage = document.getElementById('productImage').files[0];
    
    console.log('Product Category:', productCategory);
    console.log('Product Code:', productCode);
    console.log('Product Name:', productName);
    console.log('Product Description:', productDescription);
    console.log('Product Image:', productImage);
  });