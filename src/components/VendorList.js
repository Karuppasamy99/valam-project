import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import { getFilterVendorList } from "../utils/helper";

const VendorList = () => {
  const [vendorList, setVendorList] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredVendorList, setFilteredVendorList] = useState([]);
  const dropDownValue = useSelector((store) => store.menu.dropDownValue);
  useEffect(() => {
    getVendorList();
  }, []);

  async function getVendorList() {
    const response = await fetch(
      "http://erp.ideassionlive.in/api/v1/vendor/getall"
    );
    const data = await response.json();
    setVendorList(data);
    setFilteredVendorList(data);
  }
  return (
    <div className="w-4/5 shadow-inner">
      <Header />
      <div className="m-3 mt-20  p-3 bg-pink-300  rounded-lg">
        <input
          type="text"
          placeholder="Search Company"
          value={search}
          name={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className=" m-4 bg-purple-500 text-white rounded-md"
          onClick={() => {
            const data = getFilterVendorList(search, vendorList);
            setFilteredVendorList(data);
          }}
        >
          Search
        </button>
        <select className="ml-20" name="cars" id="cars">
          <option value="date">INR</option>
        </select>
        <select className="ml-80" name="cars" id="cars">
          <option value="EN">English</option>
        </select>
      </div>
      <h1 className="text-4xl p-5">{dropDownValue}</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-violet-100 border-b">VendorId</th>
            <th className="py-2 px-4 bg-violet-100 border-b">Ven Id</th>
            <th className="py-2 px-4 bg-violet-100 border-b">Company</th>
            <th className="py-2 px-4 bg-violet-100 border-b">Category</th>
            <th className="py-2 px-4 bg-violet-100 border-b">Catelogue</th>
            <th className="py-2 px-4 bg-violet-100 border-b">Bank Details</th>
          </tr>
        </thead>
        {filteredVendorList &&
          filteredVendorList.map((vendor, index) => (
            <>
              <tbody>
                <tr
                  key={vendor.vendorId}
                  className="m-20 bg-gray-100 shadow-lg"
                >
                  <td className=" py-2 px-4 border-b text-center">
                    {vendor.vendorId}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {vendor.venId}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {vendor.company}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {vendor.category}
                  </td>
                  <td className="h-4 w-4 text-center">
                    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 dark:bg-violet-600">
                      <span className="font-medium text-gray-600 dark:text-gray-300">
                        copy
                      </span>
                    </div>
                  </td>
                  <td className="py-2 px-4 h-4 w-4 border-b text-center">
                    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 dark:bg-violet-600">
                      <span className="font-medium text-gray-600 dark:text-gray-300">
                        bank
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </>
          ))}
      </table>
    </div>
  );
};

export default VendorList;
