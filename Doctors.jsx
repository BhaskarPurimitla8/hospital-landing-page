import React from "react";

const doctors = ["Dr. Smith", "Dr. Johnson", "Dr. Patel", "Dr. Kumar"];

const Doctors = () => (
  <section className="p-8 bg-gray-50">
    <h3 className="text-2xl font-semibold mb-6 text-center">Our Doctors</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {doctors.map((doc, idx) => (
        <div key={idx} className="p-4 bg-white shadow rounded text-center">
          <div className="w-20 h-20 mx-auto bg-gray-200 rounded-full mb-2"></div>
          <h4 className="text-lg font-medium">{doc}</h4>
        </div>
      ))}
    </div>
  </section>
);

export default Doctors;