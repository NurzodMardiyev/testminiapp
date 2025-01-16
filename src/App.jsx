import { useEffect, useState } from "react";

const App = () => {
  const [userId, setUserId] = useState(null);
  const [environment, setEnvironment] = useState("");

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const initData = window.Telegram.WebApp.initDataUnsafe;
      const id = initData?.user?.id;

      if (id) {
        setUserId(id);
        setEnvironment(id % 2 === 0 ? "Juft muhit" : "Toq muhit");
      }
    } else {
      console.error("Telegram WebApp SDK mavjud emas.");
    }
  }, []);

  if (!userId) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        backgroundColor: environment === "Juft muhit" ? "#ADD8E6" : "#FFCCCB",
      }}
    >
      <h1>Salom, {environment}!</h1>
      <p>
        Sizning Telegram ID: <strong>{userId}</strong>
      </p>
    </div>
  );
};

export default App;
