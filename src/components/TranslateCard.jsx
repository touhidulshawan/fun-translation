const TranslateCard = (props) => {
  return (
    <div className="bg-blue-100 p-4 m-2 rounded shadow-md md:max-w-2xl md:m-auto md:my-7">
      <h1 className="md:text-2xl mb-5 text-gray-800">
        <span className="font-bold mr-2">Your Text:</span> {props.text}
      </h1>
      <h1 className="md:text-2xl mb-5 text-gray-800">
        <span className="font-bold mr-2">Translated Text:</span>{" "}
        {props.translated}
      </h1>
      <blockquote className="font-bold text-gray-800 md:text-2xl">
        <span className="font-bold mr-2">Translated By: </span>
        {props.translation}
      </blockquote>
    </div>
  );
};

export default TranslateCard;
