import Layout from '../_featured/layout/layout';
import { Info } from '../_components/Info';
import Admintab from '../_components/Admintab';
import ReadMore from "../_components/ReadMore";

export default function Admin() {
  return (
    <div className="bg-background">
    <Layout>
    <Info/>
    <Admintab/>
    <ReadMore/>
    </Layout>
    </div>
  )
}
