import React, { useState, useEffect } from 'react';
import { db } from './Firebase-config';
import { collection, getDocs, onSnapshot, updateDoc, doc, deleteDoc} from 'firebase/firestore';
import 'bootstrap/dist/css/bootstrap.min.css';


const RestaurantReservations = () => {
    const usersCollectionRef = collection(db, "reservations");
    const [reservations, setReservations] = useState([]);
    const [selectedReservation, setSelectedReservation] = useState(null);
    const [name, setName]=useState("");
    const [lastName, setLastName]=useState("");
    const [email, setEmail]=useState("");
    const [phoneNumber, setPhoneNumber]=useState("");
    const [date, setDate]=useState("");
    const [time, setTime]=useState("");
    const [partySize, setPartySize]=useState(0);


    useEffect(() => {
        const getReservations = async () => {
            const data = await getDocs(usersCollectionRef);
            setReservations(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        onSnapshot(usersCollectionRef, (snapshot) => {
            setReservations(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        });

        getReservations();
    }, []);

    // UPDATE FUNCTION
    const updateReservation = async (id) => {
        const userDoc = doc(db, "reservations", id)
        const newFields = {name: name , lastName:lastName, email: email, phoneNumber:phoneNumber, date:date, time: time, partySize: partySize }
        await updateDoc(userDoc, newFields)
        setSelectedReservation(null)
    }
  
    // DELETE FUNCTION
    const deleteReservation = async (id) => {
        const userDoc = doc(db, "reservations", id)
        await deleteDoc(userDoc);
    }
    

    const sortedReservations = reservations.sort((a, b) => new Date(a.date) - new Date(b.date));


    return (
        <div className="container">
            <h1 className="text-center my-5">Restaurant Reservations</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th >Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Party Size</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedReservations.map(reservation => (
                        <tr key={reservation.id}>
                            <td>{reservation.name}</td>
                            <td>{reservation.lastName}</td>
                            <td>{reservation.email}</td>
                            <td>{reservation.phoneNumber}</td>
                            <td>{reservation.date}</td>
                            <td>{reservation.time}</td>
                            <td>{reservation.partySize}</td>
                            <td>
                            <button onClick={() => setSelectedReservation(reservation)} className="btn btn-primary">Update</button>
                            <button onClick={() => { deleteReservation(reservation.id) }} className="btn btn-danger" >X</button>
                            </td>
                        </tr>
                    ))}
                    {selectedReservation &&(
                        <div style={{display:"flex", flexDirection:"column"}}>
                            <h3>Update Reservation</h3>
                            
                            <input  placeholder="Name" type="text" value={name} onChange={(e)=>setName(e.target.value)} required/>
                            <input  placeholder="Last Name" type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} required/>
                            <input  placeholder="Email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                            <input  placeholder="Phone Number" type="text" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} required/>
                            <input  placeholder="Date" type="date" value={date} onChange={(e)=>setDate(e.target.value)} required/>
                            <input  placeholder="Time" type="time" value={time} onChange={(e)=>setTime(e.target.value)} required/>
                            <input  placeholder="Party Size" type="number" value={partySize} onChange={(e)=>setPartySize(e.target.value)} required/>
                            <button className="btn btn-outline-success mr-2" onClick={() => updateReservation(selectedReservation.id, name, lastName, email, phoneNumber, date, time, partySize)}>Update</button>
                            <button className="btn btn-outline-danger mr-2" onClick={() => setSelectedReservation(null)}>Cancel</button>
                        </div>
                    )}
                </tbody>
            </table>
            <div><button className='btn btn-outline-warning'>Log Out</button></div>
        </div>
    );
};


export default RestaurantReservations;