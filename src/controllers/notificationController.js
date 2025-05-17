const NotificationService = require("../services/notificationService");

class NotificationController {
  static async createNotification(req, res) {
    try {
      const { message } = req.body;
      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      const notification = await NotificationService.createNotification(message);
      return res.status(201).json(notification);
    } catch (error) {
      console.error("Error creating notification:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

static async getAllNotifications(req, res) {
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const data = await NotificationService.getAllNotifications(page, limit);
            return res.status(200).json(data);
        } catch (error) {
            console.error("Error fetching notifications:", error);
            return res.status(500).json({ error: "Internal server error" });
        }
    }

  static async getNotificationById(req, res) {
    try {
      const { id } = req.params;
      const notification = await NotificationService.getNotificationById(id);
      return res.status(200).json(notification);
    } catch (error) {
      console.error("Error fetching notification:", error);
      return res.status(404).json({ error: error.message });
    }
  }
}

module.exports = NotificationController;
