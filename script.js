function createTable() {
  // Prompt user for rows and columns
  const rows = prompt("Input number of rows");
  const cols = prompt("Input number of columns");

  // Convert input to numbers
  const rn = parseInt(rows);
  const cn = parseInt(cols);

  // Validate inputs
  if (isNaN(rn) || isNaN(cn) || rn <= 0 || cn <= 0) {
    alert("Please enter valid positive numbers for rows and columns.");
    return;
  }

  // Get the table element
  const table = document.getElementById("myTable");

  // Clear any existing table content
  table.innerHTML = "";

  // Generate table rows and columns
  for (let i = 0; i < rn; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < cn; j++) {
      const cell = document.createElement("td");
      cell.textContent = `Row-${i} Column-${j}`;
      row.appendChild(cell);
    }

    table.appendChild(row);
  }
}

