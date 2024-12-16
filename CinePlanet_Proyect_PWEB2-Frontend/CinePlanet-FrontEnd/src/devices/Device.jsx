import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Device({ table }) {
  const [data, setData] = useState([]);
  const endpoint = `http://localhost:8000/${table}/`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(endpoint);
        setData(response.data);
      } catch (error) {
        console.error(`Error fetching data from ${endpoint}:`, error);
      }
    };

    fetchData();
  }, [endpoint]);
}

export default Device;
