import { clientServices } from "../client-service";

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

clientServices.listClients()
	.then((data) => {
		data.forEach((perfil) => {
			const newLine = createNewLine(perfil.nombre, perfil.email);
			table.appendChild(newLine);
		});
	})
	.catch((e) => {
		alert("Ocurrio un error");
	});

