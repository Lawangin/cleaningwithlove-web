interface IProps {
  label: string;
  price?: string;
}

const Checkbox = ({ label, price }: IProps): JSX.Element => {
  // to add check, just pass checked into input className
  return (
    <div className="flex justify-center">
      <div>
        <div className="form-check">
          <input
            className="form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label
            className="form-check-label inline-block text-gray-800"
            htmlFor="flexCheckDefault"
          >
            {label} <b>+${price}</b>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Checkbox;
