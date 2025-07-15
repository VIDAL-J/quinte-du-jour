* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Roboto, sans-serif;
  background: #f7f9fc;
  padding: 20px;
  color: #333;
}

/* Titre */
h1 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 1.8rem;
}

/* Boutons de pronostics */
#boutons-pronostics {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

#boutons-pronostics button {
  background-color: #0077cc;
  color: #fff;
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s;
}

#boutons-pronostics button:hover {
  background-color: #005fa3;
}

/* Zone des pronostics */
#contenu-pronostics {
  margin: 20px auto;
  padding: 15px;
  max-width: 800px;
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
}

/* Tableau */
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 30px;
  overflow-x: auto;
}

thead {
  background-color: #0077cc;
  color: white;
}

th, td {
  padding: 10px;
  border: 1px solid #ccc;
  text-align: left;
  font-size: 0.95rem;
}

tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}

@media (max-width: 768px) {
  th, td {
    font-size: 0.85rem;
    padding: 8px;
  }

  h1 {
    font-size: 1.4rem;
  }

  #contenu-pronostics {
    padding: 10px;
  }
}
