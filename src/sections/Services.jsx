import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <section className="max-container ">
      <h1 className="flex justify-center items-center">SERVICES</h1>
      <div className="flex justify-center flex-wrap gap-9">
        {services.map((service) => (
          <ServiceCard key={service.label} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
