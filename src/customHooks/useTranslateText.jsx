import { useReducer, useState, useEffect } from "react";

const textReducer = (state, action) => {
  switch (action.type) {
    case "ENTER_TEXT":
      return action.payload.text;
    default:
      return state;
  }
};

export const useTranslateText = (translator) => {
  const [textToTranslate, dispatch] = useReducer(textReducer, "");
  const [translatedContent, setTranslatedContent] = useState({});

  useEffect(() => {
    startTranslation(translator, textToTranslate);
  }, [translator, textToTranslate]);

  const startTranslation = async (translator, text) => {
    const response = await fetch(
      `https://api.funtranslations.com/translate/${translator}.json?text=${text}`
    );
    const data = await response.json();
    const content = await { ...data.contents };
    setTranslatedContent(content);
  };

  return [translatedContent, dispatch];
};
