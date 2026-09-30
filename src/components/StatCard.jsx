import {
  FaUsers,
  FaUserCheck,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";
function StatCard({ title, value, color }) {
   let icon;
  let subtitle;

  switch (title) {
    case "Waiting":
      icon = <FaUsers />;
      subtitle = "+1 from yesterday";
      break;

    case "Serving":
      icon = <FaUserCheck />;
      subtitle = "Currently Active";
      break;

    case "Completed":
      icon = <FaCheckCircle />;
      subtitle = "Today's Served";
      break;

    case "Average Wait":
      icon = <FaClock />;
      subtitle = "Estimated Time";
      break;

    default:
      icon = null;
      subtitle = "";
  }

  return (
    <div
  style={{
     background: "white",
        padding: "20px",
        borderRadius: "18px",
        borderTop: `5px solid ${color}`,
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease",
        cursor: "pointer",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-5px)";
    e.currentTarget.style.boxShadow =
      "0 8px 20px rgba(0,0,0,0.2)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow =
      "0 2px 10px rgba(0,0,0,0.1)";
  }}
>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <div
          style={{
            width: "55px",
            height: "55px",
            borderRadius: "50%",
            backgroundColor: "#EFF6FF",
            color: color,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "24px",
          }}
        >
          {icon}
        </div>

        <div>
          <h3 style={{ margin: 0 }}>{title}</h3>

          <p
            style={{
              margin: "4px 0 0",
              color: "gray",
              fontSize: "13px",
            }}
          >
            {subtitle}
          </p>
        </div>
      </div>

      {/* Value */}
      <h1
        style={{
          marginTop: "25px",
          fontSize: "36px",
          color: "#111827",
        }}
      >
        {value}
      </h1>
    </div>
  );
}

export default StatCard;