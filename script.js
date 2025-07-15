document.addEventListener("DOMContentLoaded", () => {
  const CSV_PATH = "data/2025-07-15-R1C4.csv"; // ton fichier CSV

  // Structure du tableau
  const colonnes = [
    "N°", "Cheval", "Jockey", "Déf", "S&A", "Poids", "Performances", "Côtes"
  ];

  // Création du tableau
  fetch(CSV_PATH)
    .then((response) => response.text())
    .then((csvText) => {
      const rows = csvText.trim().split("\n").map(r => r.split(";"));
      const headers = rows[0];
      const data = rows.slice(1).map(row =>
        Object.fromEntries(headers.map((h, i) => [h.trim().toLowerCase(), row[i]?.trim() || ""]))
      );

      // Ajout manuel des côtes (tu peux modifier ici)
      const cotesManuelles = {
        "1": "5.6",
        "2": "12",
        "3": "3.4",
        "4": "20",
        "5": "7.5",
        "6": "50",
        "7": "8.8",
        "8": "17",
        "9": "30",
        "10": "10"
      };

      // Ajout des côtes dans chaque ligne de données
      data.forEach(row => {
        const num = row["n°"] || row["numero"];
        row["côtes"] = cotesManuelles[num] || "-";
      });

      // Création du tableau HTML
      const table = document.createElement("table");
      table.classList.add("cheval-table");

      const thead = document.createElement("thead");
      thead.innerHTML = `<tr>${colonnes.map(c => `<th>${c}</th>`).join("")}</tr>`;
      table.appendChild(thead);

      const tbody = document.createElement("tbody");
      data.forEach(row => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${row["n°"]}</td>
          <td>${row["cheval"]}</td>
          <td>${row["jockey"]}</td>
          <td>${row["déf"]}</td>
          <td>${row["s&a"]}</td>
          <td>${row["poids"]}</td>
          <td>${row["performances"]}</td>
          <td class="cote">${row["côtes"]}</td>
        `;
        tbody.appendChild(tr);
      });

      table.appendChild(tbody);
      document.getElementById("tableau-chevaux").appendChild(table);
    });

  // Gérer les boutons de pronostics
  document.querySelectorAll(".btn-prono").forEach(button => {
    button.addEventListener("click", () => {
      const target = button.dataset.target;
      document.querySelectorAll(".bloc-prono").forEach(div => div.style.display = "none");
      document.getElementById(target).style.display = "block";
    });
  });
});
