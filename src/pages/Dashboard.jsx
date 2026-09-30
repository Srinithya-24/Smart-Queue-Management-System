import "./Dashboard.css";
import { useContext } from "react";
import { QueueContext } from "../context/QueueContext";
import QueueTable from "../components/QueueTable";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";

function Dashboard() {
  const { queue, setQueue } = useContext(QueueContext);

  const waiting = queue.filter(
    (customer) => customer.status === "Waiting"
  ).length;

  const serving = queue.filter(
    (customer) => customer.status === "Serving"
  ).length;

  const completed = queue.filter(
    (customer) => customer.status === "Completed"
  ).length;

  const averageWait = `${waiting * 5} min`;

  // Serve Next
  const serveNext = () => {
    const updatedQueue = [...queue];

    // Complete current serving customer
    const servingIndex = updatedQueue.findIndex(
      (customer) => customer.status === "Serving"
    );

    if (servingIndex !== -1) {
      updatedQueue[servingIndex].status = "Completed";
    }

    // Make next waiting customer Serving
    const waitingIndex = updatedQueue.findIndex(
      (customer) => customer.status === "Waiting"
    );

    if (waitingIndex !== -1) {
      updatedQueue[waitingIndex].status = "Serving";
    }

    setQueue(updatedQueue);
  };

  // Reset Queue
  const resetQueue = () => {
    const confirmReset = window.confirm(
      "Are you sure you want to reset the queue?"
    );

    if (!confirmReset) return;

    const defaultQueue = [
      {
        id: 1,
        token: "A101",
        name: "Rahul",
        service: "Banking",
        status: "Serving",
      },
      {
        id: 2,
        token: "A102",
        name: "Priya",
        service: "Loan",
        status: "Waiting",
      },
      {
        id: 3,
        token: "A103",
        name: "Arjun",
        service: "Account Opening",
        status: "Waiting",
      },
    ];

    localStorage.removeItem("queue");
    setQueue(defaultQueue);
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Navbar />

        <div style={{ padding: "30px" }}>
          <h1>Dashboard</h1>

          <div
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
           <button
  onClick={serveNext}
  onMouseEnter={(e) =>
    (e.target.style.backgroundColor = "#1D4ED8")
  }
  onMouseLeave={(e) =>
    (e.target.style.backgroundColor = "#2563EB")
  }
  style={{
    padding: "12px 24px",
    fontSize: "16px",
    fontWeight: "bold",
    backgroundColor: "#2563EB",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  }}
>
  Serve Next
</button>
            <button
              onClick={resetQueue}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = "#DC2626")
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "#EF4444")
              }
              style={{
                padding: "12px 24px",
                fontSize: "16px",
                fontWeight: "bold",
                backgroundColor: "#EF4444",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Reset Queue
            </button>
          </div>

          <div className="dashboard-grid">
            <StatCard title="Waiting" value={waiting} color="#3B82F6" />
            <StatCard title="Serving" value={serving} color="#22C55E" />
            <StatCard title="Completed" value={completed} color="#F59E0B" />
            <StatCard
              title="Average Wait"
              value={averageWait}
              color="#EF4444"
            />
          </div>

          <QueueTable />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;