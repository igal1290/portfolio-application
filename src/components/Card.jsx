const Card = ({ children }) => {
  return (
    <div className="bg-gray-50 shadow-lg rounded-lg hover:-translate-y-2 duration-300 transition-all ease-in-out h-full md:w-9/12 md:mx-auto lg:mx-0 lg:w-full">
      {children}
    </div>
  );
};

export default Card;
