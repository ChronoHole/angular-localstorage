import { JSONSchemaType } from 'ajv';
import { User, UserEntity } from '../../user/user.model';

const userSchema: JSONSchemaType<User> = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    username: { type: 'string' },
    role: { type: 'string' },
  },
  required: ['id', 'username', 'role'],
  additionalProperties: false,
};

const usersSchema: JSONSchemaType<User[]> = {
  type: 'array',
  items: userSchema,
  uniqueItems: true,
  minItems: 1,
};

const userEntitySchema: JSONSchemaType<UserEntity> = {
  type: 'object',
  properties: {
    Users: usersSchema,
  },
  required: ['Users'],
};

export const userSchemes = [userEntitySchema, usersSchema, userSchema];
