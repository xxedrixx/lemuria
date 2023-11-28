const Button = () => {
  return (
    <button
      className="border-2 border-lemuria font-montserrat text-lg px-10 py-3 rounded-full"
      onClick={() => (window.location = "mailto:yourmail@domain.com")}
    >
      Contact
    </button>
  );
};

export default Button;
