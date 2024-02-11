

import { useRouter } from "next/router";
import teamDetails from "./teamDetials";

const AboutPerson = () => {
  const router = useRouter();
  const Id = router.query.developerId;


  const person = teamDetails.find((person) => person.id === parseInt(Id));

  return (
    <>
      {person ? (
        <div>
          <h1>{person.name}</h1>
          <p>{person.role}</p>
        </div>
      ) : (
        <p>Developer doesn't exist</p>
      )}
    </>
  );
};

export default AboutPerson;
