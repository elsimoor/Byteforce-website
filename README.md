# Byte Force

Site vitrine de Byte Force (Casablanca). Pages publiques rendues côté serveur, demandes et carte de mots-clés dans SQLite.

## Lancer

```bash
npm install
cp .env.example .env.local
npm run dev
```

Renseignez `DASHBOARD_PASSWORD` dans `.env.local`.

- Site: http://localhost:3000
- Demandes: http://localhost:3000/dashboard
- Carte de mots-clés: http://localhost:3000/dashboard/strategie

La base est le fichier `data/byteforce.db`. Elle reste sur la machine qui exécute Node. Un hébergement serverless sans disque durable ne conserve pas les demandes.
 
