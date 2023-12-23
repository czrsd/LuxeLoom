import React from "react";

const Loom = () => {
  return (
    <section className="h-[800px] bg-Loom bg-no-repeat bg-cover bg-center py-20">
      <div className="container mx-auto flex h-full">
        {/* text */}
        <div className="flex flex-col justify-center">
          <h1 className="uppercase text-[55px] md:text-[70px] leading-[0.8] font-semibold mb-4 text-white text-shadow-stroke">
            Fashion Forward
            <br />
            <span className="font-normal text-5xl">
              Unveiling Our Latest Collection!
            </span>
          </h1>
          <a
            href="#products"
            className="self-start uppercase font-semibold border-b-2 border-white text-white"
          >
            Discover more
          </a>
        </div>
      </div>
    </section>
  );
};

export default Loom;
