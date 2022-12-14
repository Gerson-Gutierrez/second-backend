class ProductManager {
    products;
    static id = 1;
    constructor(tittle, description, price, thumbnail, code, stock) {
      ProductManager.id += 0;
      this.products = [];
      this.tittle = tittle;
      this.description = description;
      this.price = price;
      this.thumbnail = thumbnail;
      this.code = code;
      this.stock = stock;
    }
  
    addProduct(product) {
      product = { ...product, id: ProductManager.id };
      let assignedCode = this.products.find(
        (producto) => producto.code === product.code
      );
      if (assignedCode) {
        return console.log(
          "El code del producto ",
          product.tittle,
          "debe ser diferente, ya que es idéntico a otro producto"
        );
      } else {
        this.products.push(product);
        ProductManager.id++;
      }
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      let searchID = id;
      let myProduct = null;
      this.products.forEach((product) => {
        if (product.id === searchID) {
          myProduct = product;
        }
      });
      if (myProduct === null) {
        return console.log("El ID", searchID, "no ha sido hallado");
      } else {
        return console.log(
          "El ID",
          searchID,
          "corresponde al siguiente al producto ",
          myProduct.tittle
        );
      }
    }
  }
  
  const productList = new ProductManager();
  

   const product1 = {
    title:"delorean",
    description:"Auto de Colección Volver al Futuro III",
    price:"300",
    thumbnail:"https://cdn.shopify.com/s/files/1/0340/6230/3367/products/D_684221-MLA20736255285_052016-B.jpg?v=1662141591",
    code:"1",
    stock:"20",
  };

 const product2 = {
    title:"batman",
    description:"Figura articulada 30 cm Batman",
    price:"500",
    thumbnail:"https://http2.mlstatic.com/D_NQ_NP_601271-MLA44256706430_122020-O.webp",
    code:"2",
    stock:"13",
 };


  
  console.log("Se procede a la carga de productos: ");
  productList.addProduct(product1);
  productList.addProduct(product2);
  
  console.log("El listado de productos cargados es: ");
  console.log(productList.getProducts());
  
  console.log("Se prodece a buscar el producto con ID=2");
  console.log(productList.getProductById(2));
  console.log("Fin del programa");