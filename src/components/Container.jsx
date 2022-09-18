const Container = ({ children }) => {
  return (
    <div
      className="container mx-auto my-16 bg-white shadow-lg rounded-3xl p-12"
      id="home"
    >
      {children}
    </div>
  );
};

export default Container;
