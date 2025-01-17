import { useEffect, useState } from "react";

function App() {
  console.log(window);
  return (
    <div>
      <h1>Telegram Mini App</h1>
      <p>{window.Telegram}</p>
    </div>
  );
}

export default App;
