import { GetStaticProps, NextPage } from "next";
import { Design, DesignProps } from "@/components/screens/Design";
import data from '@json/data.json'


const DesignPage: NextPage<DesignProps> = ({ works }) => {
  return <Design works={works}/>;
}
 
export default DesignPage;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      works: data?.works?.filter(work => work.showDesign === true)
    },
    revalidate: 60
  }
}
