import indexStyle from "@/styles/index_style.module.scss";
export default function SectionTitle({
  title,
  className,
}: {
  title: string;
  className: string | undefined ;


}) {
  return (
    <>
      <h2 className={` ${className} text-center ${indexStyle.title}`}>
        {title}
      </h2>
      <span className={`${indexStyle.title_miror} text-center font-bold block`}>
        {title}
      </span>
    </>
  );
}
