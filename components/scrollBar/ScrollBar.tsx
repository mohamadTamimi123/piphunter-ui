import "./scrollBar.css";
export default function ScrollBar() {
  return (
    <section className={"scrol_bar_section"}>
      <div>
        <span className={"scrol_bar "}>
          <span className={"scrol_bar_ind bg-red-200"} />
          <span className={"scrol_tumb bg-white"} />
        </span>
        <span className={"scrol_text text-center pt-4"}>برو بالا</span>
      </div>
    </section>
  );
}
