import "./ModalSneaker.css";

export default function ModalSneaker({ isOpen, setIsOpen }) {
  function close() {
    setIsOpen(false);
  }

  if (!isOpen) {
    return null;
  }

  return (
    <div className={`modal ${!isOpen ? "modal--closing" : ""}`}>
      <div>
        {isOpen && (
          <button className="closeButton" onClick={close}>
            X
          </button>
        )}
      </div>
    </div>
  );
}
