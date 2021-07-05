import {useState, useEffect } from 'react'
import React from 'react'
import {Menu, Button, List, ListItem, Card, Header, Modal, Icon, Image, Message, Divider, PlaceholderParagraph, Placeholder} from 'semantic-ui-react';
import {Segment} from "semantic-react";

export const About = () =>{

    return (
        <div>
            <Image src="assets/images/logo192.png" floated='left'></Image>
            <p>
                CellFabrik is a biotech startup focused on developing gene therapies, artificial meat, *-omics analysis and aging research.
                Out team has expertise in regenerative medicine, aging research, bioinformatics and synthetic biology.
            </p>
        </div>

    )
}

export default About