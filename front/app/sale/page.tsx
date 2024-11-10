import Layout from '../_featured/layout/layout';
import  Info  from '../_components/Info';
import Sales from '../_components/Sales';
import SaleCards from '../_components/SaleCards';
import ReadMore from "../_components/ReadMore";

export default function Sale() {
  return (
    <div className="bg-background">
    <Layout>
    <Info/>
    <Sales/>
    <SaleCards/>
    <ReadMore/>
    </Layout>
    </div>
  )
}
