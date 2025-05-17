const express = require("express");
const NotificationController = require("../controllers/notificationController");

const notificationRouter = express.Router();

notificationRouter.post("/", NotificationController.createNotification);

notificationRouter.get("/", NotificationController.getAllNotifications);

notificationRouter.get("/:id", NotificationController.getNotificationById);

module.exports = notificationRouter;
