import Layout from '../_featured/layout/layout';
import  Info  from '../_components/Info';
import CartContinue from "../_components/CartContinue"

export default function Cart() {
  return (
    <div className="bg-background">
    <Layout>
    <Info/>
    <CartContinue/>
    </Layout>
    </div>
  )
}
