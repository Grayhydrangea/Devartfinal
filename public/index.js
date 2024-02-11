const products = [
    { name: "โลโก้สุดเท่", category: "logo", owner: "แดนไตร", image: "https://plus.unsplash.com/premium_photo-1682216872195-0bfacc36b02c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "อิหยังวะ", category: "character", owner: "ประยุท", image: "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    // Add more products as needed
  ];
  
  function filterProducts(category) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";
  
    products.forEach(product => {
      if (category === 'all' || product.category === category) {
        const card = `
          <div class="col-md-4">
            <div class="card">
              <img src="${product.image}" class="card-img-top" alt="${product.name}">
              <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">Owner: ${product.owner}</p>
                <a href="/ProductDescription/pDescription.html" class="btn btn-dark">Detail</a>
              </div>
            </div>
          </div>
        `;
        productList.innerHTML += card;
      }
    });
  }
  
  filterProducts('all');