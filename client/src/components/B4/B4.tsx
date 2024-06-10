export default function B4() {
  const removeProductById = (id: number) => {
    fetch(`http://localhost:8000/products/${id}`, { method: "DELETE" })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log("Không tìm thấy id cần xóa");
        }
      })
      .catch((err) => console.log(err));
  };
  removeProductById(2);
  return <div>B4</div>;
}
