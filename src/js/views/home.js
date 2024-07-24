import React, {useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { ContactCard } from "../component/contactCard";
import { Context } from "../store/appContext";

export const Home = () => {
	
	const {store, actions } = useContext(Context)
	
	return (
		<div className="text-center mt-5">
			<div 
				id="contacts"
				aria-expanded="true"
			>
				<ul className="list-group pull-down border shadow" id="contact-list">
					{store.contacts && store.contacts.map((c,i) => (
						<ContactCard 
							className="shadow"
							key={i}
							contact={c}
						/>
					))}
				</ul>
			</div>
		</div>
	)
};
