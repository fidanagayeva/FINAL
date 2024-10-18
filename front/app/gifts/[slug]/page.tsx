"use client";
import Layout from "../../_featured/layout/layout";
import {Info} from "../../_components/Info/index";

import { useParams } from 'next/navigation';

export default function DetailGifts() {
    const params = useParams(); // useParams-i istifadə edin
    const slug = params.slug; // slug parametrini alın

    return (
        <div>
            <Layout>
            <Info/>
            <h1>Gift Card Details</h1>
            <p>Details for card ID: {slug}</p>
            {/* Burada kartın detalları göstəriləcək */}
            </Layout>
        </div>
    );
}
