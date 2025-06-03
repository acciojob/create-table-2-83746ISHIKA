document.getElementById("createTableBtn").addEventListener("click", createTable);

function createTable() {
    const rn = prompt("Input number of rows");
    const cn = prompt("Input number of columns");
    
    if (isNaN(rn) || isNaN(cn) || rn <= 0 || cn <= 0) {
        alert("Please enter valid positive numbers for rows and columns.");
        return;
    }

    const table = document.getElementById("myTable");
    table.innerHTML = ""; // Clear existing table

    for (let i = 0; i < rn; i++) {
        const row = table.insertRow();
        for (let j = 0; j < cn; j++) {
            const cell = row.insertCell();
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }
}
