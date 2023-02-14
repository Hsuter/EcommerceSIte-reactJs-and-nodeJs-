import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { productsCreate } from "../../features/productsSlice";

const CreateProduct = () => {
  const [productImage, setProductImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDescription] = useState("");
  const [category, setCategory] = useState("Hoodies");
  const dispatch = useDispatch();

  console.log(productImage);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      productsCreate({ name, desc, price, category, image: productImage })
    );
  };

  const handleProductImageUpload = (e) => {
    const file = e.target.files[0];
    console.log(file);
    transformFileToBase64(file);
  };

  const transformFileToBase64 = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setProductImage(reader.result);
      };
    } else {
      setProductImage("");
    }
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
                setDescription(e.target.value);
              }}
            />
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
              <option value="Hoodies">Hoodies</option>
              <option value="Tshirt">Tshirt</option>
              <option value="Cap">Cap</option>
            </select>
          </div>
        </div>
        <div>
          <div className="flex border-black border-4 md:w-[20em] w-[15em] md:h-[20em] h-[15em] justify-center items-center ">
            {productImage ? (
              <>
                <img
                  src={productImage}
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
