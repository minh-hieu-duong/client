import Image from "next/image";
import React from "react";

const data = [
  {
    image:
      "https://demo-kalles-4-4.myshopify.com/cdn/shop/files/Frame_1000001464.png?v=1675657121&width=400",
    id: 1,
    name: "Smartphones",
  },
  {
    image:
      "https://demo-kalles-4-4.myshopify.com/cdn/shop/files/Frame_1000001467.png?v=1675657121&width=400",
    id: 1,
    name: "Camera",
  },
];

function FeaturedCategories() {
  return (
    <section className="container">
      <h2 className="text-2xl font-medium">Featured Categories</h2>
      <div className="grid grid-cols-5">
        {data.map((cate) => (
          <div key={cate.id}>
            {cate.name}
            <Image
              src="/image/smartphone.png"
              alt="cate"
              width={160}
              height={160}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default React.memo(FeaturedCategories);
