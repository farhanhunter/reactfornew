import React from "react";
import "./App.css";

function Reviews() {
  // TODO: dummy JSON
  const users = [
    {
      id: 1,
      name: "Suranto",
      review: "Harganya murah tapi kualitasnya flagship. Amazing.",
      photo: "https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      name: "Sasaki",
      review: "Aku ingin membeli ini dengan banting tulang. Great.",
      photo: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      name: "Saitama",
      review: "Pengiriman cepat gratis ongkir. Shopee.",
      photo: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
  const listReview = users.map((itemReview) => (
    <div key={itemReview.id} className="Item">
      <img src={itemReview.photo} />
      <div className="User">
        <h3>{itemReview.name}</h3>
        <p>{itemReview.review}</p>
      </div>
    </div>
  ));
  return (
    <div className="Review-box">
      <h2>Reviews</h2>
      {listReview}
    </div>
  );
}

export default Reviews;