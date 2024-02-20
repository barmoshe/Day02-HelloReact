export function GenericModal({ children, title, onClose }) {
  return (
    <section className="generic-modal">
      <div className="modal-content">
        <h2>{title}</h2>
        {children}
        <button className="close-btn" onClick={onClose}>
          X
        </button>
      </div>
    </section>
  );
}
