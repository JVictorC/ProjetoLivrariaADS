import createBooksTable from "./booksMigration";
import createTransActionsTable from "./transActionMigration";
import createUsuariosTable from "./userMigration";

const startMigration = async () => {
  await createUsuariosTable();
  await createBooksTable();
  await createTransActionsTable();
};

startMigration().then(() => process.exit(0));
