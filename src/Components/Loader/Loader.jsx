import "./Loader.css";

const Loader = () => {
  return (
    <div className="relative h-screen flex justify-center items-center">
      <div className="absolute text-white top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center">
        <div className="spinner ">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
