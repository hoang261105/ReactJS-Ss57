export default function B2() {
  const getAllProduct = () => {
    fetch("http://localhost:8000/products")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  getAllProduct();
  return <div>B2</div>;
}
