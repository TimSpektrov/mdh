import { NextPage, GetStaticProps } from "next";
import { Identity, IdentityProps } from "@/components/screens/Identity";
import data from '@json/data.json'
import { usePageDateStore } from '@/store/usePageDataStore';
import { useEffect } from 'react';
import { AUDIT_URL, IDENTITY_URL } from '@/helpers/apiRequests';


const IdentityPage: NextPage<IdentityProps> = () => {
  const {content, fetchData } = usePageDateStore(state => ({
    content: state.content,
    fetchData: state.fetchData,
  }))
  useEffect(() => {
    fetchData(IDENTITY_URL, 'identity')
  }, []);

  if(!content?.identity) return  null

  return <Identity content={content.identity} />;
}

export default IdentityPage;

// export const getStaticProps: GetStaticProps = async () => {
//   return {
//     props: {
//       works: data?.works?.filter(work => work.showIdentity === true),
//       rates: data?.rates
//     },
//     revalidate: 60,
//   }
// }
