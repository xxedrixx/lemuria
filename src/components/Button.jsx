const Button = () => {
  return (
    <button
      className="border-2 border-lemuria font-montserrat text-lg px-10 py-3 rounded-full hover:bg-slate-50"
      onClick={() => (window.location = "mailto:contact@lemuria.mg")}
    >
      Contact
    </button>
  );
};

export default Button;
