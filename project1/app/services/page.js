"use client";

import Header from "../compontest2/Header";
import ServiceItem from "./ServiceItem";
import ServiceList from "./ServiceList";

export const dynamic = 'force-dynamic';

const Services = ({ searchParams }) => {
  const services = ["Web Development", "Mobile App Development", "Consulting Services", "Digital Marketing"];

  return (
    <>
      <Header />
      <div>
        <h1>Our Services</h1>
       <ServiceList>
       {services.map((service) => <ServiceItem key={service} service={service} />)}
       </ServiceList>
      </div>
    </>
  );
};

export default Services;
