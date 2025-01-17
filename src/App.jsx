// import { useEffect, useState } from "react";
import useTelegramUser from "./useTelegramUser";
useTelegramUser;
function App() {
  const user = useTelegramUser();

  return (
    <div>
      {/* <div>{user}</div> */}
      {user ? (
        <div>
          <h1>Welcome, {user.first_name}!</h1>
          <p>User ID: {user.id}</p>
          <p>lastname: {user?.last_name}</p>
          <p>username: {user?.username}</p>
          <p>lang: {user?.language_code}</p>
          <p>premium: {user?.is_premium}</p>

          {/*  <p>photo_url: {user?.photo_url}</p> */}

          {/* <p>{user}</p> */}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

export default App;
