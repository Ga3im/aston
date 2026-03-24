import { Modal } from "../../shared/ui/Modal/Modal";
type AboutModalProps = {
  onClose: () => void;
}

export const AboutModal = ({ onClose }: AboutModalProps) => {
  return (
    <Modal onClose={onClose}>
      <Modal.Header>
        <h3>О проекте Посты</h3>
      </Modal.Header>

      <Modal.Body>
        <p>Здесь можно читать посты и фильтровать их по длине.</p>
      </Modal.Body>

      <Modal.Footer>
        <button onClick={onClose}>Закрыть</button>
      </Modal.Footer>
    </Modal>
  );
};
