const UrlLocal = "http://localhost:3000/perfil";

const listClients = () => fetch(UrlLocal)
	.then((respuesta) => respuesta.json());

const createClient = (nombre, email) => {
	return fetch(UrlLocal, {
		method: "POST",
		body: JSON.stringify({ nombre, email, id: uuid.v4()}),
		headers: {"Contend-Type": "application/json",},
	});
};

export const creatClient = {
	listClients,
	createClient
}
 