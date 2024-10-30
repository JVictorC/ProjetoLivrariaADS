import { Pool } from "pg";

// Substitua pela sua string de conexão do Render.com
const connectionString =
  "postgresql://bookstore_f2sj_user:oGX0CUaRNnrN8rvgA1BP9cXbh1LBUsKQ@dpg-cshb8c9u0jms73cjuahg-a.oregon-postgres.render.com/bookstore_f2sj";

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  },
});

export default pool;
