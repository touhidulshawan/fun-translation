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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Enter your text here"
        max={50}
        value={userText}
      />
      <button type="submit">Translate</button>
    </form>
  );
};

export default TextField;
