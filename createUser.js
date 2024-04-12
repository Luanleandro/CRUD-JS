// const fetchUrl = 'http://127.0.0.1:5500/';

// async function createUser() {
//   const response = await fetch(fetchUrl, {
//     method: 'POST',
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(user)
//   });

// }

// createUser();

const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.querySelector("[type='email']").value;
  const name = document.querySelector("[type='name']").value;
  const senha = document.querySelector("[type='password']").value;

  const novoUsuario = {
    email,
    name,
    senha,
  };

  const user = await createUser(novoUsuario);
  console.log(user);
});
