import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const MainPage = () => {
  const navigate = useNavigate();
  const [selectDepartment, setSelectDepartment] = useState("Sales");

  const handleDeptChange = (e) => {
    setSelectDepartment(e.target.value);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Menu Bar */}
      <div className="bg-gray-300 p-4 flex justify-between items-center">
        <h1 className="text-xl sm:text-3xl font-serif">Chat Bot</h1>
        <div className="flex gap-4">
          <select
            value={selectDepartment}
            onChange={handleDeptChange}
            className="border-2 px-2 py-1 rounded bg-gray-200"
          >
            <option value="Sales">Sales</option>
            <option value="Marketing">Marketing</option>
            <option value="Support">Support</option>
          </select>
          <button
            onClick={handleLogout}
            className="border-2 border-black rounded px-2 py-1 bg-gray-300 hover:bg-gray-600"
          >
            Logout
          </button>
        </div>
      </div>

      
      <div className="flex-grow p-4 overflow-auto">
        
        <p className="text-gray-500 text-center mt-10">
          Start typing your {selectDepartment.toLowerCase()} query below...
        </p>
      </div>

      <div className="p-4 bg-white shadow-inner sticky bottom-0">
        <div className="relative w-full">
          <HiOutlineQuestionMarkCircle className="absolute text-2xl sm:text-3xl left-3 top-1/2 transform -translate-y-1/2 text-blue-600" />
          <MdOutlineKeyboardDoubleArrowRight className="absolute text-2xl sm:text-3xl text-blue-600 right-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder={`Enter your ${selectDepartment.toLowerCase()} query here...`}
            className="w-full border-2 rounded pr-12 py-2 pl-12 placeholder-blue-600 text-base sm:text-2xl font-sans border-gray-300"
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
