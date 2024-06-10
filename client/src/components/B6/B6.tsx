import React, { useEffect } from "react";

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
  product_name: "Sample Product Name",
  image: "",
  price: 100,
  quantity: 10,
  created_at: "17/3/2021",
};

export default function B6() {
  const updateProductById = (id: number, product: Product) => {
    fetch(`http://localhost:8000/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((response: Response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        console.log("Server Response:", data);
      })
      .catch((err) => console.log("Fetch error:", err));
  };

  useEffect(() => {
    updateProductById(product.id, product);
  }, []);
  return <div>B6</div>;
}
