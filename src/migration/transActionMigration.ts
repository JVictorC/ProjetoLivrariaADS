import pool from "../config/database";

 const createTransActionsTable = async () => {
  const client = await pool.connect();

  try {
    const queryText = `
      CREATE TABLE IF NOT EXISTS transactions (
        id SERIAL PRIMARY KEY,
        id_book SERIAL NOT NULL,
        id_user SERIAL NOT NULL,

        FOREIGN KEY (id_user) REFERENCES users(id),
        FOREIGN KEY (id_book) REFERENCES books(id)
      );
    `;
    await client.query(queryText);
    console.log('Tabela "transactions" criada com sucesso!');
  } catch (err) {
    console.error("Erro ao criar tabela:", err);
  } finally {
    client.release();
  }
};

export default createTransActionsTable;
