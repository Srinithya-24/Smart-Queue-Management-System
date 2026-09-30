import { createContext,useEffect, useState } from "react";

export const QueueContext = createContext();

function QueueProvider({ children }) {
  const [queue, setQueue] = useState(() => {
  const savedQueue = localStorage.getItem("queue");

  if (savedQueue) {
    return JSON.parse(savedQueue);
  }

  return [
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
});
useEffect(() => {
    localStorage.setItem("queue", JSON.stringify(queue));
  }, [queue]);
  //console.log("QueueProvider queue:", queue);
  return (
    <QueueContext.Provider value={{ queue, setQueue }}>
      {children}
    </QueueContext.Provider>
  );
}

export default QueueProvider;