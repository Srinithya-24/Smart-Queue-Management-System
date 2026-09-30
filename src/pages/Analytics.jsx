import { useContext } from "react";
import { QueueContext } from "../context/QueueContext";

function Analytics() {
  const { queue } = useContext(QueueContext);

  const totalCustomers = queue.length;

  const waiting = queue.filter(
    (customer) => customer.status === "Waiting"
  ).length;

  const serving = queue.filter(
    (customer) => customer.status === "Serving"
  ).length;

  const completed = queue.filter(
    (customer) => customer.status === "Completed"
  ).length;

  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ marginBottom: "30px" }}>Queue Analytics</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
        }}
      >
        <div
          style={{
            background: "#f4f4f4",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <h3>Total Customers</h3>
          <h2>{totalCustomers}</h2>
        </div>

        <div
          style={{
            background: "#fff3cd",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <h3>Waiting</h3>
          <h2>{waiting}</h2>
        </div>

        <div
          style={{
            background: "#cfe2ff",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <h3>Serving</h3>
          <h2>{serving}</h2>
        </div>

        <div
          style={{
            background: "#d1e7dd",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <h3>Completed</h3>
          <h2>{completed}</h2>
        </div>
      </div>
    </div>
  );
}

export default Analytics;