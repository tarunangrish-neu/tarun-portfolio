import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>Full Stack Projects</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>Full Stack Projects</ToggleButton>
          }
          <Divider />
          {toggle === 'fin app' ?
            <ToggleButton active value="fin app" onClick={() => setToggle('fin app')}>Finance Projects</ToggleButton>
            :
            <ToggleButton value="fin app" onClick={() => setToggle('fin app')}>Finance Projects</ToggleButton>
          }
          <Divider />
          {toggle === 'machine learning' ?
            <ToggleButton active value="machine learning" onClick={() => setToggle('machine learning')}>Machine Learning</ToggleButton>
            :
            <ToggleButton value="machine learning" onClick={() => setToggle('machine learning')}>Machine Learning</ToggleButton>
          }
          <Divider />
          {toggle === 'mini projects' ?
            <ToggleButton active value="mini projects" onClick={() => setToggle('mini projects')}>Mini Projects</ToggleButton>
            :
            <ToggleButton value="mini projects" onClick={() => setToggle('mini projects')}>Mini Projects</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects