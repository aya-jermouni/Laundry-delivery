import React from "react";
import "./Style/ServicesPage.css";
import ServiceIcon from "./ServiceIcon";

function About() {
    const services = [
        {
            name: "Clothes Cleaning",
            image: "/images/clothesService.jpg",
            description: "Eco-friendly washing that protects colors and fabric.",
            highlight: "✔ Fresh scent • ✔ Fabric-safe",
            link: "/service1",
        },
        {
            name: "Clothes Ironing",
            image: "/images/ironningService.jpg",
            description: "Perfectly pressed clothes by trained professionals.",
            highlight: "✔ Wrinkle-free • ✔ Premium finish",
            link: "/service2",
        },
        {
            name: "Sneakers Cleaning",
            image: "/images/sneakersService.jpg",
            description: "Deep cleaning without damaging materials.",
            highlight: "✔ Odor removal • ✔ Like new",
            link: "/service3",
        },
    ];

  return (
      <div className="services-page">
          <h2 className="services-title">Why We’re Different</h2>

          <div className="services-grid">
              {services.map((service, index) => (
                  <ServiceIcon
                      key={index}
                      imageSrc={service.image}
                      serviceName={service.name}
                      description={service.description}
                      highlight={service.highlight}
                      onClick={() => window.location.href = service.link}
                  />
              ))}
          </div>
    </div>
  );
}

export default About;
