import React from 'react';
import { Card, Image, Label } from 'semantic-ui-react';
import { ProjectCardTag } from './ProjectCardTag';
import { ProjectCardTagLabels } from './ProjectCardTagLabels';

interface ProjectCardProps {
    link?: string;
    image: string;
    title: string;
    description: string;
    tags: ProjectCardTagLabels[];
}

const ProjectCard = (props: ProjectCardProps) => {
    const renderTags = () =>
        props.tags.map((label) => <ProjectCardTag label={label} />);

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

export { ProjectCard };
