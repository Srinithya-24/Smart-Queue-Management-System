import { useContext, useState } from "react";
import { QueueContext } from "../context/QueueContext";

function Search() {
  const { queue } = useContext(QueueContext);
  const [search, setSearch] = useState("");

  const filteredCustomers = queue.filter((customer) =>
    customer.name.toLowerCase().includes(search.toLowerCase()) ||
    customer.token.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ marginBottom: "20px" }}>Search Customer</h1>

      <input
        type="text"
        placeholder="Search by Name or Token"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "300px",
          padding: "10px",
          marginBottom: "20px",
          borderRadius: "5px",
          border: "1px solid gray",
          fontSize: "16px",
        }}
      />

      <table
        border="1"
        cellPadding="10"
        cellSpacing="0"
        style={{
          width: "100%",
          borderCollapse: "collapse",
          textAlign: "center",
        }}
      >
        <thead style={{ backgroundColor: "#007bff", color: "white" }}>
          <tr>
            <th>Token</th>
            <th>Name</th>
            <th>Service</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {filteredCustomers.length > 0 ? (
            filteredCustomers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.token}</td>
                <td>{customer.name}</td>
                <td>{customer.service}</td>
                <td>{customer.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No customer found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Search;