import React from "react";

export default function Loading() {
  return (
    // TODO: Adicionar um loading melhor (skeleton com tailwind)
    <>
      <div className="relative inline-flex">
        <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
        <div className="w-8 h-8 bg-blue-500 rounded-full absolute top-0 left-0 animate-ping"></div>
        <div className="w-8 h-8 bg-blue-500 rounded-full absolute top-0 left-0 animate-pulse"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </>
  );
}
