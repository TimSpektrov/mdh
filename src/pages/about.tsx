import { NextPage, GetStaticProps } from "next";
import { About } from "@/components/screens/About";
import data from '@json/data.json'

const AboutPage: NextPage<any> = ({ works, content }) => {
  return <About works={works} content={content}/>;
}

export default AboutPage;

export const getStaticProps: GetStaticProps = async () => {

  return {
    props: {
      works: data?.works?.filter(work => work.showAbout === true),
      content: data['pages-content']['about-page']
    },
    revalidate: 30
  }
}
