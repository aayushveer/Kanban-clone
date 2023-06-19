import React from 'react';
import styled from 'styled-components';
import { dummyProjects } from '../Common/dummyData';
import { Bullet } from '../../assets/icons/Bullet';
import { AddSquare } from '../../assets/icons/AddSquare';
import { Menu1 } from '../../assets/icons/Menu1';

const  Header = styled.header`
  display: none;
  @media (min-width: 640px) {
    display: flex;
  }
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 5px;
  margin-left: 22px;
`;

const  HeaderText = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: var(--grey);
  text-transform: uppercase;
`;

const  ProjectsList = styled.ul`
  display: none;
  @media (min-width: 640px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const  ProjectItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 3px;
  padding-left: 3px;
  padding-top: 10px;
`;

const  ProjectInfo = styled.span`
  display: flex;
  gap: 4px;
  align-items: center;
`;

const  ProjectName = styled.span`
  font-size: 14px;
  font-weight: medium;
  color: var(--grey);
`;

const  Active = styled( ProjectItem)`
  background-color: var(--blue);
  background-opacity: 0.1;
  border-radius: 6px;
`;

const  ActiveIcon = styled.span`
  margin-right: 3px;
`;

export default function MyProjects() {
  const projects = dummyProjects;
  const currentProject = dummyProjects[0];

  return (
    <div>
      <Header>
        <HeaderText>MY PROJECTS</HeaderText>
        <AddSquare />
      </Header>
      <ProjectsList>
        {projects.map((project) => (
          <React.Fragment key={project.id}>
            {project.id === currentProject.id ? (
              <Active>
                <ProjectInfo>
                  <Bullet color={project.favColor} />
                  <ProjectName>{project.name}</ProjectName>
                </ProjectInfo>
                <ActiveIcon>
                  <Menu1 />
                </ActiveIcon>
              </Active>
            ) : (
              <ProjectItem>
                < ProjectInfo>
                  <Bullet color={project.favColor} />
                  <ProjectName>{project.name}</ProjectName>
                </ProjectInfo>
              </ProjectItem>
            )}
          </React.Fragment>
        ))}
      </ProjectsList>
    </div>
  );
}
