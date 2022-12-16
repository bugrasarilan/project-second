import React from "react";
import Title from "../ui/Title";

const Categorywrapper = () => {
  return (
<div className="flex flex-col items-center w-full" >
<Title addClass= " text-[40px]"> ürünler</Title>
<div>
  <button className="px-6 py-2  rounded-3xl bg-secondary text-white"> kategori ismi</button> 
  <button className="px-6 py-2  rounded-3xl bg-secondary text-white"> kategori ismi</button> 
  <button className="px-6 py-2  rounded-3xl bg-secondary text-white"> kategori ismi</button> 
</div>
</div>
  );
};

export default Categorywrapper;
