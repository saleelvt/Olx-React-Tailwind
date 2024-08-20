import { collection, getDocs } from "firebase/firestore";
import React, { createContext, useContext, useEffect, useState } from "react";
import { db } from "../firebase/config";

const DataContext = createContext();

export default function DataProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(8);

  useEffect(() => {
    getDataFromDb();
  }, [limit]);

  const getDataFromDb = () => {
    getDocs(collection(db, "products")).then((snapshot) => {
      const products = [];
      snapshot.forEach((snap) => {
        products.push({ productId: snap.id, ...snap.data() });
      });
      setData(products);
    });
  };

  const incrementLimit = () => {
    setLimit((prevLimit) => prevLimit + 8);
    setLoading(true);
  };

  return (
    <DataContext.Provider value={{ data, loading, error, incrementLimit }}>
      {children}
    </DataContext.Provider>
  );
}


export const useData = () => useContext(DataContext);