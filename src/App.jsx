import { useEffect, useState } from "react";
import axios from "axios";
import OrderCard from "./components/OrderCard";
import SearchBar from "./components/SearchBar";
import StatusFilter from "./components/StatusFilter";
import Pagination from "./components/Pagination";

const ORDERS_PER_PAGE = 5;

function App() {
  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isDarkMode, setIsDarkMode] = useState(false); // 🌙 Dark mode

  useEffect(() => {
    axios.get("http://localhost:5000/orders")
      .then(res => setOrders(res.data))
      .catch(err => console.error(err));
  }, []);

  const filteredOrders = orders
    .filter(o =>
      o.orderid.toLowerCase().includes(searchTerm.toLowerCase()) ||
      o.shop.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(o =>
      status === "" ? true : o.status === status
    );

  const totalPages = Math.ceil(filteredOrders.length / ORDERS_PER_PAGE);
  const startIdx = (currentPage - 1) * ORDERS_PER_PAGE;
  const paginatedOrders = filteredOrders.slice(startIdx, startIdx + ORDERS_PER_PAGE);

  return (
    <div className={`${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"} min-h-screen p-6 transition-colors`}>
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">📦 Shopify Orders Dashboard</h1>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            {isDarkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <StatusFilter status={status} setStatus={setStatus} />

        {paginatedOrders.map(order => (
          <OrderCard key={order.id} order={order} isDarkMode={isDarkMode} />
        ))}

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default App;
