import React from 'react';
import { Label } from 'semantic-ui-react';
import { ProjectsCardTagColors } from './ProjectCardTagColors';
import { ProjectsCardTagLabels } from './ProjectCardTagLabels';

interface ProjectsCardTagProps {
    label: ProjectsCardTagLabels;
}

const ProjectsCardTag = (props: ProjectsCardTagProps) => {
    const label = props.label;
    const color = ProjectsCardTagColors[label];

    const labelsToDeviconName = (label: ProjectsCardTagLabels) => {
        const labelMap: Record<string, string> = {
            'C#': 'visualstudio',
            GitHub: 'github_badge',
            Shell: 'terminal',
            iOS: 'apple',
            macOS: 'apple',
        };
        const result = labelMap[label];

        return (result ? result : label).toLocaleLowerCase();
    };

    return (
        <Label color={color}>
            <i className={`devicons devicons-${labelsToDeviconName(label)}`} />
            {label}
        </Label>
    );
};

export { ProjectsCardTag };
