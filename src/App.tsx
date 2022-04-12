import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { TransactionsTable } from "./components/TransationsTable";
import { GlobalStyles } from "./styles/global"


export function App() {
  return (
    <>
      <Header />
      <Dashboard/>
      <TransactionsTable/>
      <GlobalStyles />
    </>
  );
}

