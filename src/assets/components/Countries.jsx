import { useEffect, useState } from "react";
import Country from "./Country";
import Cart from "./cart";

const [visited,setVisited] = useState([])
// const [left, setLeft] = useState(0);
// const [flag, setFlag] = useState([]);
const handleVisited = (title, flag) => {
  console.log(title, flag);
};
const Countries = () => {
  const [countries, setcountries] = useState([]);
  useEffect(() => {
    let fetchData = async () => {
      let raw = await fetch("https://restcountries.com/v3.1/all");
      const data = await raw.json();
      setcountries(data);
    };
    fetchData();
  }, []);
  return (
    <>
      <h1 className="text-4xl text-blue-500 font-bold drop-shadow-lg text-center mt-14  mx-auto  mb-11 ">
        My <span className="bg-blue-500 text-white rounded-md p-1">Travel</span>{" "}
        Bucket List
      </h1>
      <div className="w-11/12 mx-auto">
        <div className="flex justify-around">
          <div className="w-11/12 mx-auto gap-1 grid grid-cols-3">
            {/* always grid in map div/map */}
            {countries.map((country) => (
              <Country
                country={country}
                key={country.cca3}
                handleVisited={handleVisited}
              ></Country>
            ))}
          </div>
          <Cart countries={countries}></Cart>
        </div>
      </div>
    </>
  );
};

export default Countries;
