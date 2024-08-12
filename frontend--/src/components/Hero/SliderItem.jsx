import React from 'react';
import Button from '../Shared/Button'; 

const SliderItem = ({ data }) => {
  return (
    <div className="relative grid grid-cols-1 sm:grid-cols-2 items-center">
      {/* Texto */}
      <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left relative z-10">
        <h1 className="text-2xl sm:text-6xl lg:text-2xl font-bold">
          {data.subtitle}
        </h1>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
          {data.title}
        </h1>
        <h1 className="text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold">
          {data.category}
        </h1>
        <div>
          <Button text="Comprar Agora" bgColor="bg-primary" textColor="text-white" />
        </div>
      </div>
      {/* Imagem */}
      <div className="relative flex justify-center items-center sm:justify-end">
        <img
          src={data.img}
          alt={data.title + " imagem"}
          className="w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] object-contain absolute transform -translate-y-1/4 z-20"
        />
      </div>
    </div>
  );
};

export default SliderItem;
