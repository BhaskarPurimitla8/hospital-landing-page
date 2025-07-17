import React from "react";

const services = ["Cardiology", "Neurology", "Orthopedics", "Pediatrics"];

const Services = () => (
  <section className="p-8">
    <h3 className="text-2xl font-semibold mb-6 text-center">Our Services</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {services.map((service, idx) => (
        <div key={idx} className="p-4 bg-white shadow rounded text-center">
          <h4 className="text-lg font-medium">{service}</h4>
        </div>
      ))}
    </div>
  </section>
);

export default Services;