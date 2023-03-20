import ISSTracker from "../components/ISSTracker";
import { SWRConfig } from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App() {
  return <SWRConfig value={{fetcher}}><ISSTracker /></SWRConfig>;
}
