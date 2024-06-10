export default function B3() {
  const getProductById = (id: number) => {
    fetch(`http://localhost:8000/products/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log("Không tìm thấy id");
        }
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  getProductById(5);
  return <div>B3</div>;
}
