# Dashboard — Première version du tableau de bord React + MUI

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![Create React App](https://img.shields.io/badge/Create_React_App-5-09D3AC?logo=createreactapp&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-5-007FFF?logo=mui&logoColor=white)

📦 **Code source** : <https://github.com/Georginio-prod/Dashboard>
✅ **Version complète** : [react](https://github.com/Georginio-prod/react)

---

## 📌 Présentation

Première itération (octobre 2023) du tableau de bord d'administration React / Material UI.
Cette version pose la structure (thème, sidebar, topbar, routing) et implémente les trois
premières pages ; la version finale avec tous les graphiques se trouve dans le dépôt
[react](https://github.com/Georginio-prod/react).

## ✨ Ce qui est implémenté

- Thème clair / sombre par contexte (`theme.js`).
- `Sidebar` (react-pro-sidebar) et `Topbar` (recherche, bascule de thème, icônes).
- Pages **Dashboard**, **Team** et **Contacts** (DataGrid MUI sur `mockData.js`).
- Les routes Invoices, Form, Calendar, FAQ, Bar, Pie, Line sont préparées mais commentées.

## 📁 Structure

```
Dashboard/
├── react-admin-dashboard/     # Copie de référence du tutoriel
└── src/
    ├── App.js · theme.js
    ├── components/Header.jsx
    ├── data/                  # mockData.js, mockGeoFeatures.js
    └── scenes/                # global/ (Sidebar, Topbar), dashboard/, team/, contacts/
```

## 🚀 Installation & lancement

Prérequis : Node.js (≥ 16 ; avec Node ≥ 17, ajouter `NODE_OPTIONS=--openssl-legacy-provider` si le build échoue).

```bash
git clone https://github.com/Georginio-prod/Dashboard.git
cd Dashboard
npm install
npm start          # http://localhost:3000
```

| Commande | Description |
|---|---|
| `npm start` | Serveur de développement |
| `npm run build` | Build de production dans `build/` |
| `npm test` | Tests (Jest + Testing Library) |

## 🌐 Déploiement

Non déployé (version intermédiaire remplacée par [react](https://github.com/Georginio-prod/react)).

---

## 👤 Auteur

**Komla Etonam Georges EKLOU** (Georginio) — Développeur Full Stack Web & Web3

[![GitHub](https://img.shields.io/badge/GitHub-Georginio--prod-181717?logo=github)](https://github.com/Georginio-prod)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Profil-0A66C2?logo=linkedin)](https://www.linkedin.com/in/komla-etonam-georges-eklou-68518b23b)
[![Portfolio](https://img.shields.io/badge/Portfolio-georginio.w3frame.com-6C63FF)](https://georginio.w3frame.com/)

> 📚 Tous mes projets sont listés et documentés sur mon [profil GitHub](https://github.com/Georginio-prod).
