import { useContext, useState } from "react";
import { QueueContext } from "../context/QueueContext";

function QueueTable() {
  const { queue, setQueue } = useContext(QueueContext);

  const [editingCustomer, setEditingCustomer] = useState(null);
  const [editName, setEditName] = useState("");
  const [editService, setEditService] = useState("");

  // Open Edit Modal
  const editCustomer = (id) => {
    const customer = queue.find((c) => c.id === id);

    setEditingCustomer(customer);
    setEditName(customer.name);
    setEditService(customer.service);
  };

  // Save Changes
  const saveCustomer = () => {
    if (editName.trim() === "" || editService.trim() === "") {
      alert("Please fill all fields");
      return;
    }

    const updatedQueue = queue.map((customer) =>
      customer.id === editingCustomer.id
        ? {
            ...customer,
            name: editName,
            service: editService,
          }
        : customer
    );

    setQueue(updatedQueue);
    setEditingCustomer(null);
  };

  // Delete Customer
  const deleteCustomer = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this customer?"
    );

    if (!confirmDelete) return;

    const updatedQueue = queue.filter(
      (customer) => customer.id !== id
    );

    setQueue(updatedQueue);
  };

  return (
    <div
      style={{
        marginTop: "40px",
        background: "white",
        padding: "20px",
        borderRadius: "15px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Recent Queue</h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          textAlign: "center",
        }}
      >
        <thead
          style={{
            background: "#2563EB",
            color: "white",
          }}
        >
          <tr>
            <th style={{ padding: "15px" }}>Token</th>
            <th style={{ padding: "15px" }}>Name</th>
            <th style={{ padding: "15px" }}>Service</th>
            <th style={{ padding: "15px" }}>Status</th>
            <th style={{ padding: "15px" }}>Action</th>
          </tr>
        </thead>

        <tbody>
          {queue.map((customer) => (
            <tr
              key={customer.id}
              style={{
                borderBottom: "1px solid #E5E7EB",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#F9FAFB";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "white";
              }}
            >
              <td
                style={{
                  padding: "15px",
                  fontWeight: "bold",
                  color: "#2563EB",
                }}
              >
                {customer.token}
              </td>

              <td style={{ padding: "15px" }}>{customer.name}</td>

              <td style={{ padding: "15px" }}>{customer.service}</td>

              <td style={{ padding: "15px" }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "8px 15px",
                    borderRadius: "20px",
                    fontWeight: "600",
                    fontSize: "14px",

                    backgroundColor:
                      customer.status === "Waiting"
                        ? "#DBEAFE"
                        : customer.status === "Serving"
                        ? "#DCFCE7"
                        : "#FEF3C7",

                    color:
                      customer.status === "Waiting"
                        ? "#1D4ED8"
                        : customer.status === "Serving"
                        ? "#15803D"
                        : "#B45309",
                  }}
                >
                  {customer.status === "Waiting" && "🔵"}
                  {customer.status === "Serving" && "🟢"}
                  {customer.status === "Completed" && "🟠"}

                  {customer.status}
                </span>
              </td>

              <td style={{ padding: "15px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "10px",
                  }}
                >
                  <button
                    onClick={() => editCustomer(customer.id)}
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor = "#1D4ED8")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.backgroundColor = "#2563EB")
                    }
                    style={{
                      backgroundColor: "#2563EB",
                      color: "white",
                      border: "none",
                      padding: "8px 16px",
                      borderRadius: "8px",
                      cursor: "pointer",
                      fontWeight: "600",
                      transition: "0.3s",
                    }}
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteCustomer(customer.id)}
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor = "#DC2626")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.backgroundColor = "#EF4444")
                    }
                    style={{
                      backgroundColor: "#EF4444",
                      color: "white",
                      border: "none",
                      padding: "8px 16px",
                      borderRadius: "8px",
                      cursor: "pointer",
                      fontWeight: "600",
                      transition: "0.3s",
                    }}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Modal */}

      {editingCustomer && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.45)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "15px",
              width: "380px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            }}
          >
            <h2>Edit Customer</h2>

            <label>Name</label>

            <input
              type="text"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                marginBottom: "15px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            />

            <label>Service</label>

            <select
              value={editService}
              onChange={(e) => setEditService(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                marginBottom: "20px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            >
              <option>Banking</option>
              <option>Loan</option>
              <option>Account Opening</option>
            </select>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <button
                onClick={() => setEditingCustomer(null)}
                style={{
                  backgroundColor: "#6B7280",
                  color: "white",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>

              <button
                onClick={saveCustomer}
                style={{
                  backgroundColor: "#22C55E",
                  color: "white",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default QueueTable;