// server.js
require("dotenv").config();
const http = require("http");
const app = require("./app.js");
const { initSocket } = require("./utils/socket");
const { sequelize } = require("./models");

const PORT = process.env.PORT || 8080;

const server = http.createServer(app);

initSocket(server);

async function startServer() {
    try {
        await sequelize.authenticate();
        console.log("Database connected successfully");

        server.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error(" Failed to start server:", error);
        process.exit(1);
    }
}

startServer();
