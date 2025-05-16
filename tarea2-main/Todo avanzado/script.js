const form = document.getElementById('expense-form');
const tableBody = document.querySelector('#expenses-table tbody');
const totalDisplay = document.getElementById('total');

let total = 0;

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const description = document.getElementById('description').value;
  const amount = parseFloat(document.getElementById('amount').value);
  const category = document.getElementById('category').value;

  if (!description || !amount || !category) return;

  addExpense(description, amount, category);
  form.reset();
});

function addExpense(desc, amount, cat) {
  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${desc}</td>
    <td>$${amount.toFixed(2)}</td>
    <td>${cat}</td>
    <td><button class="delete">Eliminar</button></td>
  `;

  row.querySelector('.delete').addEventListener('click', () => {
    row.remove();
    total -= amount;
    updateTotal();
  });

  tableBody.appendChild(row);
  total += amount;
  updateTotal();
}

function updateTotal() {
  totalDisplay.textContent = total.toFixed(2);
}
