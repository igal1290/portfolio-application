const Container = ({ children }) => {
  return (
    <div
      className="w-11/12 2xl:w-full container mx-auto my-16 bg-white shadow-lg rounded-3xl p-8"
      id="home"
    >
      {children}
    </div>
  );
};

export default Container;
