import React, { useState, useEffect } from "react";
import { db } from './Firebase-config'
import { collection, addDoc } from 'firebase/firestore';

const RestaurantReservationForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    date: "",
    time: "",
    partySize: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
  

    // Validate the email
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
      alert("Email must be in a valid email format");
      return;
    }

    // Validate the party size
    if (formData.partySize <= 0) {
      alert("Party size must be greater than 0");
      return;
    }

    // Validate the date and time
    const reservationTime = new Date(`${formData.date}T${formData.time}:00`);
    const currentTime = new Date();
    if (reservationTime < currentTime) {
      alert("Reservation can't be booked as the date and time you are selecting is before current date or time");
      return;
    }
    // Validate opening
    if (reservationTime.getHours() < 13 || reservationTime.getHours() >= 21) {
      alert("Service Hours are from 1:00pm to 10:00pm so last reservation hour is 8:59pm");
      return;
    }

    if (submitted){
      alert("Thank You!!! Your reservation has been booked successfully");
    }else{
      alert("Something went wrong, please check all fields")
    }

    const reservationsCollectionRef = collection(db, "reservations");
    await addDoc(reservationsCollectionRef, formData);
    setFormData({
      name: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      date: "",
      time: "",
      partySize: ""
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container my-5 text-center">
      <h1 className="text-center">Make a Reservation</h1>
      <form style={{width:"40%", display:"flex", flexDirection:"column", margin: "0 auto"}} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            className="form-control"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            className="form-control"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="partySize">Party Size:</label>
          <input
            type="number"
            className="form-control"
            id="partySize"
            name="partySize"
            value={formData.partySize}
            onChange={handleChange}
            required
          />
        </div>
        <button style={{marginTop:"3rem"}} type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};


  

  export default RestaurantReservationForm;