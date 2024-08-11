import React from "react";

const ProductInfoSectionCard = ({ product }) => {
  return (
    <div className="container flex flex-col font-outfit">
      <div className="px-12 py-4 w-full shadow-custom-black">
        <div className="mt-4 w-full flex justify-between items-center ">
          <h2 className="text-24px border-b-2 w-max border-black font-medium leading-relaxed">
            Additional information
          </h2>
        </div>
        <div className="transition-all py-4 duration-300 ease-in-out ">
          <div
            className={`${
              product?.product?.item?.product_description?.soft_bullets?.bullets
                ? "flex"
                : "hiddeen"
            }flex-col gap-6`}
          >
            {product?.product?.item?.product_description?.soft_bullets
              ?.bullets &&
              product?.product?.item?.product_description?.soft_bullets?.bullets
                .length > 0 && (
                <ul className="ml-3">
                  {product?.product?.item?.product_description?.soft_bullets?.bullets.map(
                    (bullet, index) => (
                      <li key={index} className="list-disc mt-2">
                        {bullet}
                      </li>
                    )
                  )}
                </ul>
              )}
          </div>
          <div className="mt-4">
            <p
              className="text-18px"
              dangerouslySetInnerHTML={{
                __html:
                  product?.product?.item?.product_description
                    ?.downstream_description,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoSectionCard;
