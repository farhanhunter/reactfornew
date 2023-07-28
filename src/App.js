import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ReviewItems from './Reviews';
import PropTypes from 'prop-types';

function App() {
  return (
    <div className="Parentbox">
      <FotoProduk />
      <ProdukInfo isDiscount="yes" name="Gojo Satoru" category="LEBARAN" />
      <ReviewItems />
    </div>
  );
}

function FotoProduk() {
  return (
    <div className="Foto">
      <img src="Sneakers.png" />
    </div>
  );
}

function CheckDiscount(props) {
  const { isDiscount, discount } = props;
  if (isDiscount == "yes") {
    return <p>Discount {discount}% Off</p>;
  } else if (isDiscount == "coming") {
    return <p>Akan Ada Discount ... </p>;
  } else {
    return <p>Belum Ada Discount</p>;
  }
}

function ProdukInfo(props) {
  const { category, name, isDiscount } = props;
  const benefits = [
    "IP Rating 68",
    "Anti Debu",
    "Bahan Dingin dengan Pipe Chamber",
  ];
  const listBenefits = benefits.map((itemBenefits) => <li key={itemBenefits}>{itemBenefits}</li>);
  return (
    <div>
      <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Title">{name}</h1>
        <p className="Price">IDR 73.309.399</p>
        <CheckDiscount isDiscount={isDiscount} discount={50} />
        <p className="Info">
          One of the most recognizable shoes in the AJ collection, the Air
          Jordan 3 Retro features lightweight, visible cushioning just like the
          original from '88. Signature details and materials celebrate the
          game-changing icon.
        </p>
        <ul>{listBenefits}</ul>
        <a onClick={(e) => TambahCart(name, e)} href="#">
          Add to Cart
        </a>
      </div>
    </div>
  );
}
function TambahCart(e) {
  return console.log("Membeli " + e);
}

CheckDiscount.propTypes = {
  discount: PropTypes.number.isRequired
};

export default App;
