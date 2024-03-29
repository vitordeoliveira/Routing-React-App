import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setitems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get"
    );
    const items = await data.json();
    console.log(items.items);
    setitems(items.items);
  };

  return (
    <div>
      {items.map(item => (
        <h1 key={item.itemid}>
          <Link to={`/shop/${item.itemid}`} id={item.itemid}>
            {item.name}
          </Link>
        </h1>
      ))}
    </div>
  );
}
