import React from 'react';

interface CardProps {
  imgSrc: string;
  id: number;
 
}

const Card: React.FC<CardProps> = ({ imgSrc, id}) => {
  return (
    <>
      <div className="cards">
        <div className="card" key={id}>
            <div>
                <img className='front' src={imgSrc} alt="" />
                <div className='back' style={{width:'300px',height:'300px', backgroundColor:'orange'}}></div>
            </div>
         
        </div>
      </div>
    </>
  );
};

export default Card;