import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "../shared/lib/theme/ThemeProvider";
import { router } from "./provider/router/appRouter";
import { AboutModal } from "../widgets/AboutModal/AboutModal";
import { Provider } from "react-redux";
import { store } from "./provider/store/store";
import { ModalProvider } from "../entities/about/model/ModalContext";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <ModalProvider>
          <RouterProvider router={router} />
          <AboutModal />
        </ModalProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
