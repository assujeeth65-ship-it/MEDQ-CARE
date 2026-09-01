import React from "react";

const DashboardCard = ({
  title,
  value,
  description,
  icon,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white border border-gray-200 rounded-xl p-6 shadow-sm ${
        onClick
          ? "cursor-pointer hover:shadow-md hover:border-blue-300 transition"
          : ""
      }`}
    >
      <div className="flex items-center justify-between">

        {/* Card Content */}
        <div>
          <p className="text-sm font-medium text-gray-500">
            {title}
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-2">
            {value}
          </h2>

          {description && (
            <p className="text-sm text-gray-500 mt-2">
              {description}
            </p>
          )}
        </div>

        {/* Icon */}
        {icon && (
          <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 text-xl">
            {icon}
          </div>
        )}

      </div>
    </div>
  );
};

export default DashboardCard;