import { Provider } from "jotai";
import { Footer } from "@/components/layout/footer/Footer";
import { Header } from "@/components/layout/header/Header";
import { BrowserRouter } from "react-router-dom";
import { Router } from "@/router/Router";
import { TrackUTMs } from "@/utils/TrackUTMs";

export default function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Header />
        <TrackUTMs />
        <Router />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}
