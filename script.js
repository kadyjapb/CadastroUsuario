const form = document.getElementById('registrationForm');
const userTable = document.getElementById('userTable').querySelector('tbody');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${name}</td><td>${email}</td>`;
    userTable.appendChild(newRow);

    form.reset();
});
