const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  right,
  mb = "100px",
  color = "black",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  right?: boolean;
  mb?: string;
  color?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""} ${right ? "text-right" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className={`mb-4 text-3xl font-bold !leading-tight text-${color} sm:text-4xl md:text-[45px] font-akira`}>
          {title}
        </h2>
        <p className="text-base !leading-relaxed text-body-color md:text-lg">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
