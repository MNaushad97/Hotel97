import React from "react";

function Cards(props) {
  return (
    <div
      className="card m-2.5  rounded-[10px] overflow-hidden shadow-[0_6px_18px_-9px_rgba(0,0,0,0.75)]
        cursor-pointer transition-transform duration-100 ease-in
        hover:scale-[1.07] hover:shadow-[0_10px_18px_-9px_rgba(0,0,0,0.80)]"
    >
      <img
        src={props.src}
        alt=""
        className=" object-cover min-h-[200px] min-w-[150px] "
      />
      <div className="card__info mt-[-9px] rounded-[10px] p-5 border-[1]">
        <h2 className="text-[18px] font-semibold">{props.title}</h2>
        <h4 className="text-[14px] font-light mt-2 mb-2">
          {props.description}
        </h4>
        <h3>{props.price}</h3>
      </div>
    </div>
  );
}

export default Cards;

/*

  .card__info > h2 {
    font-size: 18px;
    font-weight: 600;
  }
  
  .card__info > h4 {
    font-size: 14px;
    font-weight: 300;
    margin-top: 8px;
    margin-bottom: 8px;

.card > img {
  object-fit: fill;
  min-width: 300px;
  min-height: 200px;
  width: 100%;
}

.card__info {
    margin-top: -9px;
    border-radius: 10px;
    padding: 20px;
    padding-top: 20px;
    border: 1;
  }
 

.card {
  margin: 10px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 6px 18px -9px rgba(0, 0, 0, 0.75);
  transition: transform 100ms ease-in;
  cursor: pointer;
}

.card:hover {
  transform: scale(1.07);
}

 } */
