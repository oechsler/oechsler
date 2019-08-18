import React from 'react';
import { Card, Image, Label } from 'semantic-ui-react';
import { ProjectsCardTag } from './ProjectsCardTag';
import { ProjectsCardTagLabels } from './ProjectCardTagLabels';

interface ProjectsCardProps {
    link?: string;
    image: string;
    title: string;
    description: string;
    tags: ProjectsCardTagLabels[];
}

const ProjectsCard = (props: ProjectsCardProps) => {
    const renderTags = () =>
        props.tags.map((label, index) => (
            <ProjectsCardTag key={index} label={label} />
        ));

    return (
        <Card href={props.link} as={props.link ? 'a' : null}>
            <Image src={props.image} />
            <Card.Content>
                <Card.Header>{props.title}</Card.Header>
                <Card.Description>{props.description}</Card.Description>
                <Label.Group size='mini'>{renderTags()}</Label.Group>
            </Card.Content>
        </Card>
    );
};

export { ProjectsCard };
