import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

export const NewContactEasy = () => {
    const { store, actions } = useContext(Context);
    let navigate = useNavigate();

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const handleAddContact = async () => {
        try {
            let response = await actions.addContact({
                name: name,
                address: address,
                phone: phone,
                email: email
            });
            if (response === false) {
                alert("Error occurred while adding contact");
            } else {
                navigate("/");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="container">
            <h1>Add contact here</h1>
            <span>Name</span>
            <input
                type="text"
                placeholder="Full Name"
                value={name}
                className="form-control"
                onChange={(event) => setName(event.target.value)}
            />
            <span>Address</span>
            <input
                type="text"
                placeholder="Address"
                value={address}
                className="form-control"
                onChange={(event) => setAddress(event.target.value)}
            />
            <span>Number</span>
            <input
                type="text"
                placeholder="Phone Number"
                value={phone}
                className="form-control"
                onChange={(event) => setPhone(event.target.value)}
            />
            <span>Email</span>
            <input
                type="text"
                placeholder="Email"
                value={email}
                className="form-control"
                onChange={(event) => setEmail(event.target.value)}
            />
            <button
                type="button"
                onClick={handleAddContact}
                className="btn"
            >
                Create Contact
            </button>
        </div>
    );
};
