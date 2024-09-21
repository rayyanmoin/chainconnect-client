/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";
import { subgraphURL } from "../utils/common";
import { getAllPlatformPostsQuery } from "@/utils/subgrapgh";

const Home = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const postAPi = await axios.post(subgraphURL, getAllPlatformPostsQuery());
        setPost(postAPi.data.data.posts);
        return postAPi.data.data.posts;
      } catch (error) {
        console.log(error);
      }
    };
    getPosts();
  },[]);

  return <div className="pt-14 min-h-screen">HOME</div>;
};

export default Home;
