import { ThemeProvider } from "../shared/lib/theme/ThemeProvider";
import { router } from "./provider/router/appRouter";
import { AboutModal } from "../widgets/AboutModal/AboutModal";
import { RouterProvider } from "react-router-dom";
import { ModalProvider } from "../entities/about/model/ModalContext";

function App() {
  return (
    <ThemeProvider>
      <ModalProvider>
        <RouterProvider router={router} />
        <AboutModal />
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
