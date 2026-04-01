import { MainLayout } from "../shared/layouts/MainLayout";
import { ModalProvider } from "../entities/about/model/ModalContext";
import { ThemeProvider } from "../shared/lib/theme/ThemeProvider";
import { AboutModal } from "../widgets/AboutModal/AboutModal";
import { PostList } from "../widgets/PostList/PostList ";

function App() {
  return (
    <ThemeProvider>
      <ModalProvider>
        <MainLayout>
          <PostList />
        </MainLayout>
        <AboutModal />
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
