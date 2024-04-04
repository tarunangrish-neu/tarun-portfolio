import React from 'react';
import { useState } from 'react';
import { Container, Wrapper, Title, Desc, CardContainer } from './CertificateStyles';
import CertificateCard from '../Cards/CertificateCard';
import { certifications } from '../../data/constants';

const Certificates = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');

  return (
    <Container id="certifications">
      <Wrapper>
        <Title>Certifications</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <CardContainer>
          {toggle === 'all' && certifications
            .map((certificate) => (
              <CertificateCard key={certificate.id} certificate={certificate} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {certifications
            .filter((item) => item.category === toggle) // Changed == to === here
            .map((certificate) => (
              <CertificateCard key={certificate.id} certificate={certificate} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Certificates;
