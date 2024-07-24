const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			getContacts: () => {
				fetch('https://playground.4geeks.com/contact/agendas/mariano')
					.then(response => response.json())
					.then(data => setStore({ contacts: data.contacts }))
			},
			addContact: async (contact) => {
				let option = {
					method: "POST",
					headers: {
						"Content-type": "application/json"
					},
					body: JSON.stringify(contact)

				}
				try {
					let response = await fetch("https://playground.4geeks.com/contact/agendas/mariano/contacts", option)
					if (!response.ok) {
						return false
					} else {
						getActions().getContacts()
						return true
					}
				}
				catch (err) { console.log(err) }

			},
			// 
			editContact: async (contact) => {
				let option = {
					method: "PUT",
					headers: {
						"Content-type": "application/json"
					},
					body: JSON.stringify(contact)

				}
				try {
					let response = await fetch("https://playground.4geeks.com/contact/agendas/mariano/contacts/" + contact.id, option)
					if (!response.ok) {
						return false
					} else {
						getActions().getContacts()
						return true
					}
				}
				catch (err) { console.log(err) }

			},
			deleteContact: async (contactId) => {
				let option = {
					method: "DELETE",
					headers: {
						"Content-type": "application/json"
					},
					// body: JSON.stringify(contact)

				}
				try {
					if (confirm("Are you sure you want to delete this contact?")) {
						let response = await fetch("https://playground.4geeks.com/contact/agendas/mariano/contacts/" + contactId, option)
						if (!response.ok) {
							console.error("Error deleting contact");
							return false;
						} else {
							getActions().getContacts();
							return true;
						}
					}
				} catch (err) {
					console.error("Fetch error:", err);
					return false;
				}
			}
		}
	};
};

export default getState;
