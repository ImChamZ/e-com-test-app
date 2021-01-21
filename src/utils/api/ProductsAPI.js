const ProductsAPI = {
  listAllProducts() {
    return new Promise((resolve, reject) => {
      fetch(
        `"https://my-json-server.typicode.com/prasadhewage/ecommerce/shipments"`
      )
        .then((result) => result.json())
        .then(
          (result) => resolve(result),
          (error) => reject(error)
        );
    });
  },
};

export default ProductsAPI;
