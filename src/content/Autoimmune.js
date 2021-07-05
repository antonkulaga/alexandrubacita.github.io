import {useState, useEffect } from 'react'
import React from 'react'
import {
    Menu,
    Button,
    List,
    ListItem,
    Card,
    Header,
    Modal,
    Icon,
    Image,
    Message,
    Divider,
    Placeholder
} from 'semantic-ui-react';
import {Segment} from "semantic-react";

export const Autoimmune = () =>{

    return (
        <div>
            <Image  size="medium" src="assets/images/antibody.jpg" floated='left'></Image>
            <p>
                The project aims at developing therapy against autoimmune diseases where it is possible to locate the variable part in lymphocytes that causes the autoimmune response.
                Our hypothesis is that the variable regions of immunoglobulins which target self antigens and cause the pathogenic autoimmune response could be sequenced/identified on a case-by-case basis, and interfered using base editing CRISPR, thereby inhibiting the autoimmune response and producing a curative intervention for these diseases.
                At the first stage we want to make a proof-of-concept study using in vitro human cell-culture setting for autoimmune diseases where the antigens targeted by the autoantibodies have been identified.
            </p>
        </div>

    )
}

export default Autoimmune