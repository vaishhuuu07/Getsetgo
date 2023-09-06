import React, { useState } from 'react';

const HotelBooking = () => {
  // const [selectedHotel, setSelectedHotel] = useState(null);
  // const [checkInDate, setCheckInDate] = useState('');
  // const [checkOutDate, setCheckOutDate] = useState('');

  // const hotels = [
  //   { id: 1, name: 'Hotel A', price: 100 },
  //   { id: 2, name: 'Hotel B', price: 120 },
  //   // Add more hotels here
  // ];

  // const handleHotelSelection = (hotel) => {
  //   setSelectedHotel(hotel);
  // };

  // const handleBooking = () => {
  //   if (selectedHotel && checkInDate && checkOutDate) {
  //     // Here, you can send the booking details to your backend for processing.
  //     // For simplicity, we'll just display a confirmation message.
  //     alert(`Booking Confirmation:
  //       Hotel: ${selectedHotel.name}
  //       Check-In: ${checkInDate}
  //       Check-Out: ${checkOutDate}
  //       Total Price: $${calculateTotalPrice()}`);
  //   } else {
  //     alert('Please fill in all the booking details.');
  //   }
  // };

  // const calculateTotalPrice = () => {
  //   const nights = (new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24);
  //   return selectedHotel.price * nights;
  // };

  return (
    <div>
      {/* <h2>Hotel Booking</h2>
      <div>
        <label>Select a Hotel:</label>
        <select onChange={(e) => handleHotelSelection(hotels.find((hotel) => hotel.id === parseInt(e.target.value)))}>
          <option value="">Select a hotel</option>
          {hotels.map((hotel) => (
            <option key={hotel.id} value={hotel.id}>
              {hotel.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Check-In Date:</label>
        <input type="date" onChange={(e) => setCheckInDate(e.target.value)} />
      </div>
      <div>
        <label>Check-Out Date:</label>
        <input type="date" onChange={(e) => setCheckOutDate(e.target.value)} />
      </div>
      <button onClick={handleBooking}>Book Now</button> */}
    </div>
  );
};

export default HotelBooking;
