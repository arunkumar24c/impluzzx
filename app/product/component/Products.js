import React from "react";

const Products = () => {
  return (
    <div>
      <div className="brand-container py-5 px-5">
        <h1 className="py-10 text-[black] text-[45px] text-center">Products</h1>
        <div>
          <h1 className="text-[25px] font-bold text-[red] leading-normal">
            {" "}
            Types of Packaging :
          </h1>
          <div className="py-4 px-1">
            <h1 className="text-[20px] py-2">Boxes and Crates</h1>
            <p className="text-justify font-medium text-[18px] leading-normal">
              Boxes for packaging are durable and covered on all surfaces so
              that items remain safe. In contrast, crates usually have their
              sides open, but their tops and bottoms are strong.
            </p>
          </div>
          {/* 2 */}
          <div className="py-4 px-1">
            <h1 className="text-[20px] py-2">Paperboard boxes</h1>
            <p className="text-justify font-medium text-[18px] leading-normal">
              To make it, fibrous materials from wood or reused wastepaper are
              transformed into pulp, then bleached out. There are numerous
              grades of cardboard packaging, each of which is appropriate for
              various packaging requirements. It is lightweight yet robust.
            </p>
          </div>
          {/* 3 */}
          <div className="py-4 px-1">
            <h1 className="text-[20px] py-2"> Corrugated boxes</h1>
            <p className="text-justify font-medium text-[18px] leading-normal">
              It is generally known as cardboard boxes. There are also various
              types of corrugated boxes based on their strength and durability.
            </p>
          </div>
          {/* 4 */}
          <div className="py-4 px-1">
            <h1 className="text-[20px] py-2"> Plastic boxes</h1>
            <p className="text-justify font-medium text-[18px] leading-normal">
              It is crucial to use airtight plastic packaging containers to
              conserve food quality and remove contamination. Furthermore,
              plastic packaging does not break easily and can be accumulated
              with food in severe conditions.
            </p>
          </div>
          {/* 5 */}
          <div className="py-4 px-1">
            <h1 className="text-[20px] py-2"> Clipboard packaging</h1>
            <p className="text-justify font-medium text-[18px] leading-normal">
              Chipboard packaging is an economical packaging option for products
              from businesses such as electronics, medical, food, beverages, and
              cosmetic. Chipboard is created of salvaged paper stock and can
              effortlessly be cut, folded, and created.
            </p>
          </div>
          {/* 6 */}
          <div className="py-4 px-1">
            <h1 className="text-[20px] py-2"> Poly bag</h1>
            <p className="text-justify font-medium text-[18px] leading-normal">
              This is one of the most popular types of packaging and it can
              include numerous products including food, flowers, waste,
              chemicals, magazines, etc. It is essentially simple to produce
              poly bags, making it viable to completely customize the design,
              style, and size, but remain eco. Additionally, poly bags can also
              be recycled, based on the construction. Poly bags are sturdy yet
              lightweight, flexible and reusable.
            </p>
          </div>
          {/* 7 */}
          <div className="py-4 px-1">
            <h1 className="text-[20px] py-2">Bottles and Jars</h1>
            <p className="text-justify font-medium text-[18px] leading-normal">
              Bottles and jars provide exceptional product protection when they
              are loaded or transported. They come in a range of materials,
              including Glass, Plastic, Tin, Ceramic. You can obtain
              high-quality containers for essential oils, candles, food, etc.
            </p>
          </div>
          <hr className="text-black border" />
          {/* 8 */}
          <div className="py-5">
            <h2 className="text-[red]">
              Factors that influence packaging decisions:
            </h2>
            <ul className="list-disc pl-8 py-4">
              <li>Protection</li>
              <li>Security </li>
              <li>Cost</li>
              <li>Mode of Transport</li>
              <li>Wood Packaging</li>
            </ul>
            <p className="text-justify font-medium text-[18px] leading-normal">
              To know more about packaging as well as shipping and logistics
              contact us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
