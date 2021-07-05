import {useState, useEffect } from 'react'
import React from 'react'
import {Menu, Button, List, ListItem, Card, Header, Modal, Icon, Image, Message, Divider} from 'semantic-ui-react';

export const Team = () =>{
    return (
        <List horizontal="true">
            <ListItem>
                <Card>
                    <Image size="medium" src='assets/images/bogdan_micu.jpg' wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Bogdan Micu</Card.Header>
                        <Card.Meta>
                            CEO, founder
                        </Card.Meta>
                        <Card.Description>
                            Serial entrepreneur, investor, volunteer and environmental activist and a former councilor in the Cioloş Government.
                        </Card.Description>
                    </Card.Content>
                </Card>
            </ListItem>
            <ListItem>
                <Card>
                    <Image size="medium" src='assets/images/robi_tacutu.jpg' wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Robi Tacutu, PhD</Card.Header>
                        <Card.Meta>
                            <span className='date'>CEO, founder</span>
                        </Card.Meta>
                        <Card.Description>
                            Since 2016, Robi lead Systems Biology of Aging Group (a group of more than 15 people) at the Institute of Biochemistry and focuses on using computational methods in conjunction with large screening datasets to understand the genetic, cellular, and molecular mechanisms behind ageing, longevity and age-related diseases.
                            <br />Research interests: Biology/genetics of ageing, longevity and age-related diseases; Prediction of single/multi longevity regulators; Biomarker profiling for healthcare; Bioinformatics; Genomics, epigenomics, transcriptomics; Systems biology; Network biology; Computational biology; Synthetic biology (gene circuit design)
                        </Card.Description>
                    </Card.Content>
                </Card>
            </ListItem>
            <ListItem>
                <Card>
                    <Image size="medium" src='assets/images/ioan-matei.jpg' wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Ioan Matei, MD, PhD</Card.Header>
                        <Card.Meta> Regenerative medicine researcher, co-founder

                        </Card.Meta>
                        <Card.Description>
                            Ioan has a background in regenerative medicine, cell therapies, stem cell science and diabetes research.
                            He has worked extensively on endocrine pancreatic cell differentiation.
                            Ioan also developed an interest in ageing research and synthetic biology, and worked on CRISPR-based gene editing for corroborating models of synergistic gene interaction generated through bioinformatic modeling for regulating longevity in la Caenorhabditis elegans.
                        </Card.Description>
                    </Card.Content>
                </Card>
            </ListItem>
            <ListItem>
                <Card>
                    <Image size="medium" src='assets/images/eugen_ursu.jpg' wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Eugen Ursu, MD</Card.Header>
                        <Card.Meta> Bioinformatician, medical doctor and wetlab biologist, co-founder
                        </Card.Meta>
                        <Card.Description>
                            Eugen has formal education in medicine. Besides studying medicine, Eugen has honed his technical skills in computer science, since technical subjects were always a passion for him. This determined his growing interests in the fields of computational biology and bioinformatics.
                            Research interests in neuroscience, aging research, cellular agriculture, machine learning, computer vision, regenerative medicine.
                        </Card.Description>
                    </Card.Content>
                </Card>
            </ListItem>
            <ListItem>
                <Card>
                    <Image size="medium" src='assets/images/mitya_toren.jpg' wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Mitya Toren, PhD</Card.Header>
                        <Card.Meta> Biologist, co-founder  </Card.Meta>
                        <Card.Description>
                            Mitya has participated in a number of projects, all related to ageing and longevity: (1) Mitochondrial determinants of mammalian longevity; (2) Skin wound healing after surgery in mice of different age and longevity phenotype; (3) curation of longevity databases (GenAge, AnAge and MitoAge).
                            His research interests include: Longevity, Aging, Mitochondrial genetics, Molecular biology, Bioinformatics, Genomics and Transcriptomics, Databases for comparative studies.
                        </Card.Description>
                    </Card.Content>
                </Card>
            </ListItem>
            <ListItem>
                <Card>
                    <Image size="medium" src='assets/images/anton_kulaga.jpg' wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Anton Kulaga</Card.Header>
                        <Card.Meta> Bioinformatician, co-founder</Card.Meta>
                        <Card.Description>
                            Anton’s research interests lie in the fields of biogerontology, mammalian synthetic biology, bioinformatics, machine learning, extended reality and new institutional economics.
                     </Card.Description>
                    </Card.Content>
                </Card>
            </ListItem>
        </List>

    )
}

export default Team