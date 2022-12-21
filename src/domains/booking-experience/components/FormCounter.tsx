interface IProps {
  label?: string;
}

const FormCounter = ({ label }: IProps): JSX.Element => {
  function decrement(e: any) {
    const btn = e.target.parentNode.parentElement.querySelector(
      'button[data-action="decrement"]'
    );
    const target = btn.nextElementSibling;
    let value = Number(target.value);
    value--;
    target.value = value;
  }

  function increment(e: any) {
    const btn = e.target.parentNode.parentElement.querySelector(
      'button[data-action="decrement"]'
    );
    const target = btn.nextElementSibling;
    let value = Number(target.value);
    value++;
    target.value = value;
  }

  const decrementButtons = document.querySelectorAll(
    `button[data-action="decrement"]`
  );

  const incrementButtons = document.querySelectorAll(
    `button[data-action="increment"]`
  );

  decrementButtons.forEach((btn) => {
    btn.addEventListener("click", decrement);
  });

  incrementButtons.forEach((btn) => {
    btn.addEventListener("click", increment);
  });

  return (
    <div className="flex flex-row h-10 rounded-lg relative bg-transparent">
      <button
        data-action="decrement"
        className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full px-2 rounded-l cursor-pointer outline-none"
      >
        <span className="m-auto text-2xl font-thin">−</span>
      </button>
      <div className="flex justify-between">
        <input
          type="text"
          className="w-4 outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
          name="custom-input-number"
          value="0"
        ></input>
        <div className="outline-none focus:outline-none text-center w-full bg-gray-300 text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none">
          {label}
        </div>
      </div>

      <button
        data-action="increment"
        className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full px-2 rounded-r cursor-pointer"
      >
        <span className="m-auto text-2xl font-thin">+</span>
      </button>
    </div>
  );
};

export default FormCounter;
