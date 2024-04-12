const fetchUrl = '  http://localhost:5000';
const divUsuarios = document.querySelector('.listaUsuarios');

async function buscarUsuarios() {
  const data = await fetch(`${fetchUrl}/users`);
  const resultUsuarios = await data.json();
  return resultUsuarios;
}

async function adicionarUsuarios() {
  const usuarios = await buscarUsuarios();
  try {
    usuarios.forEach((usuario) => {
      const nomeUsuario = document.createElement('p');
      const emailUsuario = document.createElement('p');

      nomeUsuario.innerText = `Nome: ${usuario.name}`;
      emailUsuario.innerText = `E-mail: ${usuario.email}`;

      divUsuarios.appendChild(nomeUsuario);
      divUsuarios.appendChild(emailUsuario);
    });
  } catch (err) {
    console.log(err);
  }
}

adicionarUsuarios();
