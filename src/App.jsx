import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MOSFETTable } from "./components/table";

function App() {
  const [toggleState, setToggleState] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("Product");
  const [activeItem10V, setActiveItem10V] = useState(0);
  const [activeItem5V, setActiveItem5V] = useState(0);
  const [activeItem4_5V, setActiveItem4_5V] = useState(0);
  const [activeItem2_5V, setActiveItem2_5V] = useState(0);
  const [activeItem1_8V, setActiveItem1_8V] = useState(0);
  const [activeItem4_5QG, setActiveItem4_5QG] = useState(0);
  const [activeItem10QG, setActiveItem10QG] = useState(0);
  const [activeItemR0JC, setActiveItemR0JC] = useState(0);
  const [activeItemPd, setActiveItemPd] = useState(0);

  const handleItemClick10V = (index) => {
    setActiveItem10V(index);
  };

  const handleItemClick5V = (index) => {
    setActiveItem5V(index);
  };

  const handleItemClick4_5V = (index) => {
    setActiveItem4_5V(index);
  };

  const handleItemClick2_5V = (index) => {
    setActiveItem2_5V(index);
  };

  const handleItemClick1_8V = (index) => {
    setActiveItem1_8V(index);
  };

  const handleItemClick4_5QG = (index) => {
    setActiveItem4_5QG(index);
  };

  const handleItemClick10QG = (index) => {
    setActiveItem10QG(index);
  };

  const handleItemClickR0JC = (index) => {
    setActiveItemR0JC(index);
  };

  const handleItemClickPd = (index) => {
    setActiveItemPd(index);
  };

  const handleNavItemClick = (item) => {
    setActiveNavItem(item);
  };

  const handleToggleChange = () => {
    setToggleState(!toggleState);
  };
  return (
    <>
      <main>
        <nav className="px-3 py-2 flex justify-evenly items-center shadow-2xl">
          <div className="flex justify-evenly space-x-10 text-[0.75rem] leading-[0.9075rem]">
            <p
              className={`cursor-pointer ${
                activeNavItem === "Product" ? "font-bold" : "font-medium"
              }`}
              onClick={() => handleNavItemClick("Product")}
            >
              Product
            </p>
            <p
              className={`cursor-pointer ${
                activeNavItem === "Agency" ? "font-bold" : "font-medium"
              }`}
              onClick={() => handleNavItemClick("Agency")}
            >
              Agency
            </p>
            <p
              className={`cursor-pointer ${
                activeNavItem === "About us" ? "font-bold" : "font-medium"
              }`}
              onClick={() => handleNavItemClick("About us")}
            >
              About us
            </p>
            <p
              className={`cursor-pointer ${
                activeNavItem === "Support" ? "font-bold" : "font-medium"
              }`}
              onClick={() => handleNavItemClick("Support")}
            >
              Support
            </p>
          </div>
          <div>
            <img
              src="main.png"
              className="w-[7.8125rem] h-[2.8125rem] relative top-[23px] cursor-pointer"
            />
          </div>
          <div className="flex justify-between space-x-4">
            <div className="flex justify-between items-center relative">
              <input
                id="main-search"
                type="text"
                placeholder="Part Search"
                className="w-[15.75rem] rounded-lg px-4 py-2 placeholder:text-[#4B4B4B] placeholder:opacity-80 outline-none border-none bg-[#E6E6E6]"
              />
              <FiSearch className="absolute right-[10%] text-gray-600 cursor-pointer" />
            </div>
            <select className="cursor-pointer outline-none border-none bg-[#E6E6E6] rounded-lg px-2 font-bold text-[0.625rem] leading-[0.605rem]">
              <option>En</option>
              <option>Ge</option>
              <option>Fr</option>
              <option>Sp</option>
            </select>
          </div>
        </nav>
        <div className="mt-10 px-44 flex justify-between items-center">
          <div>
            <select className="px-4 py-2 rounded-lg border-2 border-[#D5D5D5] text-[0.5rem] outline-none font-bold w-[12.5rem] text-[#747474] cursor-pointer">
              <option>
                Select Your <span className="font-bold">Product Category</span>
              </option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <span
              className={`ms-3 text-[0.5rem] ${
                !toggleState ? "font-bold" : ""
              } text-[#747474]`}
            >
              Product Type
            </span>
            <label className="relative inline-flex items-center mb-5 cursor-pointer mt-[1rem]">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={handleToggleChange}
              />
              <div class="w-9 h-5 bg-gray-200 rounded-full peer dark:bg-[#E6E6E6] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-black after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600"></div>
            </label>
            <span
              className={`ms-3 text-[0.5rem] ${
                !toggleState ? "" : "font-bold"
              } text-[#747474]`}
            >
              Package Type
            </span>
          </div>
        </div>
        <div className="px-44 border-b-2 border-[#E0E0E0] flex items-center mt-6 py-4">
          <p className="font-bold mr-20 uppercase">Specifications</p>
          <div className="flex justify-between w-full">
            <div className="flex space-x-6">
              <p className="uppercase text-[#19368A] font-bold cursor-pointer mr-4">
                Clear All
              </p>
              <select className="rounded-lg bg-[#F4F4F5] text-[0.5625rem] text-[#282C3F] outline-none cursor-pointer">
                <option>Packages</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
              <select className="rounded-lg bg-[#F4F4F5] text-[0.5625rem] text-[#282C3F] outline-none cursor-pointer">
                <option>Plolarity</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
              <select className="rounded-lg bg-[#F4F4F5] text-[0.5625rem] text-[#282C3F] outline-none cursor-pointer">
                <option>Bvdss</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
              <select className="rounded-lg bg-[#F4F4F5] text-[0.5625rem] text-[#282C3F] outline-none cursor-pointer">
                <option>Configuration</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>
            <div className="flex items-center">
              <p className="uppercase text-[0.625rem]">
                <span className="font-bold">X</span> record(s) Matched
              </p>
            </div>
          </div>
        </div>
        <div id="table" className="flex w-full">
          <div className="w-1/4">
            <div className="border-r-2 border-b-2 border-[#E0E0E0] flex justify-center items-center py-3">
              <div className="flex flex-col gap-2">
                <p className="font-bold text-[0.625rem] leading-[0.75625rem]">
                  Rds (on) mΩ
                </p>
                <p className="font-semibold text-[0.5rem] mt-2">@10V</p>
                <div className="flex space-x-2 text-[0.5rem] text-[#6B6B6B]">
                  {[0, 3, 5, 6.7, 7.2].map((item, index) => (
                    <p
                      key={index}
                      className={`rounded-full cursor-pointer px-[2px] ${
                        activeItem10V === index ? "bg-[#F4F4F5]" : ""
                      }`}
                      onClick={() => handleItemClick10V(index)}
                    >
                      {item}
                    </p>
                  ))}
                </div>
                <p className="font-semibold text-[0.5rem] mt-2">@5V</p>
                <div className="flex space-x-2 text-[0.5rem] text-[#6B6B6B]">
                  {[0, 3, 5, 6.7, 7.2].map((item, index) => (
                    <p
                      key={index}
                      className={`rounded-full cursor-pointer px-[2px] ${
                        activeItem5V === index ? "bg-[#F4F4F5]" : ""
                      }`}
                      onClick={() => handleItemClick5V(index)}
                    >
                      {item}
                    </p>
                  ))}
                </div>
                <p className="font-semibold text-[0.5rem] mt-2">@4.5V</p>
                <div className="flex space-x-2 text-[0.5rem] text-[#6B6B6B]">
                  {[0, 3, 5, 6.7, 7.2].map((item, index) => (
                    <p
                      key={index}
                      className={`rounded-full cursor-pointer px-[2px] ${
                        activeItem4_5V === index ? "bg-[#F4F4F5]" : ""
                      }`}
                      onClick={() => handleItemClick4_5V(index)}
                    >
                      {item}
                    </p>
                  ))}
                </div>
                <p className="font-semibold text-[0.5rem] mt-2">@2.5V</p>
                <div className="flex space-x-2 text-[0.5rem] text-[#6B6B6B]">
                  {[0, 3, 5, 6.7, 7.2].map((item, index) => (
                    <p
                      key={index}
                      className={`rounded-full cursor-pointer px-[2px] ${
                        activeItem2_5V === index ? "bg-[#F4F4F5]" : ""
                      }`}
                      onClick={() => handleItemClick2_5V(index)}
                    >
                      {item}
                    </p>
                  ))}
                </div>
                <p className="font-semibold text-[0.5rem] mt-2">@1.8V</p>
                <div className="flex space-x-2 text-[0.5rem] text-[#6B6B6B]">
                  {[0, 3, 5, 6.7, 7.2].map((item, index) => (
                    <p
                      key={index}
                      className={`rounded-full cursor-pointer px-[2px] ${
                        activeItem1_8V === index ? "bg-[#F4F4F5]" : ""
                      }`}
                      onClick={() => handleItemClick1_8V(index)}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-r-2 border-b-2 border-[#E0E0E0] flex justify-center items-center py-3 pl-2">
              <div className="flex flex-col gap-2">
                <p className="font-bold text-[0.625rem] leading-[0.75625rem]">
                  Qg(nC)
                </p>
                <p className="font-semibold text-[0.5rem] mt-2">@4.5V(typ)</p>
                <div className="flex space-x-2 text-[0.5rem] text-[#6B6B6B]">
                  {[0, 4.2, 10.7, 6.7, 7.2].map((item, index) => (
                    <p
                      key={index}
                      className={`rounded-full cursor-pointer px-[2px] ${
                        activeItem4_5QG === index ? "bg-[#F4F4F5]" : ""
                      }`}
                      onClick={() => handleItemClick4_5QG(index)}
                    >
                      {item}
                    </p>
                  ))}
                </div>
                <p className="font-semibold text-[0.5rem] mt-2">@10V(typ)</p>
                <div className="flex space-x-2 text-[0.5rem] text-[#6B6B6B]">
                  {[0, 5, 8, 6.7, 7.2].map((item, index) => (
                    <p
                      key={index}
                      className={`rounded-full cursor-pointer px-[2px] ${
                        activeItem10QG === index ? "bg-[#F4F4F5]" : ""
                      }`}
                      onClick={() => handleItemClick10QG(index)}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-r-2 border-b-2 border-[#E0E0E0] flex justify-center items-center py-3 pr-2">
              <div className="flex flex-col gap-2">
                <p className="font-bold text-[0.625rem] leading-[0.75625rem]">
                  RθJC(℃/W)
                </p>
                <div className="flex space-x-2 text-[0.5rem] text-[#6B6B6B]">
                  {[0, 5, 8, 6.7, 7.2].map((item, index) => (
                    <p
                      key={index}
                      className={`rounded-full cursor-pointer px-[2px] ${
                        activeItemR0JC === index ? "bg-[#F4F4F5]" : ""
                      }`}
                      onClick={() => handleItemClickR0JC(index)}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-r-2 border-b-2 border-[#E0E0E0] flex justify-center items-center py-3 pr-2">
              <div className="flex flex-col gap-2">
                <p className="font-bold text-[0.625rem] leading-[0.75625rem]">
                  Pd(W)
                </p>
                <div className="flex space-x-2 text-[0.5rem] text-[#6B6B6B]">
                  {[0, 5, 8, 6.7, 7.2].map((item, index) => (
                    <p
                      key={index}
                      className={`rounded-full cursor-pointer px-[2px] ${
                        activeItemPd === index ? "bg-[#F4F4F5]" : ""
                      }`}
                      onClick={() => handleItemClickPd(index)}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-3/4">
            <MOSFETTable />
          </div>
        </div>
      </main>
      <footer className="bg-[#4B4B4B] px-8 py-14 text-white text-[0.875rem] leading-[2.2rem] text-center">
        <p>
          10F., No. 176, Jiankang Rd., Chung-Ho Dist., New Taipei City, Taiwan
          23585 <br />
          Tel：886-2-2222-9138｜Fax：886-2-2223833｜E-mail：webmaster@cet-mos.com{" "}
          <br />
          Copyright© 2012 CET-MOS Technology Corp. All Rights Reserved
        </p>
      </footer>
    </>
  );
}

export default App;
