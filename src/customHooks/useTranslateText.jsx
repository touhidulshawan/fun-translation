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
    let isActive = true;
    const startTranslation = async () => {
      if (textToTranslate !== "") {
        const response = await fetch(
          `https://api.funtranslations.com/translate/${translator}.json?text=${textToTranslate}`
        );
        const data = await response.json();
        const content = await { ...data.contents };
        if (isActive) {
          setTranslatedContent(content);
        }
      }
    };
    startTranslation();
    return () => {
      isActive = false;
    };
  }, [textToTranslate, translator]);

  return [translatedContent, dispatch];
};
