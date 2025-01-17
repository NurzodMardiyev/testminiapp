// import { useEffect, useState } from "react";
import useTelegramUser from "./useTelegramUser";
useTelegramUser;
function App() {
  const user = useTelegramUser();

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.first_name}!</h1>
          <p>User ID: {user.id}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

export default App;
