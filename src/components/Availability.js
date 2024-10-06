import React from 'react';

const locations = ['Nairobi', 'Mombasa', 'Kisumu'];

function Availability() {
  return (
    <section className="my-4">
      <h2>Availability by Location</h2>
      <ul className="list-group">
        {locations.map((location, index) => (
          <li className="list-group-item" key={index}>
            {location}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Availability;
