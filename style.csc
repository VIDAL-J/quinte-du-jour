/* STYLE PRINCIPAL */
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  margin: auto;
  max-width: 1000px;
  background-color: #f5f7fa;
  color: #333;
}

/* TABLEAU DES CHEVAUX */
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  font-size: 0.92em;
  background: #fff;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
}

th, td {
  padding: 10px 12px;
  text-align: left;
  border-bottom: 1px solid #eee;
}

th {
  background-color: #f1f1f1;
  font-weight: bold;
}

/* COTE (jaune si favori) */
.cote {
  background-color: #fff9c4; /* jaune clair */
  font-weight: bold;
  text-align: center;
}

/* BOUTONS DE PRONOSTICS */
.btn-prono {
  margin: 10px 10px 0 0;
  padding: 10px 16px;
  font-size: 0.95em;
  background: #0052cc;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.btn-prono:hover {
  background: #003d99;
}

/* BLOC PRONOSTICS */
.bloc-prono {
  display: none;
  margin-top: 20px;
  padding: 15px;
  background: #eef3fb;
  border-left: 4px solid #0052cc;
  border-radius: 4px;
}

/* RESPONSIVE DESIGN */
@media screen and (max-width: 768px) {
  table, thead, tbody, th, td, tr {
    display: block;
  }

  tr {
    margin-bottom: 15px;
  }

  td {
    text-align: right;
    padding-left: 50%;
    position: relative;
  }

  td::before {
    content: attr(data-label);
    position: absolute;
    left: 12px;
    top: 10px;
    font-weight: bold;
    text-align: left;
  }

  th {
    display: none;
  }
}
