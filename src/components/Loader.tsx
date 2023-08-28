import React from "react";

const Loader = () => {
  return (
    <div className="fixed left-0 top-0 z-50 w-full p-[30px] overflow-x-hidden overflow-y-auto md:inset-0 max-h-full">
      <div className="relative right-0 h-full flex justify-end">
        <div className="relative w-[calc(50%-20px)]">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
            <div className="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-red ">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full border-2 border-white"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
