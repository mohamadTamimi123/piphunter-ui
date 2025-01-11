import "./style.css"
export default function MouseScroll() {
  return (
    <div className="mouse_scroll">
      <div className="mouse">
        <div className="wheel" />
      </div>
      <div>
        <span className="m_scroll_arrows unu" />
        <span className="m_scroll_arrows doi" />
        <span className="m_scroll_arrows trei" />
      </div>
    </div>
  );
}
