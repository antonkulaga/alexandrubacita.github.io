import {useState, useEffect } from 'react'
import React from 'react'
import {Menu, Button, List, ListItem, Card, Header, Modal, Icon, Image, Message, Divider} from 'semantic-ui-react';
import {Segment} from "semantic-react";

export const CleanMeat = () =>{

    return (
        <div>
            <Image size="medium" src="assets/images/clean_meat_wiki.jpg"  size="medium" floated='left'></Image>
            <p>
                Producing edible meat that is sustainable and eco-friendly is a major concern for both the private and public biotech sectors. Given the challenges of an expanding consumer base, environmental concerns and climate change, animal welfare, food safety, as well as the development of novel foods designed to enhance the quality and diversity of nutrient content, this is a highly timely topic.
            </p>
            <p>
                Up until now, several strategies to produce “clean meat”, i.e. edible meat destined for human consumption that does not require mass factory farming and greenhouse emissions, have been proposed. Clean meat is largely produced either from vegetable biomass, or by using in vitro cell culture techniques to grow, propagate, and differentiate stem cells into mature muscle fibers that accurately replicate native muscle fiber cytoarchitecture. This is followed by tissue engineering approaches designed to reproduce in vitro muscle tissue that is appropriate for human consumption. The field of producing clean meat is on the rise, yielding new opportunities for innovation. Industrial production is a process that can be optimized at multiple levels. Several cell-based meat products have been taste-tested, including cell-based duck, pork sausage, foie gras, fat, beef meatballs, beef hamburgers, and beefsteak strips. Our approach focuses on using CRISPR-based gene editing to reprogram an array of mammalian mesenchymal stem cells populations towards a muscle-like phenotype in culture setups designed to increase differentiation efficiency. Furthermore, we aim to address the hurdles of upscaling the process from bench-grade methods towards a semi-industrialized bioprocess, by integrating tissue engineering, scaffolding and 3D-printing-based approaches.
            </p>

        </div>

    )
}

export default CleanMeat