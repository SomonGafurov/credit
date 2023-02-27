// import { Card } from "react-credit-card";
import React, { useState } from "react";
import { useEffect } from "react";
import "./cards.css";

export default function Cards() {
  const [cards, setCards] = useState(
    JSON.parse(localStorage.getItem("cardsInfo"))
      ? JSON.parse(localStorage.getItem("cardsInfo"))
      : []
  );
  const [card, setCard] = useState({
    number: 0,
    name: "",
    expiry: "",
    cvc: "",
  });

  const onChangeCard = (e) => {
    setCard({
      ...card,
      [e.target.name]: e.target.value,
    });
  };

  const sendInfoToLS = () => {
    const newCard = {
      id: Math.random(),
      ...card,
    };
    setCards([...cards, newCard]);
    console.log(cards);
    // localStorage.setItem("cardsInfo", JSON.stringify(cards));
  };

  useEffect(() => {
    localStorage.setItem("cardsInfo", JSON.stringify(cards));
  }, [cards]);

  const cardsFromLC = JSON.parse(localStorage.getItem("cardsInfo"));

  return (
    <div>
      <form className="form-card">
        <input
          type="tel"
          name="number"
          placeholder="введите номер"
          onChange={(e) => onChangeCard(e)}
          className="card-input"
        />
        <input
          type="textl"
          name="name"
          className="card-input"
          placeholder="введите имя"
          onChange={(e) => onChangeCard(e)}
        />
        <input
          type="tel"
          name="expiry"
          placeholder="введите дату"
          onChange={(e) => onChangeCard(e)}
          className="card-input"
        />
        <input
          type="tel"
          name="cvc"
          className="card-input"
          placeholder="введите cvc"
          onChange={(e) => onChangeCard(e)}
        />
        <button onClick={sendInfoToLS} className="send-btn">
          Send
        </button>
      </form>
      <div>
        {cardsFromLC && (
          <div>
            {cardsFromLC.map((card) => {
              return (
                <div key={card.id} className="cards-connect">
                  <img src="./logo_ru.png" alt="" className="image-card" />
                  <img src="./visa.jfif" alt="" className="image-visa" />
                  <div className="cvc">{card.number}</div>
                  <div className="cvc-1">{card.name}</div>
                  <div className="cvc-2">{card.expiry}</div>
                  <div className="cvc-2">{card.cvc}</div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
