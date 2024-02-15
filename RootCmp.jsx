import { AppHeader } from "./cmps/AppHeader.jsx";
import { Home } from "./cmps/Home.jsx";

export function RootCmp() {
  return (
    <div className="app main-layout">
      <AppHeader />
      <Home />
    </div>
  );
}
