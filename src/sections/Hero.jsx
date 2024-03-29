import Button from "../components/Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center xl:min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x max-xl:pt-20">
        <h1 className="font-palanquin text-8xl max-sm:text-[60px] max-sm:leading-[82px] font-bold cursor-default">
          {" "}
          <span className="text-lemuria">Lemuria</span> Sport Association
        </h1>
      </div>
      <div className="relative flex-1 flex flex-col justify-center items-start xl:min-h-screen w-full max-xl:padding-x font-montserrat text-lg leading-7">
        <div className="mb-5 break-words">
          Lemuria est une association sportive trouvant son origine à Madagascar
          en 2022, dont l&#39;objectif ultime est de promouvoir la relation
          humaine à travers la pratique sportive.
        </div>
        <div>
          <Button />
        </div>
      </div>
    </section>
  );
};

export default Hero;
