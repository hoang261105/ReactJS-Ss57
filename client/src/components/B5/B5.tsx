interface Product {
  id: number;
  product_name: string;
  image: string;
  price: number;
  quantity: number;
  created_at: string;
}

const product: Product = {
  id: 1,
  product_name: "Sample Product",
  image: "",
  price: 100.0,
  quantity: 10,
  created_at: "17/3/2021",
};

export default function B5() {
  const createProduct = () => {
    fetch("http://localhost:8000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((response: Response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  createProduct();
  return <div>B5</div>;
}
