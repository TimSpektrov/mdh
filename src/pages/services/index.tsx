import { NextPage } from "next";
import { ServicesComponent } from "@/components/screens/Services/ServicesComponent";

const ServicesPage: NextPage = () => {
  return <ServicesComponent/>;
}

export default ServicesPage;

export function getStaticProps() {
  return {
    // returns the default 404 page with a status code of 404
    notFound: true,
  };
}
