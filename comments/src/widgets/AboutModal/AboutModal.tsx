import { useAboutModal } from "../../entities/about/model/useAboutModal";
import { Modal } from "../../shared/ui/Modal/Modal";


export const AboutModal = () => {
  const { isAboutOpen, closeAbout } = useAboutModal();

  if (!isAboutOpen) return null;
  
  return (
    <Modal onClose={closeAbout}>
      <Modal.Header>
        <h3>О проекте Посты</h3>
      </Modal.Header>

      <Modal.Body>
        <p>Здесь можно читать посты и фильтровать их по длине.</p>
      </Modal.Body>

      <Modal.Footer>
        <button onClick={closeAbout}>Закрыть</button>
      </Modal.Footer>
    </Modal>
  );
};
