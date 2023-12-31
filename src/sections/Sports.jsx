import { PiSoccerBallLight } from "react-icons/pi";
import { PiBasketballLight } from "react-icons/pi";
import { PiVolleyballLight } from "react-icons/pi";

const Sports = () => {
  return (
    <section id="sports">
      <div className="mb-5">
        <h1 className="flex justify-center items-center font-palanquin text-4xl capitalize font-bold mb-5 text-lemuria">
          SPORTS
        </h1>
        <p className="flex justify-center font-montserrat text-lg leading-7 break-words mb-10">
          Découvrez notre collection de sports! Adoptez la camaraderie et
          l’enthousiasme des activités en équipe. Découvrez ci-dessous les
          différents sports que nous avons.
        </p>
      </div>
      <div className="flex justify-center flex-wrap gap-20">
        <a href="https://sports.lemuria.mg" target="_blank" rel="noreferrer">
          <div className="border-2 border-lemuria rounded-[20%] py-[5px] px-[15px] hover:scale-125">
            <PiSoccerBallLight size={100} color="#6D6D6D" />
            <p className="flex justify-center items-center text-slate-gray font-montserrat text-lg">
              Football
            </p>
          </div>
        </a>
        <a href="https://sports.lemuria.mg" target="_blank" rel="noreferrer">
          <div className="border-2 border-lemuria rounded-[20%] py-[5px] px-[15px] hover:scale-125">
            <PiBasketballLight size={100} color="#6D6D6D" />
            <p className="flex justify-center items-center text-slate-gray font-montserrat text-lg">
              Basketball
            </p>
          </div>
        </a>
        <a href="https://sports.lemuria.mg" target="_blank" rel="noreferrer">
          <div className="border-2 border-lemuria rounded-[20%] py-[5px] px-[15px] hover:scale-125">
            <PiVolleyballLight size={100} color="#6D6D6D" />
            <p className="flex justify-center items-center text-slate-gray font-montserrat text-lg">
              Volleyball
            </p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Sports;
