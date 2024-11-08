import React, { useState } from "react";
import "./Categories.css";
import Navbar from "../Navbar/Navbar";

const Categories = () => {
  const [productItems, setProductItems] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductItems({ ...productItems, [name]: value });
  };

  const handleSubmit = () => {
    console.log(productItems);
  };

  return (
    <>
    <Navbar/>
      <div className="admin-panel">
        <main className="content">
          <div className="add-items">
            <h1>Add Category</h1>
            <div className="section-content">Welcome Admin</div>
          </div>
          <div className="main-content">
            <h1>Add Category to the user panel</h1>
            <div className="input-fields">
              <form onClick={handleSubmit}>
                <label htmlFor="productCategory">Product Category</label>
                <select name="productCategory" onChange={handleChange}>
                  <option value="Mobiles">Select Category</option>
                  <option value="Mobiles">Mobiles</option>
                  <option value="Laptops">Laptops</option>
                  <option value="EarPhones">Ear Phones</option>
                  <option value="TV">TV</option>
                  <option value="BluetoothSpeakers">Bluetooth Speakers</option>
                  <option value="HeadPhones">Head Phones</option>
                </select>
                <label htmlFor="productImage">Product Image</label>
                <div className="custom-file-upload">
                  <label htmlFor="file-upload" className="file-label">
                    Choose File
                  </label>
                  <input
                    id="file-upload"
                    name="productImage"
                    type="image"
                    alt="image"
                    onChange={handleChange}
                  />
                  <span id="file-chosen">No file chosen</span>
                </div>
                <div className="btn">
                  <button type="submit">Add Category</button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Categories;
