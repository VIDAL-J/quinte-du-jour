document.addEventListener("DOMContentLoaded", () => {
  fetch("data/2025-07-15-R1C4.csv")
    .then((response) => response.text())
    .then((csvText) => {
      const rows = csvText.trim().split("\n").map((row) => row.split(";"));
      const headers = rows[0].map(h => h.trim().toLowerCase());
      const data = rows.slice(1).filter(row => row.length === headers.length);

      const table = document.createElement("table");
      table.className = "cheval-table";

      // En-tête
      const thead = document.createElement("thead");
      thead.innerHTML = `
        <tr>
          <th>N°</th>
          <th>Cheval</th>
          <th>Jockey</th>
          <th>Déf</th>
          <th>S&A</th>
          <th>Poids</th>
          <th>Performances</th>
          <th>Côtes</th>
        </tr>
      `;
      table.appendChild(thead);

      // Corps
      const tbody = document.createElement("tbody");

      data.forEach((row) => {
        const rowData = Object.fromEntries(headers.map((h, i) => [h, row[i].trim()]));
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td data-label="N°">${rowData["n°"]}</td>
          <td data-label="Cheval">${rowData["cheval"]}</td>
          <td data-label="Jockey">${rowData["jockey"]}</td>
          <td data-label="Déf">${rowData["def"]}</td>
          <td data-label="S&A">${rowData["sa"]}</td>
          <td data-label="Poids">${rowData["poids"]}</td>
          <td data-label="Performances">${rowData["perf"]}</td>
          <td data-label="Côtes">${rowData["cote"]}</td>
        `;
        tbody.appendChild(tr);
      });

      table.appendChild(tbody);
      document.getElementById("tableau-chevaux").appendChild(table);
    })
    .catch((error) => {
      console.error("Erreur de chargement CSV :", error);
    });
});
