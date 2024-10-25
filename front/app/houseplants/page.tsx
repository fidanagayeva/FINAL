import React from 'react';
import Layout from '../_featured/layout/layout';
import { Info } from '../_components/Info';
import ReadMore from "../_components/ReadMore";
import Houseplntscards from '../_components/Houseplntscards';
import HouseText from '../_components/HouseText';

export default function Houseplants() {
  return (
    <div className="bg-background">
    <Layout>
    <Info/>
    <HouseText/>
    <Houseplntscards/>
    <ReadMore/>
    </Layout>
    </div>
  )
}
