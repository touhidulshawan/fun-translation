import { useReducer, useState, useEffect } from "react";
import TextField from "./TextField";

const textReducer = (state, action) => {
  switch (action.type) {
    case "ENTER_TEXT":
      return action.payload.text;
    default:
      return state;
  }
};

const Yoda = () => {
  const [textToTranslate, dispatch] = useReducer(textReducer, "");
  const [translatedContent, setTranslatedContent] = useState({});

  useEffect(() => {
    startTranslation(textToTranslate);
  }, [textToTranslate]);

  const startTranslation = async (text) => {
    const response = await fetch(
      `https://api.funtranslations.com/translate/yoda.json?text=${text}`
    );
    const data = await response.json();
    const content = await { ...data.contents };
    setTranslatedContent(content);
  };

  console.log(translatedContent);

  return (
    <div>
      <TextField dispatch={dispatch} />
    </div>
  );
};
export default Yoda;
