import { useState } from "react";
import image from "./nike_grinch.jpg";
import "./style.css";

function App() {
  const [detalis, setDetalis] = useState(false);
  const [basket, setBasket] = useState(false);

  return (
    <main>
      <div className="img">
        <img src={image} alt="1" />
      </div>

      <div className="infa_wrapper">
        <div className="infa">
          <div>Nike Dunk Low 'Grinch'</div>
          <div className="price">$850</div>
        </div>
        <div className="btn_details">
          <button onClick={() => setDetalis(!detalis)}>Детали</button>
        </div>
      </div>

      {detalis && (
        <div className="properties">
          <div className="lorem">
            The mud-encased, CPFM Flea 1 was a precursor of things to come with
            the "Overgrown" or "Grinch" Dunk Low.
          </div>
          <div className="btn_red">
            <button onClick={() => setDetalis(!detalis)}>✖</button>
          </div>
        </div>
      )}

      <div className="text">
        {" "}
        <p>
          While there is some confusion regarding which monicker will be the
          official name come release day, this might just be the most insane
          sneaker ever put to market.
        </p>
        {!basket ? (
          <button className="add" onClick={() => setBasket(true)}>
            Добавить в корзину
          </button>
        ) : (
          <button
            className="add"
            onClick={() => setBasket(false)}
            style={{ opacity: "0.7", cursor: "not-allowed" }}
            disabled={basket}
          >
            Уже в корзине
          </button>
        )}
        <div className="delete_baskets">
          {basket && (
            <button onClick={() => setBasket(false)}>Удалить из корзины</button>
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
