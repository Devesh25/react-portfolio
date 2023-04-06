import React, { useEffect } from "react";
import { ReactDOM } from "react";

const Data = () => {
  let isLoading = "Data is Coming From Server Please Wait a While";
  let API = "http://hn.algolia.com/api/v1/search?query=html";

  const fechApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fechApiData(API);
  }, []);
  return (
    <>
      <h1>News Post Data</h1>
      <h2>{isLoading}</h2>
    </>
  );
};

export default Data;
