import { ProjectEntity, Project } from '../../project/project.model';
import { JSONSchemaType } from 'ajv';

const projectSchema: JSONSchemaType<Project> = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    subject: { type: 'string' },
    description: { type: 'string', nullable: true },
    createdBy: { type: 'string' },
    startDate: { type: 'string' },
    endDate: { type: 'string' },
    cost: { type: 'number' },
  },
  required: ['id', 'subject', 'createdBy', 'startDate', 'endDate', 'cost'],
  additionalProperties: false,
};

const projectsSchema: JSONSchemaType<Project[]> = {
  type: 'array',
  uniqueItems: true,
  items: projectSchema,
  minItems: 1,
};

const projectEntitySchema: JSONSchemaType<ProjectEntity> = {
  type: 'object',
  properties: {
    Projects: projectsSchema,
  },
  required: ['Projects'],
};

export const projectSchemes = [
  projectEntitySchema,
  projectsSchema,
  projectSchema,
];
