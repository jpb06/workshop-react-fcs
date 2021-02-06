import path from "path";

export const getDbDirectory = () => path.join(__dirname, "..", "data", "json");
export const getDbPath = () => path.join(getDbDirectory(), "db.json");
