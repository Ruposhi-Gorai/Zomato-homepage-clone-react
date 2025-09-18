import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function RestaurantList() {
  const [rest, setRest] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/recipes", {})
      .then((res) => {
        setRest(res.data.recipes);
        // console.log(res.data.recipes);
      })
      .catch(() => {
        toast.error("something went wrong!");
      });
  }, []);

  return (
    <>
      <div className=" mx-auto  w-full mb-10 max-w-6xl">
        <h1 className="text-3xl p-5">Chhindwara Restaurants</h1>
        <div className="flex flex-wrap gap-10 p-4">
          {rest.map((v, i) => {
            return (
              <div className="w-full md:max-w-[30%] p-5 bg-white rounded-xl shadow-md hover:shadow-lg cursor-pointer overflow-hidden">
                {/* <!-- Product Image --> */}
                <div className="relative w-full h-50 overflow-hidden rounded-lg">
                  {/* Blurred placeholder */}
                  <motion.div
                    className="absolute inset-0 bg-gray-200 blur-lg scale-110"
                    animate={{ opacity: isLoaded ? 0 : 1 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Actual Image */}
                  <motion.img
                    src={v.image}
                    alt={v.name}
                    className="w-full h-50 object-cover rounded-lg"
                    loading="lazy"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                    onLoad={() => setIsLoaded(true)}
                  />
                </div>

                {/* <!-- Content --> */}
                <div className="p-4">
                  {/* <!-- Name + Rating --> */}
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {v.name}
                    </h3>
                    <div className="flex items-center text-gray-500 text-sm">
                      <span className="ml-1 text-white bg-green-700 p-1 rounded-lg text-[16px]">
                        {v.rating}★
                      </span>
                    </div>
                  </div>

                  {/* <!-- Price --> */}
                  <div className="mt-2 text-right">
                    <span className="text-lg font-medium text-gray-600">
                      {v.cookTimeMinutes} mins
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
