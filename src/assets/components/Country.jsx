import { useState } from "react";

const Country = ({ country, handleVisited }) => {
  const {
    name,
    flags,
    capital,
    population,
    continents,
    languages,
    independent,
  } = country;
  const [visit, setVisit] = useState(false);
  const handleClick = () => {
    setVisit(!visit);
  };
  const title = name.common;
  console.log(title);
  console.log(handleVisited);
  return (
    <>
      <div
        className={`" ${
          visit
            ? "bg-green-500 m-2 p-4 py-10  text-white font-medium border rounded-2xl  drop-shadow-2xl"
            : "bg-blue-500 m-2 p-4 py-10  text-white font-medium border rounded-2xl drop-shadow-2xl"
        }"`}
      >
        <div className="w-full flex justify-center items-center">
          <img className="rounded-lg w-72 h-50 " src={flags.png} />
        </div>
        <h1 className="w-full m-2 gap-2 break-words flex justify-center text-xl items-center">
          Name of Country:
          <span
            className={`" ${
              visit
                ? "bg-transparent rounded-[5px] p-1 drop-shadow-2xl break-words font-normal"
                : "bg-red-600 rounded-[5px] p-1 drop-shadow-2xl break-words font-normal"
            }"`}
          >
            {name?.common}
          </span>
        </h1>
        <h1 className="w-full m-2 gap-2 break-words flex justify-center text-xl items-center">
          Capital:
          <span className="bg-red-600 rounded-[5px] p-1 drop-shadow-2xl break-words font-normal">
            {capital ? capital : "not available"}
          </span>
        </h1>
        <h1 className="w-full m-2 gap-2 break-words flex justify-center text-xl items-center">
          Population:
          <span className="bg-red-600 rounded-[5px] p-1 drop-shadow-2xl break-words font-normal">
            {population}
          </span>
        </h1>
        <h1 className="w-full m-2 gap-2 break-words flex justify-center text-xl items-center">
          Continents:
          <span className="bg-red-600 rounded-[5px] p-1 drop-shadow-2xl break-words font-normal">
            {continents}
          </span>
        </h1>
        <h1 className="w-full m-2 gap-2 break-words flex justify-center text-xl items-center">
          Language:
          <span className="bg-red-600 rounded-[5px] p-1 drop-shadow-2xl break-words font-normal">
            {languages?.por
              ? languages?.por
              : languages?.eng
              ? languages.eng
              : "ar nai"}
          </span>
        </h1>
        <h1 className="w-full m-2 gap-2 break-words flex justify-center text-xl items-center">
          IsIndepended:
          <span className="bg-red-600 rounded-[5px] p-1 drop-shadow-2xl break-words font-normal">
            {independent ? "True" : "No data found"}
          </span>
        </h1>
        <h1 className="w-full m-2 gap-2 break-words flex justify-center text-xl items-center">
          Travel Status:
          <span className="bg-white text-blue-500 rounded-[5px] p-1 drop-shadow-2xl break-words font-normal">
            {visit ? <h4>Visited &#9989;</h4> : "Wanna Visit"}
          </span>
        </h1>
        <div>
          <button
            className="btn glass w-full  text-white  hover:text-blue-500 text-2xl font-bold"
            onClick={handleClick}
          >
            {visit ? <h4>Visited &#9989;</h4> : "Visit"}
          </button>
          <div className="text-center mt-5">
            <button
              className="btn   w-40 p-0 text-blue-500  hover:bg-white  text-lg font-bold"
              onClick={() => {
                handleVisited(title,flags);
              }}
            >
              Mark as visited
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Country;
