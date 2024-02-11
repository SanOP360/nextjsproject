import teamDetails from "./teamDetials";
import Link from "next/link";

const AboutPage = () => {
  return (
    <>
      <h1>About Us</h1>
      <ul>
        {teamDetails.map((person) => (
          <li key={person.id}>
            <Link href={`/aboutus/${person.id}`}>
              {person.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AboutPage;
