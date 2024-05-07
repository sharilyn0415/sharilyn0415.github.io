import React, { useState, useEffect } from "react";
import { API } from "./common/constants";

const Progress = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(API.progress)
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return <>message:{message}</>;
};

export default Progress;
