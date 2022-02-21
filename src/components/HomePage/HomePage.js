import "./HomePage.css";

import React, { useEffect, useRef, useState } from "react";

const HomePage = () => {
  // API's
  const postsApi = "https://jsonplaceholder.typicode.com/posts";
  const photosApi = "https://jsonplaceholder.typicode.com/photos";

  //State for Storing Full API Data
  const [postsData, setPostsData] = useState([]);
  const [photosData, setPhotosData] = useState([]);

  const getData = async () => {
    //   Function for API Calls
    const fetchData = async (x) => {
      let res = await fetch(x);
      let data = await res.json();
      return data;
    };
    const getPosts = await fetchData(postsApi);
    const getPhotos = await fetchData(photosApi);
    setPostsData(getPosts);
    setPhotosData(getPhotos);
  };

  // UseEffect for Stroing Over API Data
  useEffect(() => {
    getData();
  }, []);

  const postsFinal = [postsData[0], postsData[1]];
  const photosFinal = [photosData[0], photosData[1]];
//   console.log(postsFinal[0]);

  return <div>This is Home Page</div>;
};

export default HomePage;
