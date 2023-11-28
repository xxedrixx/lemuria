import Button from "../components/Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center xl:min-h-screen gap-10 max-container border-2 border-red-500"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x max-xl:pt-20">
        <h1 className="font-palanquin text-8xl max-sm:text-[60px] max-sm:leading-[82px] font-bold cursor-default">
          {" "}
          <span className="text-lemuria">Lemuria</span> Sport Association
        </h1>
      </div>
      <div className="relative flex-1 flex flex-col justify-center items-start xl:min-h-screen w-full max-xl:padding-x">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        perferendis sit blanditiis iusto repellendus, laboriosam nam, assumenda
        commodi omnis distinctio excepturi dolorem iure ex fugit ipsam delectus
        obcaecati similique sunt! <br /> Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Perspiciatis perferendis sit blanditiis iusto
        repellendus, laboriosam nam, assumenda commodi omnis distinctio
        excepturi dolorem iure ex fugit ipsam delectus obcaecati similique sunt!
        <Button />
      </div>
    </section>
  );
};

export default Hero;
