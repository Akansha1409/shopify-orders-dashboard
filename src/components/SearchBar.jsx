import { Search } from "lucide-react"; // Optional: you can use Heroicons or any icon lib

const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <div className="relative w-full mb-6">
    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
    <input
      type="text"
      placeholder="Search by Order ID or Shop"
      className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </div>
);

export default SearchBar;
