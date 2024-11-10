import Layout from '../_featured/layout/layout';
import  Info  from '../_components/Info';
import Gift from '../_components/Gift';
import GiftCards from '../_components/GiftCards';
import ReadMore from "../_components/ReadMore";

export default function Gifts() {
  return (
    <div className="bg-background">
    <Layout>
    <Info/>
    <Gift/>
    <GiftCards/>
    <ReadMore/>
    </Layout>
    </div>
  )
}
