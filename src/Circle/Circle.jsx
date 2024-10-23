import React from 'react';

const Circle = (props) => {
  return (
    <div 
      className={`${props.color} rounded-full w-[75px] h-[75px] border border-2 border-slate-800`}
      onClick={props.onClick}>
        {/*connect four icon*/}
    </div>
  );
}

export default Circle;
