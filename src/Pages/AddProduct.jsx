import React, { useContext, useRef, useState } from "react";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { storage, db } from "../firebase/config";
import { addDoc, collection } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImage] = useState(null);

  const navigate = useNavigate();
  const user = useContext(AuthContext);
  const notify = () => toast.success("successfully added the product");

  const [productNameState, setProductNameState] = useState(false);
  const [categoryState, setCategoryState] = useState(false);
  const [priceState, setPriceState] = useState(false);
  const [imageState, setImageState] = useState(false);

  const productRef = useRef();
  const categoryRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const date = new Date();
    if (
      productName?.trim() === null ||
      productName?.trim() === "" ||
      category?.trim() === null ||
      category?.trim() === "" ||
      price?.trim() === null ||
      price?.trim() === undefined ||
      price?.trim() === "" ||
      imageUrl === null
    ) {
      if (
        productName?.trim() === null &&
        category?.trim() === null &&
        price?.trim() === null
      ) {
        productRef.current.focus();
        setProductNameState(true);
        setCategoryState(true);
        setPriceState(true);
        setImageState(true);
        setTimeout(() => {
          setProductNameState(false);
          setCategoryState(false);
          setPriceState(false);
          setImageState(false);
        }, 3000);
      } else {
        if (
          productName === null ||
          productName.trim() === null ||
          productName.trim() === ""
        ) {
          setProductNameState(true);
          setTimeout(() => {
            setProductNameState(false);
          }, 3000);
        }
        if (
          category === null ||
          category?.trim() === null ||
          category?.trim() === ""
        ) {
          setCategoryState(true);
          setTimeout(() => {
            setCategoryState(false);
          }, 3000);
        }
        if (
          price === null ||
          price?.trim() === null ||
          price?.trim() === "" ||
          price === undefined
        ) {
          setPriceState(true);
          setTimeout(() => {
            setPriceState(false);
          }, 3000);
        }
        if (imageUrl === null || imageUrl === undefined) {
          setImageState(true);
          setTimeout(() => {
            setImageState(false);
          }, 3000);
        }
      }
      return;
    } else {
      const verifiedPrice = Math.abs(price);
      const storageRef = ref(storage, `products/${imageUrl.name}`);
      uploadBytes(storageRef, imageUrl).then(({ metadata }) => {
        getDownloadURL(storageRef).then((url) => {
          addDoc(collection(db, "products"), {
            userId: user.userId,
            productName,
            category,
            price: verifiedPrice,
            imageUrl: url,
            createdAt: date,
          })
            .then(() => {
              console.log("product added successfully");
              notify();
              navigate("/");
            })
            .catch(() => {
              console.log("an error occured!");
            });
        });
      });
    }
  };

  return (
    <>
      <div className="container mx-auto pt-20">
        <h2 className="text-2xl font-bold mb-4">Add Product</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label
              htmlFor="productName"
              className="block text-sm font-medium text-gray-600"
            >
              Product Name
            </label>
            <input
              type="text"
              id="productName"
              name="productName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-600"
            >
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-600"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-600"
            >
              Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Add Product
          </button>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
