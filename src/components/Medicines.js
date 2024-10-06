import React from 'react';

const medicines = [
  { name: 'Panadol', description: 'Pain reliever' },
  { name: 'Amoxicillin', description: 'Antibiotic' },
  { name: 'Cough Syrup', description: 'For cough relief' },
];

function Medicines() {
  return (
    <section className="my-4">
      <h2>Available Medicines</h2>
      <ul className="list-group">
        {medicines.map((med, index) => (
          <li className="list-group-item" key={index}>
            {med.name} - {med.description}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Medicines;
