import Spline from "@splinetool/react-spline";

import style from "@/styles/index_main_slider.module.scss";

export default function SplineComponents() {
  return (
    <main className={style.spline_class}>
      <Spline scene="https://prod.spline.design/wOYy0-nJ8GZOnfQ5/scene.splinecode" />
    </main>
  );
}
