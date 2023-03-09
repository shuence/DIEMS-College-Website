import React from "react";
import { cards } from "../../Data/cardsData";


const Cards = () => {
  return (
    <div>
      <div className="flex flex-col gap-8 py-0 px-8">
        <div className="flex gap-8">
          {cards.map((card) => (
            <div className="flex flex-col p-8 gap-4 flex-1 justify-space-between">
              <img src={card.image} alt="Images" />
              <span className="text-centre">
                <button className="coursor-pointer" /*onClick={shuence}*/>
                  {card.heading}
                </button>
              </span>
              <span className="text-centre">
                <button className="coursor-pointer" /*onClick={shuence}*/>
                  {card.details}
                </button>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
