import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// "start": "npx ts-node src/migrations/migration.ts && npx ts-node src/server.ts"
