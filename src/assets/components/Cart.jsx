

const cart = ({ countries,left,flag }) => {
  return (
    <>
      <div className="">
        {/* Cart Section       */}
        <div className=" bg-blue-500 rounded-md p-5 drop-shadow-2xl mb-2">
          <h2 className="text-white font-bold text-lg text-center border-b-2">
            Total Countries: {countries.length}
          </h2>
          <h2 className="text-white font-bold text-lg text-center border-b-2">
            Countries Left: {left}
          </h2>
          <div className="py-3 border-b-2">
            <h1 className="text-xl text-center font-bold">Visited Countries</h1>
            <ul className=" py-2">
              {/* {title.map((name, i) => (
            <li>
              {++i} {name}
            </li>
          ))} */}
            </ul>
          </div>
          <h2 className="text-base font-medium py-3">
            Total Countries Visited:{/* {credit} */}
          </h2>
        </div>
        {/* ---------------------------------------------------------------------------> */}
        {/* Flag Section */}
        <div className=" bg-blue-500 rounded-md p-5 drop-shadow-2xl">
          <h1 className="text-xl font-bold text-center">Countries Flags{flag}</h1>
          <div></div>
        </div>
      </div>
    </>
  );
};
export default cart;
