import React from "react";

import avatarAnisha from "../../assets/images/avatar-anisha.png";
import avatarAli from "../../assets/images/avatar-ali.png";
import avatarRichard from "../../assets/images/avatar-richard.png";
import avatarShanai from "../../assets/images/avatar-shanai.png";
import {
  Client,
  Elements,
  TestimonialsContainer,
  TestimonialContainer,
  Button,
} from "./testimonials.component.styles";

const Testimonials = () => {
  const Testimonial = [
    {
      image: avatarAnisha,
      name: "Anisha Li",
      said: "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
    },
    {
      image: avatarAli,
      name: "Ali Bravo",
      said: "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
    },
    {
      image: avatarRichard,
      name: "Richard Watts",
      said: "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”",
    },
    {
      image: avatarShanai,
      name: "Shanai Gough",
      said: "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”",
    },
  ];
  return (
    <TestimonialsContainer>
      <h1>What they’ve said</h1>
      <TestimonialContainer>
        {Testimonial.map(({ name, said, image }, index) => {
          return (
            <Elements key={index}>
              <Client src={image} alt={name} />
              <h2>{name}</h2>
              <p>{said}</p>
            </Elements>
          );
        })}
      </TestimonialContainer>
      <Button> Get Started</Button>
    </TestimonialsContainer>
  );
};

export default Testimonials;
