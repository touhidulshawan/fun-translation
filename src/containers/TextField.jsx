import { useState } from "react";

const TextField = ({ dispatch }) => {
  const [userText, setUserText] = useState("");

  const handleChange = (evt) => {
    setUserText(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch({ type: "ENTER_TEXT", payload: { text: userText } });
    setUserText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl flex flex-col justify-center items-center p-4 md:m-auto"
    >
      <input
        type="text"
        onChange={handleChange}
        placeholder="Enter your text here"
        max={50}
        value={userText}
        className="w-full py-3 px-4 border-2  border-blue-300 bg-gray-700 text-gray-200 rounded-sm shadow-xl outline-none focus:ring-2 focus:ring-gray-800 ring-offset-2 text-lg"
      />
      <button
        className="bg-green-600 text-green-100 px-6 py-3  mt-4 box-border uppercase rounded-2xl tracking-widest hover:bg-green-300 hover:text-green-900 font-bold transition-all duration-300 ease-linear shadow-inner mr-auto  focus:ring-2 focus:ring-gray-800 ring-offset-2"
        type="submit"
      >
        Translate
      </button>
    </form>
  );
};

export default TextField;
