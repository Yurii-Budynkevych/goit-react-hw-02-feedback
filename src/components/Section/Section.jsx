import './Section.css';

const Section = ({ title, children }) => {
  return (
    <section>
      <h2 className="title">{title}</h2>
      {children}
    </section>
  );
};
export default Section;
