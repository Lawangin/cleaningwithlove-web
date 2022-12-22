interface IProps {
  label?: string;
}

const FormCounter = ({ label }: IProps): JSX.Element => {
  return (
    <div className="flex flex-row h-10 rounded-lg relative bg-transparent">
      <button className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full px-2 rounded-l cursor-pointer outline-none">
        <span className="m-auto text-2xl font-thin">−</span>
      </button>
      <div className="flex justify-center w-full">
        <input
          type="text"
          className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
          name="custom-input-number"
          value={`0 ${label}`}
          readOnly
        ></input>
      </div>

      <button className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full px-2 rounded-r cursor-pointer">
        <span className="m-auto text-2xl font-thin">+</span>
      </button>
    </div>
  );
};

export default FormCounter;
