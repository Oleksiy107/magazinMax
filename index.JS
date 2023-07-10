function submitForm() {
    const pib = document.getElementById('pib').value;
    const city = document.getElementById('city').value;
    const placeForDelivery = document.getElementById('delivery').value;
    const pay = document.getElementById('pay').value;
    const quantity = document.getElementById('quantity').value;
    const comment = document.getElementById('comment').value;
  
    if (pib === '' || city === '' || placeForDelivery === '' || pay === '' || quantity === '') {
      alert("Please fill out the entire form");
      return;
    }
    if (!isNaN(pib) || !isNaN(placeForDelivery) || placeForDelivery.trim() === '') {
      alert("Please enter a string for name or delivery place");
      return;
    }
  
    let orderInfo = "Інформація про замовлення:\n\n";
    orderInfo += "ПІБ покупця: " + pib + "\n";
    orderInfo += "Місто: " + city + "\n";
   
  
    orderInfo += "Післяплата або оплата банківською карткою: " + pay + "\n";
    orderInfo += "Кількість продукції, що купується: " + quantity + "\n";
    orderInfo += "Коментар до замовлення: " + comment;
  
    alert(orderInfo);
  
    localStorage.setItem('orderInfo', orderInfo);
  
    location.reload();
    showForm();
  }
  function showForm() {
    const form = document.getElementById('formDelivery');
    form.classList.remove('hidden');
  }
  
  function showProducts(category) {
    const productsContainer = document.getElementById("product-list");
    const productInfoContainer = document.getElementById("product-info");
  
    const categories = {
      Electronics: ["Smartphone", "Laptop"],
      Clothing: ["T-shirt", "Jeans"],
      Cosmetics: ["Lipstick", "Face Mask"],
    };
  
    productsContainer.innerHTML = "";
    productInfoContainer.innerHTML = "";
  
    if (!category) {
      const categoryItems = document.getElementsByClassName("categories");
      for (const categoryItem of categoryItems) {
        categoryItem.style.display = "block";
        categoryItem.onclick = function() {
          const selectedCategory = this.innerHTML;
          for (const categoryItem of categoryItems) {
            categoryItem.style.display = "none";
          }
          showProducts(selectedCategory);
        };
      }
    } else {
      productsContainer.innerHTML = '<h2>Products in category "' + category + '"</h2>';
  
      categories[category].forEach(function(product) {
        const productItem = document.createElement("div");
        productItem.classList.add("product-item");
        productItem.innerHTML = product;
        productItem.onclick = function() {
          productInfoContainer.innerHTML = '<h2>Information about the product "' + product + '"</h2>';
  
          const buyButton = document.createElement("button");
          buyButton.innerHTML = "Buy";
          buyButton.onclick = function() {
          
            showForm();
          };
  
          productInfoContainer.appendChild(buyButton);
        };
  
        productsContainer.appendChild(productItem);
      });
    }
  }
  
  