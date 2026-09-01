import React, { useState } from "react";

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Appointment Confirmed",
      message:
        "Your appointment with Dr. Arun Kumar has been confirmed for 28 Aug 2026 at 10:30 AM.",
      time: "10 minutes ago",
      type: "Appointment",
      read: false,
    },
    {
      id: 2,
      title: "Queue Update",
      message:
        "Your token A-024 is approaching. There are 3 patients ahead of you.",
      time: "20 minutes ago",
      type: "Queue",
      read: false,
    },
    {
      id: 3,
      title: "Medical Report Available",
      message:
        "Your Blood Test Report is now available to view and download.",
      time: "2 hours ago",
      type: "Report",
      read: true,
    },
    {
      id: 4,
      title: "Appointment Reminder",
      message:
        "You have an upcoming appointment with Dr. Priya Sharma on 30 Aug 2026 at 02:00 PM.",
      time: "Yesterday",
      type: "Reminder",
      read: true,
    },
  ]);

  const unreadCount = notifications.filter(
    (notification) => !notification.read
  ).length;

  const markAsRead = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) => ({
        ...notification,
        read: true,
      }))
    );
  };

  const getIcon = (type) => {
    switch (type) {
      case "Appointment":
        return "📅";
      case "Queue":
        return "🔄";
      case "Report":
        return "📄";
      case "Reminder":
        return "⏰";
      default:
        return "🔔";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold text-gray-800">
                Notifications
              </h1>

              {unreadCount > 0 && (
                <span className="rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
                  {unreadCount} New
                </span>
              )}
            </div>

            <p className="mt-1 text-gray-500">
              Stay updated with your appointments, queue and reports.
            </p>
          </div>

          {unreadCount > 0 && (
            <button
              type="button"
              onClick={markAllAsRead}
              className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Mark All as Read
            </button>
          )}

        </div>

        {/* Notification List */}
        <div className="space-y-4">

          {notifications.length === 0 ? (
            <div className="rounded-2xl bg-white p-10 text-center shadow-sm">

              <div className="mb-3 text-5xl">
                🔔
              </div>

              <h2 className="text-xl font-semibold text-gray-800">
                No Notifications
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                You don't have any notifications right now.
              </p>

            </div>
          ) : (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className={`rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow-md ${
                  notification.read
                    ? "border-gray-200"
                    : "border-blue-200 bg-blue-50/40"
                }`}
              >

                <div className="flex gap-4">

                  {/* Icon */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-2xl">
                    {getIcon(notification.type)}
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">

                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">

                      <div>
                        <div className="flex items-center gap-2">

                          <h2 className="font-semibold text-gray-800">
                            {notification.title}
                          </h2>

                          {!notification.read && (
                            <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
                          )}

                        </div>

                        <p className="mt-1 text-xs font-medium text-blue-600">
                          {notification.type}
                        </p>
                      </div>

                      <span className="text-xs text-gray-400">
                        {notification.time}
                      </span>

                    </div>

                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      {notification.message}
                    </p>

                    {!notification.read && (
                      <button
                        type="button"
                        onClick={() => markAsRead(notification.id)}
                        className="mt-4 text-sm font-semibold text-blue-600 hover:text-blue-800"
                      >
                        Mark as Read
                      </button>
                    )}

                  </div>

                </div>

              </div>
            ))
          )}

        </div>

        {/* Footer Information */}
        <div className="mt-6 rounded-2xl bg-blue-50 p-5">
          <p className="text-center text-sm text-blue-700">
            💡 Important updates about your appointments and medical
            services will appear here.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Notifications;