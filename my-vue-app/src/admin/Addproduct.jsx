import React, { useState } from 'react';

const AddProductPage = ({ addProduct }) => {
  const [inputValues, setInputValue] = useState({});

  const onHandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputValue({ ...inputValues, [name]: value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    addProduct(inputValues);
  };

  return (
    <div>
      <form action="" onSubmit={onHandleSubmit}>
        <input type="text" placeholder="Nhập Tên" onChange={onHandleChange} name="name" />
        <input type="text" placeholder="Nhập Giá" onChange={onHandleChange} name="price" />
        <button type="submit">Thêm mới</button>
      </form>
    </div>
  );
};

export default AddProductPage;
