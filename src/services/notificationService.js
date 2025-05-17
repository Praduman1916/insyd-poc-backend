const { Notification } = require("../models");

class NotificationService {
  static async createNotification(message) {
    try {
      const notification = await Notification.create({ message });
      return notification;
    } catch (error) {
      console.error("Error creating notification:", error);
      throw error;
    }
  }

  static async getAllNotifications(page = 1, limit = 10) {
    try {
      const offset = (page - 1) * limit;
      const notifications = await Notification.findAll({
        order: [["created_at", "DESC"]],
        limit,
        offset,
      });

      const total = await Notification.count();
      const hasMore = offset + limit < total;

      return {
        notifications,
        hasMore,
      };
    } catch (error) {
      console.error("Error fetching notifications:", error);
      throw error;
    }
  }

  static async getNotificationById(id) {
    try {
      const notification = await Notification.findByPk(id);
      if (!notification) throw new Error("Notification not found");
      return notification;
    } catch (error) {
      console.error("Error fetching notification:", error);
      throw error;
    }
  }
}

module.exports = NotificationService;
