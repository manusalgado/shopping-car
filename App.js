class Product {

  constructor(name, price, year){
    this.name = name;
    this.price = price;
    this.year = year;
  }
}

class UI {

  addProduct(product){

   const productData = document.getElementById('productList');
   const productContainer = document.createElement('div');

   productContainer.innerHTML = `
    <div class="card text-center mb-4">
      <div class="card-body">
        <p>Product: ${product.name}</p>
        <p>Price: ${product.price}</p>
        <p>Year: ${product.year}</p>
        <a href="#" class="btn btn-danger" name="delete">Remove product</a>
      </div>
    </div>
   `;

   productData.appendChild(productContainer)
   this.resetForm()
  }

  resetForm(){
    document.getElementById('productForm').reset();
  }

  deleteProduct(element){
    if(element.name === 'delete'){
      element.parentElement.parentElement.parentElement.remove()
    }
  }

  showMessage(message, cssClass){
    const messageContainer = document.createElement('div');
    messageContainer.className = `alert alert-${cssClass}`;
    messageContainer.appendChild(document.createTextNode(message));

    const container = document.querySelector('.container');
    const app = document.querySelector('#App');
    container.insertBefore(messageContainer,  app)
  }
}

// DOM Events

document.getElementById('productForm').addEventListener('submit', function(e){
  e.preventDefault();

  const name = document.getElementById('name').value;
  const price = document.getElementById('price').value;
  const year = document.getElementById('year').value;

  const product = new Product(name, price, year);
  const ui = new UI();
  ui.addProduct(product)
  ui.showMessage('Product success', 'success')
  setTimeout(function(){
    document.querySelector('.alert').remove()
  }, 3000)
  
  
})

document.getElementById('productList').addEventListener('click', function(e){
  
  const ui = new UI()
  ui.deleteProduct(e.target)
  
})