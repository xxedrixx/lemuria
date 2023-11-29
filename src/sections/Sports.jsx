import { PiSoccerBallLight } from "react-icons/pi";

const Sports = () => {
  return (
    <section>
      <div className="max-xl:padding-x mb-5 ">
        <h1 className="flex justify-center items-center">SPORTS</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
          magnam provident autem atque excepturi, nemo doloremque dolores
          dolorum voluptatem, corrupti sunt consectetur enim. Adipisci ratione
          dolor alias qui ullam. Expedita.
        </p>
      </div>
      <div className="grid place-items-center lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 sm:gap-6 gap-5">
        <a href="https://plainenglish.io" target="_blank" rel="noreferrer">
          <div className="border-2 rounded-[20%] py-[5px] px-[15px] hover:scale-125">
            <PiSoccerBallLight size={100} />
            <p className="flex justify-center items-center">TEXT</p>
          </div>
        </a>
        <div className="border-2 rounded-[20%] py-[5px] px-[15px] hover:scale-125">
          <PiSoccerBallLight size={100} />
          <p className="flex justify-center items-center">TEXT</p>
        </div>
        <div className="border-2 rounded-[20%] py-[5px] px-[15px] hover:scale-125">
          <PiSoccerBallLight size={100} />
          <p className="flex justify-center items-center">TEXT</p>
        </div>
        <div className="border-2 rounded-[20%] py-[5px] px-[15px] hover:scale-125">
          <PiSoccerBallLight size={100} />
          <p className="flex justify-center items-center">TEXT</p>
        </div>
        <div className="border-2 rounded-[20%] py-[5px] px-[15px] hover:scale-125">
          <PiSoccerBallLight size={100} />
          <p className="flex justify-center items-center">TEXT</p>
        </div>
        <div className="border-2 rounded-[20%] py-[5px] px-[15px] hover:scale-125">
          <PiSoccerBallLight size={100} />
          <p className="flex justify-center items-center">TEXT</p>
        </div>
      </div>
    </section>
  );
};

export default Sports;
