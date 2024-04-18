import { GetStaticProps, NextPage } from 'next';
import { Home, HomeProps } from '@/components/screens/Home'
import data from '@json/data.json'

const HomePage: NextPage<HomeProps> = ({ works, services }) => {
  return <Home works={works} services={services} />
}

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  
  return {
    props: {
      works: data?.works?.filter(work => work.showHome === true),
      services: data?.services
    },
    revalidate: 30
  }
}
