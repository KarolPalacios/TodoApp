const express = require("express");
const db = require("./utils/database");
const initModels = require("./models/init.model");
const userRoutes = require("./routes/users.routes");
const todosRoutes = require("./routes/todos.routes");
const authRoutes = require("./routes/auth.routes");
const cors = require('cors');
require("dotenv").config();

console.log(process.env.PORT);

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;


db.authenticate()
    .then(() => console.log("Autenticación exitosa"))
    .catch((error) => console.log(error));

initModels();

db.sync({force: false})
    .then(() => console.log("Base sincronizada"))
    .catch((error) => console.log(error));


app.get("/", (req, res) => {
    res.status(200).json({ message: "Bienvenido al server" });
});

app.use("/api/v1", userRoutes);
app.use("/api/v1", todosRoutes);
app.use("/api/v1", authRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});