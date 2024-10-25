import React from 'react';
import Layout from '../_featured/layout/layout';
import  Info  from '../_components/Info';
import ReadMore from "../_components/ReadMore";
import PotsCards from '../_components/PotsCards';
import PotsText from '../_components/PotsText';

export default function Pots() {
  return (
    <div className="bg-background">
    <Layout>
    <Info/>
    <PotsText/>
    <PotsCards/>
    <ReadMore/>
    </Layout>
    </div>
  )
}
