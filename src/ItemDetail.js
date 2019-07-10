import React, { useState, useEffect } from "react";

export default function Item({ match }) {
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setitem] = useState({
    images: {}
  });

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://fortnite-public-api.theapinetwork.com/prod09/item/get?ids=${
        match.params.id
      }`
    );
    const item = await fetchItem.json();
    setitem(item);
  };

  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item.images.transparent} alt="" />
      <p />
    </div>
  );
}
