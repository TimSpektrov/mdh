import { NextPage, GetStaticProps } from "next";
import { Identity, IdentityProps } from "@/components/screens/Identity";
import data from '@json/data.json'


const IdentityPage: NextPage<IdentityProps> = () => {
  return <Identity />;
}

export default IdentityPage;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      works: data?.works?.filter(work => work.showIdentity === true),
      rates: data?.rates
    },
    revalidate: 60,
  }
}
