import { PiSoccerBallLight } from "react-icons/pi";
import { PiBasketballLight } from "react-icons/pi";
import { PiVolleyballLight } from "react-icons/pi";
import { PiTennisBallLight } from "react-icons/pi";
import { MdOutlineSportsRugby } from "react-icons/md";
import { TbPlayHandball } from "react-icons/tb";

const Sports = () => {
  return (
    <section id="sports">
      <div className="mb-5">
        <h1 className="flex justify-center items-center font-palanquin text-4xl capitalize font-bold mb-5 text-lemuria">
          SPORTS
        </h1>
        <p className="font-montserrat text-lg leading-7 break-words">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
          magnam provident autem atque excepturi, nemo doloremque dolores
          dolorum voluptatem, corrupti sunt consectetur enim. Adipisci ratione
          dolor alias qui ullam. Expedita.
        </p>
      </div>
      <div className="grid place-items-center lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 sm:gap-6 gap-5">
        <a href="https://plainenglish.io" target="_blank" rel="noreferrer">
          <div className="border-2 border-lemuria rounded-[20%] py-[5px] px-[15px] hover:scale-125">
            <PiSoccerBallLight size={100} color="#6D6D6D" />
            <p className="flex justify-center items-center text-slate-gray font-montserrat text-lg">
              Football
            </p>
          </div>
        </a>
        <a href="https://plainenglish.io" target="_blank" rel="noreferrer">
          <div className="border-2 border-lemuria rounded-[20%] py-[5px] px-[15px] hover:scale-125">
            <PiBasketballLight size={100} color="#6D6D6D" />
            <p className="flex justify-center items-center text-slate-gray font-montserrat text-lg">
              Basketball
            </p>
          </div>
        </a>
        <a href="https://plainenglish.io" target="_blank" rel="noreferrer">
          <div className="border-2 border-lemuria rounded-[20%] py-[5px] px-[15px] hover:scale-125">
            <PiVolleyballLight size={100} color="#6D6D6D" />
            <p className="flex justify-center items-center text-slate-gray font-montserrat text-lg">
              Volleyball
            </p>
          </div>
        </a>
        <a href="https://plainenglish.io" target="_blank" rel="noreferrer">
          <div className="border-2 border-lemuria rounded-[20%] py-[5px] px-[15px] hover:scale-125">
            <TbPlayHandball size={100} color="#6D6D6D" />
            <p className="flex justify-center items-center text-slate-gray font-montserrat text-lg">
              Handball
            </p>
          </div>
        </a>
        <a href="https://plainenglish.io" target="_blank" rel="noreferrer">
          <div className="border-2 border-lemuria rounded-[20%] py-[5px] px-[15px] hover:scale-125">
            <MdOutlineSportsRugby size={100} color="#6D6D6D" />
            <p className="flex justify-center items-center text-slate-gray font-montserrat text-lg">
              Rugby
            </p>
          </div>
        </a>
        <a href="https://plainenglish.io" target="_blank" rel="noreferrer">
          <div className="border-2 border-lemuria rounded-[20%] py-[5px] px-[15px] hover:scale-125">
            <PiTennisBallLight size={100} color="#6D6D6D" />
            <p className="flex justify-center items-center text-slate-gray font-montserrat text-lg">
              Tennis
            </p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Sports;
