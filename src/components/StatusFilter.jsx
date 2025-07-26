const StatusFilter = ({ status, setStatus }) => (
  <div className="relative w-full mb-4">
    <select
      value={status}
      onChange={(e) => setStatus(e.target.value)}
      className="w-full p-2 pr-8 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="">All Statuses</option>
      <option value="fulfilled">✅ Fulfilled</option>
      <option value="unfulfilled">⏳ Unfulfilled</option>
      <option value="cancelled">❌ Cancelled</option>
    </select>

    {/* Custom dropdown arrow */}
    <div className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-none text-gray-500">
      ▼
    </div>
  </div>
);

export default StatusFilter;
