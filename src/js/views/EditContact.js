import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate , useParams } from "react-router";

export const EditContact = () => {
    const { store, actions } = useContext(Context);
    let navigate = useNavigate();

    const params = useParams();
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const handleEditContact = async () => {
        try {
            let response = await actions.editContact({
                name: name,
                address: address,
                phone: phone,
                email: email,
                id: params.theid
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

    useEffect (() => {
        const contact = store.contacts.find((item) => item.id == params.theid )

        if(contact){
            setName(contact.name)
            setAddress(contact.address)
            setPhone(contact.phone)
            setEmail(contact.email)
        }
    }, [params.theid, store.contacts])

    return (
        <div className="container my-5 d-flex flex-column gap-2">
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
                onClick={handleEditContact}
                className="btn btn-primary"
            >
                Create Contact
            </button>
        </div>
    );
};
