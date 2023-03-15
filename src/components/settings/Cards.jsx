import React, { useState } from "react";
import { masterCard, visaCard } from "../../shared/assets";
import { CheckCircle, RadioButtonUnchecked } from "@mui/icons-material";
import { Box } from "@mui/material";
const cards = [
  {
    img: visaCard,
    start: "Visa ending in 1234",
    end: "Expiry 06/2024",
  },
  {
    img: masterCard,
    start: "Mastercard ending in 1234",
    end: "Expiry 06/2024",
  },
];

function Cards() {
  const [selectedCard, setSelectedCard] = useState(0);

  const handleClick = (cardIndex) => {
    setSelectedCard(cardIndex);
  };
  return (
    <>
      {cards.map((card, index) => (
        <Box
          sx={{
            backgroundColor: selectedCard === index ? "#7f56d92c" : "",
            borderRadius: "8px",
          }}
        >
          <div
            className={`flex items-start justify-between border-[1px] h-[130px]  rounded-lg  py-4 px-3 cursor-pointer`}
            key={index}
            onClick={() => handleClick(index)}
          >
            <div className="flex w-full">
              <div className="flex items-start gap-4">
                <img src={card.img} alt={card.start} />
                <div className="flex flex-col gap-[0.3rem]">
                  <span className="text-[16px] font-medium">{card.start}</span>
                  <span className="text-[14px]">{card.end}</span>
                  <span className="text-[14px]">
                    Set as default <b className=" ml-2 text-[#6941C6]">Edit</b>
                  </span>
                </div>
              </div>
            </div>

            {index === selectedCard ? (
              <CheckCircle
                onClick={() => handleClick(index)}
                style={{
                  color: "#7f56d9",
                }}
              />
            ) : (
              <RadioButtonUnchecked onClick={() => handleClick(index)} />
            )}
          </div>
        </Box>
      ))}
    </>
  );
}

export default Cards;
