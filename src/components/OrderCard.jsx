const OrderCard = ({ order }) => {
  const getStatusStyles = (status) => {
    switch (status?.toLowerCase()) {
      case "fulfilled":
        return "bg-green-100 text-green-700 border border-green-300";
      case "cancelled":
        return "bg-red-100 text-red-700 border border-red-300";
      case "pending":
        return "bg-yellow-100 text-yellow-700 border border-yellow-300";
      default:
        return "bg-gray-100 text-gray-700 border border-gray-300";
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mb-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.01]">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold text-gray-800">{order.shop}</h2>
        <span
          className={`text-xs px-3 py-1 rounded-full font-semibold ${getStatusStyles(
            order.status
          )}`}
        >
          {order.status || "Unknown"}
        </span>
      </div>

      <div className="text-sm text-gray-600 space-y-1">
        <p>
          <span className="font-medium">Order ID:</span> {order.orderid}
        </p>
        <p>
          <span className="font-medium">Total:</span> ₹{order.total ?? "N/A"}
        </p>
        <p>
          <span className="font-medium">Date:</span>{" "}
          {order.createdat
            ? new Date(order.createdat).toLocaleDateString()
            : "N/A"}
        </p>
      </div>
    </div>
  );
};

export default OrderCard;

