import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard
          name={"Abhishek"}
          feedback={"Very nice shop i visit every week at the shop "}
        />

        <TestimonialCard
          name={"Aditya"}
          feedback={
            "Nice owner very friendly in nature and give me discount also"
          }
        />

        <TestimonialCard
          name={"Lakshya"}
          feedback={"Must visit this shop very friendly nature"}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
