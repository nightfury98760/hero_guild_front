// src/components/Dropdown.js
import React, { useState, useRef, useEffect } from "react";

const Dropdown = ({onSelect}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Tasks");
  const dropdownRef = useRef(null);

  const options = ["Tasks", "Daily Tasks", "Active Tasks","Completed Tasks"];
  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelected(option);
    onSelect(option)
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block w-full pr-2" ref={dropdownRef}>
      <div>
        <button
          onClick={toggleDropdown}
          className="flex flex-row w-full h-[48px] font-poppins text-white focus:text-white justify-between rounded-[16px] focus:border-1  focus:border-white  text-left items-center bg-[#FFFFFF0A]"
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          
          <div className="flex justify-start ml-2">
          <div className="flex justify-self-start">{selected}</div></div>
          <svg
            className="ml-1 h-[20px] w-[20px] flex"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06 0L10 10.434l3.71-3.224a.75.75 0 111.04 1.08l-4.25 3.5a.75.75 0 01-1.04 0l-4.25-3.5a.75.75 0 010-1.08z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute my-1.5 py-3 flex flex-row w-full  font-poppins text-white focus:text-white justify-center rounded-[24px] focus:border-1  focus:border-white items-center bg-gray-600 z-10">
          <div
            className="w-full flex-wrap px-4"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option, index) => (
              <button
                key={option}
                onClick={() =>
                  handleSelect(option)
                }
                className="flex mr-2 my-2 w-full h-[48px] font-poppins text-[#FFFFFF66] hover:text-white focus:text-white justify-between rounded-[16px] text-left items-center bg-[#FFFFFF0F] "
                role="menuitem"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
