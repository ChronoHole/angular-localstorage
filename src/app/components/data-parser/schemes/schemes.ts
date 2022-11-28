import { AllowProjectTypes } from '../../project/project.model';
import { AllowUserTypes } from '../../user/user.model';
import { projectSchemes } from './project.schema';
import { userSchemes } from './user.schema';

export const [projectEntitySchema, projectsSchema, projectSchema] =
  projectSchemes;

export const [userEntitySchema, usersSchema, userSchema] = userSchemes;

export const allSchemes = {
  projects: projectSchemes,
  users: userSchemes,
};

type ProjectSchemaType = typeof projectSchema;
type ProjectsSchemaType = typeof projectsSchema;
type ProjectEntitySchemaType = typeof projectEntitySchema;

type UserSchemaType = typeof userSchema;
type UsersSchemaType = typeof usersSchema;
type UserEntitySchemaType = typeof userEntitySchema;

export type AllowProjectSchemaTypes =
  | ProjectSchemaType
  | ProjectsSchemaType
  | ProjectEntitySchemaType;

export type AllowUserSchemaTypes =
  | UserSchemaType
  | UsersSchemaType
  | UserEntitySchemaType;

export type AllowSchemaTypes = AllowProjectSchemaTypes | AllowUserSchemaTypes;
export type AllowDataTypes = AllowProjectTypes | AllowUserTypes;
