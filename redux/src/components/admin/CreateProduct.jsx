import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { productsCreate } from "../../features/productsSlice";

const CreateProduct = () => {
  const dispatch = useDispatch();

  const [productImg, setProductImg] = useState("");
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");

  const handleProductImageUpload = (e) => {
    const file = e.target.files[0];

    TransformFileData(file);
  };

  const TransformFileData = (file) => {
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setProductImg(reader.result);
      };
    } else {
      setProductImg("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(
      productsCreate({
        name,
        category,
        price,
        desc,
        image: productImg,
        gender,
        age,
      })
    );
  };

  return (
    <div className="flex flex-col font-serif text-center">
      <h2 className="font-bold mt-8 mb-10 underline">Add Product</h2>
      <div className="flex md:flex-row flex-col items-center  justify-around gap-2">
        <div className="flex flex-col   sm:w-96 w-72">
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="border-2 border-gray-300 p-2 rounded-lg"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              name="price"
              id="price"
              className="border-2 border-gray-300 p-2 rounded-lg"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              className="border-2 border-gray-300 p-2 rounded-lg"
              onChange={(e) => {
                setDesc(e.target.value);
              }}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="category">Category</label>
            <select
              name="category"
              id="category"
              className="border-2 border-gray-300 p-2 rounded-lg"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option value="">Select</option>
              <option value="Tshirt">Tshirt</option>
              <option value="Hoodies">Hoodies</option>
              <option value="Cap">Cap</option>
              <option value="Footware">Footware</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="category">Gender</label>
            <select
              name="category"
              id="category"
              className="border-2 border-gray-300 p-2 rounded-lg"
              onChange={(e) => {
                setGender(e.target.value);
              }}
            >
              <option value="">Select</option>
              <option value="Male">Men</option>
              <option value="Female">Women</option>
              <option value="Both">Both</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="category">Age category</label>
            <select
              name="category"
              id="category"
              className="border-2 border-gray-300 p-2 rounded-lg"
              onChange={(e) => {
                setAge(e.target.value);
              }}
            >
              <option value="">Select</option>
              <option value="Adult">Adult</option>
              <option value="Kids">Kids</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="image">Image</label>

            <input
              type="file"
              accept="image/*"
              name="image"
              id="image"
              className="border-2 border-gray-300 p-2 rounded-lg"
              onChange={handleProductImageUpload}
            />
          </div>
        </div>
        <div>
          <div className="flex border-black border-4 md:w-[20em] w-[15em] md:h-[20em] h-[15em] justify-center items-center ">
            {productImg ? (
              <>
                <img
                  src={productImg}
                  className="md:w-[300px] w-[200px] md:h-[300px] h-[200px]"
                ></img>
              </>
            ) : (
              <p>No image to preview</p>
            )}
          </div>
          <div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded m-5"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
