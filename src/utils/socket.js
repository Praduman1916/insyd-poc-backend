const { Server } = require("socket.io");

let io = null;

function initSocket(server) {
    io = new Server(server, {
        cors: {
            origin: process.env.CLIENT_URL || "http://localhost:3000",
            methods: ["GET", "POST"],
            credentials: true,
            allowedHeaders: ["Content-Type", "Authorization"],
        },
    });

    io.on("connection", (socket) => {
        console.log(`✅ Client connected: ${socket.id}`);

        // Broadcast notifications to all connected clients
        socket.on("new-notification", (notification) => {
            console.log(`🔔 New Notification: ${notification.message}`);
            io.emit("notification", notification);
        });

        socket.on("disconnect", () => {
            console.log(`❌ Client disconnected: ${socket.id}`);
        });
    });
}

function getIO() {
    if (!io) {
        throw new Error("Socket.io not initialized");
    }
    return io;
}

module.exports = { initSocket, getIO };
