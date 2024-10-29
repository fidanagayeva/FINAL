import Layout from '../_featured/layout/layout';
import  Info  from '../_components/Info';
import InspirationImg from '../_components/InspirationImg';
import Highlightedblogs from '../_components/Highlightedblogs';

export default function Inspiration() {
  return (
    <div className="bg-background">
    <Layout>
    <Info/>
    <InspirationImg/>
    <Highlightedblogs/>
    </Layout>
    </div>
  )
}
