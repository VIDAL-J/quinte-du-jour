document.addEventListener("DOMContentLoaded", () => {
  fetch("data/2025-07-15-R1C4.csv")
    .then((res) => res.text())
    .then((csv) => {
      const rows = csv.trim().split("\n").map(row => row.split(";"));
      const headers = rows[0].map(h => h.trim().toLowerCase());
      const data = rows.slice(1).map(row => {
        const obj = {};
        headers.forEach((h, i) => {
          obj[h] = row[i]?.trim() || "";
        });
        return obj;
      });

      // Ajouter une colonne "cote" vide
      data.forEach(d => d["cote"] = "");

      // Trier les chevaux par cote si elle existe et est un nombre
      data.sort((a, b) => {
        const ca = parseFloat(a.cote.replace(",", "."));
        const cb = parseFloat(b.cote.replace(",", "."));
        return isNaN(ca) ? 1 : isNaN(cb) ? -1 : ca - cb;
      });

      // Création du tableau
      const table = document.createElement("table");
      const thead = document.createElement("thead");
      thead.innerHTML = `
        <tr>
          <th>N°</th>
          <th>Cheval</th>
          <th>Jockey</th>
          <th>Déf.</th>
          <th>S&A</th>
          <th>Poids</th>
          <th>Performances</th>
          <th>Côte</th>
        </tr>
      `;
      table.appendChild(thead);

      const tbody = document.createElement("tbody");
      data.forEach(row => {
        const tr = document.createElement("tr");
        if (row.cote && parseFloat(row.cote.replace(",", ".")) <= 5) {
          tr.classList.add("cote-favori");
        }
        tr.innerHTML = `
          <td>${row["n°"] || ""}</td>
          <td>${row["cheval"] || ""}</td>
          <td>${row["jockey"] || ""}</td>
          <td>${row["déf."] || ""}</td>
          <td>${row["s&a"] || ""}</td>
          <td>${row["poids"] || ""}</td>
          <td>${row["performances"] || ""}</td>
          <td contenteditable="true">${row["cote"]}</td>
        `;
        tbody.appendChild(tr);
      });

      table.appendChild(tbody);
      document.getElementById("tableau-chevaux").appendChild(table);
    });
});

// Pronostics dynamiques
function afficherPronostic(source) {
  const container = document.getElementById("pronostic-container");
  let html = "";

  switch (source) {
    case "equidia":
      html = "<strong>Pronostic Equidia :</strong><br>3 - 6 - 1 - 13 - 4";
      break;
    case "geny":
      html = "<strong>Pronostic Geny :</strong><br>1 - 13 - 6 - 3 - 14";
      break;
    case "turf":
      html = "<strong>Pronostic Turf :</strong><br>13 - 3 - 6 - 1 - 7";
      break;
    default:
      html = "Source inconnue.";
  }

  container.innerHTML = html;
  container.style.display = "block";
}
