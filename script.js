function createTable() {
  const rows = prompt("Input number of rows");
  const cols = prompt("Input number of columns");

  const rn = parseInt(rows);
  const cn = parseInt(cols);

  if (isNaN(rn) || isNaN(cn) || rn <= 0 || cn <= 0) {
    alert("Please enter valid positive numbers for rows and columns.");
    return;
  }

  const table = document.getElementById("myTable");
  table.innerHTML = ""; // Clear any existing table content

  for (let i = 0; i < rn; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < cn; j++) {
      const cell = document.createElement("td");
      cell.textContent = Row-${i} Column-${j};
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
}