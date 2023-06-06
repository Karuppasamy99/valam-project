import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { dropDownValueChange } from "../utils/HearderSlice";
const NavBar = () => {
  const [value, setValue] = useState("Vendor List");
  const [purchaseMgmt, setPurchaseMgmt] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    getSelectValue();
  }, [value]);

  function getSelectValue() {
    dispatch(dropDownValueChange(value));
  }
  return (
    <div className="w-1/5 shadow-lg m-5">
      <h1 className="p-5 m-5 text-5xl">Valam</h1>

      <ul className="mt-5">
        <li className=" p-2  hover:text-violet-500">DashBoard</li>
        <li
          className="p-2 cursor-pointer  hover:text-violet-500"
          onClick={() => setPurchaseMgmt(!purchaseMgmt)}
        >
          Purchase Mgmt
        </li>
        {purchaseMgmt && (
          <select
            onClick={(e) => setValue(e.target.value)}
            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500  hover:text-violet-500"
          >
            <option value="Vendor List">Vendor List</option>
            <option value="Purchase Request">Purchase Request</option>
            <option value="Purchase Order">Purchase Order</option>
            <option value="Invoice Creation">Invoice Creation</option>
            <option value="Open Item & Clearing">Open Item & Clearing</option>
          </select>
        )}
        <li className=" hover:text-violet-500 p-2">Sales Management</li>
        <li className=" hover:text-violet-500 p-2">Inventory</li>
        <li className=" hover:text-violet-500 p-2">Reports</li>
        <li className=" hover:text-violet-500 p-2">Books</li>
        <li className=" hover:text-violet-500 p-2">Lead Management</li>
        <li className=" hover:text-violet-500 p-2">T-forms</li>
      </ul>
    </div>
  );
};

export default NavBar;
