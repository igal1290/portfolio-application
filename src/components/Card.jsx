const Card = ({ children }) => {
  return (
    <div className="bg-gray-50 shadow-xl rounded-lg w-11/12 hover:-translate-y-2 duration-300 transition-all ease-in-out h-full">
      {children}
    </div>
  );
};

export default Card;
