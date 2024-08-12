import React, { useState } from "react";

const ProductInfoSectionCard = ({ product }) => {
  const [activeTab, setActiveTab] = useState("description");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mt-10">
      <div className="flex shadow-custom-black flex-col font-outfit">
        <div className="flex gap-10 px-12 border-b border-black border-opacity-10">
          <button
            className={`text-24px font-medium py-2 px-4 ${
              activeTab === "description" ? "border-b-2 border-black" : ""
            }`}
            onClick={() => handleTabClick("description")}
          >
            Description
          </button>
          <button
            className={`text-24px font-medium py-2 px-4 ${
              activeTab === "additional-info" ? "border-b-2 border-black" : ""
            }`}
            onClick={() => handleTabClick("additional-info")}
          >
            Specification
          </button>
        </div>

        <div className="px-12 py-4 w-full">
          {activeTab === "description" && (
            <div className="transition-all py-4 duration-300 ease-in-out">
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
          )}
          {activeTab === "additional-info" && (
            <div className="transition-all py-4 duration-300 ease-in-out flex-col gap-6">
              {product?.product?.item?.product_description
                ?.bullet_descriptions &&
              product?.product?.item?.product_description?.bullet_descriptions
                .length > 0 ? (
                <ul>
                  {product?.product?.item?.product_description?.bullet_descriptions.map(
                    (description, index) => (
                      <li
                        key={index}
                        dangerouslySetInnerHTML={{ __html: description }}
                      />
                    )
                  )}
                </ul>
              ) : (
                <p>No additional details available</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductInfoSectionCard;
