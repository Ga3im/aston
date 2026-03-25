import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "../shared/lib/theme/ThemeProvider";
import { router } from "./provider/router/appRouter";
import { AboutModal } from "../widgets/AboutModal/AboutModal";

function App() {

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
      <AboutModal />
    </ThemeProvider>
  );
}

export default App;
