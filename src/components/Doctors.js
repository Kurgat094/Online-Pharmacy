import React from 'react';

const doctors = [
  { name: 'Dr. Jane Doe', specialty: 'General Practitioner' },
  { name: 'Dr. John Smith', specialty: 'Pediatrician' },
  { name: 'Dr. Alex Kim', specialty: 'Cardiologist' },
];

function Doctors() {
  return (
    <section className="my-4">
      <h2>Available Doctors</h2>
      <ul className="list-group">
        {doctors.map((doc, index) => (
          <li className="list-group-item" key={index}>
            {doc.name} - {doc.specialty}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Doctors;
