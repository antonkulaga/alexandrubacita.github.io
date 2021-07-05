import {useState, useEffect } from 'react'
import React from 'react'
import {Menu, Button, List, ListItem, Card, Header, Modal, Icon, Image, Message, Divider} from 'semantic-ui-react';
import {Segment} from "semantic-react";

export const LifeExtension = () =>{

    return (
        <div>
            <Image size="medium" src="assets/images/aging.webp"  size="medium" floated='left'></Image>
            <p>Aging is a biological process defined by a progressive loss of viability and an exponential increase in fragility and vulnerability. Age is also the main risk factor for many diseases, including most types of cancers, heart and vascular diseases, type 2 diabetes, neurodegenerative diseases, etc. This is not surprising, as at the molecular level, age-related diseases share many genetic components and molecular pathways with the “normal” aging process.
            </p>
            <p>
            Understanding the aging process, and the mechanisms underlining it, is one of the major biological and biomedical challenges of our century and could result in much higher dividends to society in our capacity to extend lifespan and more importantly healthspan (i.e. the interval of healthy, productive years in a person’s life).
            </p><p>
            With the current advances in high-throughput technologies many of the genetic and molecular aspects of aging can now be easily screened at various “omics” levels, using a wide range of models and starting from various hypotheses. While all the existing datasets are extremely valuable by themselves, they pose an incomparably higher potential if analyzed together. In terms of data integration however, more efforts are required to achieve a cohesive approach and an integrative view on how these molecular measurements are all interconnected and manifest as aging and/or age-related diseases. Such a multi-model integration, combined with systems biology approaches will be of paramount importance in the coming years and will maximize the amount of knowledge that we can gather from gerontological observational studies.
            </p>
        </div>

    )
}

export default LifeExtension