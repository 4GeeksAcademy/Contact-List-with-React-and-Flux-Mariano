import React, { useState, useContext } from "react"
import { Context } from "../store/appContext"
import { useNavigate } from "react-router"

export const NewContact = () => {

    const [contact, setContact ] = useState({
        name: contact ? contact.name : "",
        address: contact ? contact.address : "",
        phone: contact ? contact.phone : "",
        email: contact ? contact.email : ""
    })

    const {store,actions} = useContext(Context);
    let navigate = useNavigate();

    const handleAddContact = async () => {
        try{
            let response = await actions.addContact(contact)
            if(response == false ){
                alert("Error occurred while adding contact")
            } else {
                navigate("/")
            }
        } catch (err){
            console.log(err)
        }
    }

    return (
        <div className="container my-5 d-flex flex-column gap-2"> 
            <h1>Add contact here</h1>
            <span>Name</span>
            <input 
                type="text"
                placeholder="Full Name"
                value={contact.name}
                className="form-control"
                onChange={(e) => setContact(
                   {...contact, name: e.target.value}
                )}
            ></input>
            <span>Address</span>
            <input 
                type="text"
                placeholder="Address"
                value={contact.address}
                className="form-control"
                onChange={(e) => setContact(
                    {...contact, address: e.target.value}
                )}
            ></input>
            <span>Phone Number</span>
            <input 
                type="text"
                placeholder="Phone Number"
                value={contact.phone}
                className="form-control"
                onChange={(e) => setContact(
                    {...contact, phone: e.target.value}
                )}
            ></input>
            <span>Email</span>
            <input 
                type="text"
                placeholder="Email"
                value={contact.email}
                className="form-control"
                onChange={(e) => setContact(
                    {...contact, email: e.target.value}
                )}
            ></input>
            <button 
                type="button"
                onClick={()=> handleAddContact()}
                className="btn btn-primary"
            >Create Contact</button>
        </div>
    )
}