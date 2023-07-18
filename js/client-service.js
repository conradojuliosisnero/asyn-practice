const http = new XMLHttpRequest();
const URL = "http://localhost:3000/perfil";

//funcion
const createNewLine = (name, email) => {
	const line = document.createElement("tr");
	const contend = `<td class="td" data-td>
			${name}
		</td>
		<td>${email}</td>
		<td>
			<ul class="table__button-control">
				<li>
					<a
						href="../screens/editar_cliente.html"
						class="simple-button simple-button--edit">
						Editar
					</a>
				</li>
				<li>
					<button class="simple-button simple-button--delete" type="button">
						Eliminar
					</button>
				</li>
			</ul>
		</td>`;
	line.innerHTML = contend;
	return line;
};

const table = document.querySelector("[data-table]");

const listClients = () => {
	const promise = new Promise((resolve, rejet) => {
		const http = new XMLHttpRequest();
		http.open("GET", URL);

		http.send();

		http.onload = () => {
			const response = JSON.parse(http.response);
			if (http.status >= 400) {
				rejet(response);
			} else {
				resolve(response);
			}
		};
	});
	return promise;
};

console.log(listClients);

