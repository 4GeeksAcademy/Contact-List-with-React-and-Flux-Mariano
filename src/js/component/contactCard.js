import React, { useEffect } from "react";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Context} from "../store/appContext";
import { useContext , useState } from "react";
// import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";

export const ContactCard = ({contact}) => {

    const {store, actions} = useContext (Context); 
    const params = useParams();
    // const [contact, setContact] = useState({
    //     name: contact ? contact.name : "" ,
    //     phone: contact ? contact.phone : "" ,
    //     email: contact ? contact.email : "" ,
    //     address: contact ? contact.address : "" 
    // });
    
    // useEffect(() => {
    //     state.actions.getContacts()
    //     // setContact(store.contacts.find((item)=> item.id == params.theid))
    // }, []);

    return (
        <div className="container px-2 my-3 border">
            <div className="row">
                <div className="col-4 py-2">
                    <img className="rounded-circle" style={{width: "150px", height: "150px"}} src="https://thispersondoesnotexist.com/" alt="https://placehold.co/"></img>
                </div>
                <div className="col-4 text-start ps-3">
                    <h2>{contact.name}</h2>
                    <h4 className="text-secondary">{contact.address}</h4>
                    <h4 className="text-secondary">{contact.phone}</h4>
                    <h4 className="text-secondary">{contact.email}</h4>
                </div>
                <div className="col-4 py-4 pe-4 justify-content-end d-flex align-items-center">
                    <Link to={"/edit/" + contact.id}>
                        <button className="btn border-0 fs-4"><i class="fa-solid fa-pencil"></i></button>
                    </Link>
                    <button className="btn border-0 text-danger fs-4" onClick={() => actions.deleteContact(contact.id)}><i class="fa-solid fa-trash-can"></i></button>
                </div>
            </div>

  
        </div>
    )
}



