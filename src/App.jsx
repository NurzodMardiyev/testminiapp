import { useEffect, useState } from "react";

function TelegramApp() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Telegram WebApp API-ni chaqirish
    const tg = window.Telegram.WebApp;

    // Foydalanuvchi ma'lumotlarini olish
    const initDataUnsafe = tg.initDataUnsafe;
    const user = initDataUnsafe?.user;

    if (user) {
      setUserData(user);
    }

    // WebApp-ni o'rnatish
    tg.ready();
  }, []);

  return (
    <div>
      <h1>Telegram Mini App</h1>
      {userData ? (
        <div>
          <p>Foydalanuvchi ismi: {userData.first_name}</p>
          <p>Familiyasi: {userData.last_name}</p>
          <p>Username: @{userData.username}</p>
          <p>ID: {userData.id}</p>
        </div>
      ) : (
        <p>Foydalanuvchi malumotlarini yuklash...</p>
      )}
    </div>
  );
}

export default TelegramApp;
