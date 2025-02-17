class ExpenseManager {
  constructor() {
    this.gastos = [];
  }

  addExpense(nombre, cantidad, categoria) {
    cantidad = parseFloat(cantidad);
    if (cantidad > 0) {
      this.gastos.push({ nombre, cantidad, categoria: parseInt(categoria) });
      this.displayExpenses();
    } else {
      alert("Solo se aceptan números positivos");
    }
  }

  displayExpenses() {
    const expenseList = document.getElementById("expenseList"); // Usando el mismo ID del HTML
    expenseList.innerHTML = "";
    this.gastos.sort((a, b) => a.categoria - b.categoria);
    this.gastos.forEach((gasto) => {
      const gastoDiv = document.createElement("div");
      gastoDiv.className = "expense";
      gastoDiv.innerHTML = `<span><strong>${
        gasto.nombre
      }</strong> - $${gasto.cantidad.toFixed(2)}</span> 
                              <span>Categoría: ${gasto.categoria}</span>`;
      expenseList.appendChild(gastoDiv);
    });
  }
}

const manager = new ExpenseManager();

function addExpense() {
  const nombre = document.getElementById("expenseName").value; // Coincide con HTML
  const cantidad = document.getElementById("expenseAmount").value; // Coincide con HTML
  const categoria = document.getElementById("expenseCategory").value; // Coincide con HTML
  if (nombre && cantidad) {
    manager.addExpense(nombre, cantidad, categoria);
  }
}
