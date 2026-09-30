import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { QueueContext } from "../context/QueueContext";

function JoinQueue() {
  const navigate = useNavigate();
  const { queue, setQueue } = useContext(QueueContext);

  const [name, setName] = useState("");
  const [service, setService] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();

  // Form validation
  if (!name.trim() || !service) {
    alert("Please fill all fields");
    return;
  }
const lastToken = queue.length
  ? parseInt(queue[queue.length - 1].token.substring(1))
  : 100;

const newCustomer = {
  id: Date.now(),
  token: `A${lastToken + 1}`,
  name,
  service,
  status: "Waiting",
};

  const updatedQueue = [...queue, newCustomer];

  // console.log("After update:", updatedQueue);
  setQueue(updatedQueue);
alert("✅ Customer added successfully!");
  // Navigate to Dashboard
  navigate("/");
 //console.log("setQueue called");
  setName("");
  setService("");
};

 return (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "80vh",
      backgroundColor: "#f4f6f9",
    }}
  >
    <div
      style={{
        width: "400px",
        backgroundColor: "white",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Join Queue
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />

        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        >
          <option value="">Select Service</option>
          <option>Banking</option>
          <option>Loan</option>
          <option>Account Opening</option>
        </select>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Join Queue
        </button>
      </form>
    </div>
  </div>
);
}

export default JoinQueue;