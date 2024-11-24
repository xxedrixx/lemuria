import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <section id="services" className="max-container">
      <h1 className="flex justify-center items-center font-palanquin text-4xl capitalize font-bold mb-8 text-lemuria">
        ACTIVITÉS
      </h1>
      <div className="flex justify-center flex-wrap gap-9">
        {services.map((service) => (
          <ServiceCard key={service.label} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
