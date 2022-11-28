import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Ajv from 'ajv';
import { StorageService } from 'src/app/shared/services/storage.service';
import { Project } from '../project/project.model';
import { User } from '../user/user.model';
import {
  AllowSchemaTypes,
  AllowDataTypes,
  allSchemes,
} from './schemes/schemes';

export type ReturnData = Project | User;

interface ValidationResult {
  data: AllowDataTypes;
  errorCase: string[];
}

interface ReadyData {
  data: ReturnData[];
  type: string;
}

const dataEntities = ['Projects', 'Users'];

@Injectable()
export class DataParserService {
  constructor(private _router: Router, private _storage: StorageService) {}

  private _avj = new Ajv({ allErrors: true });

  public parseData(jsonString: string) {
    try {
      const data: AllowDataTypes = JSON.parse(jsonString);
      const validatedData = this._validateData(data);
      if (validatedData) {
        this._storage.selectItemAndUpdate(
          validatedData.data,
          validatedData.type
        );
        this._storage.selectItemAndUpdate(
          validatedData.data,
          validatedData.type
        );
        this._router.navigate([`/${validatedData.type}`]);
      }
    } catch (error) {
      console.warn(error);
    }
  }

  private _validateData(data: AllowDataTypes): ReadyData | undefined {
    const validationErrors = [];
    for (const [key, schema] of Object.entries(allSchemes)) {
      for (let index = 0; index < schema.length; index++) {
        const validationResult: ValidationResult = this._selectSchema(
          schema[index],
          data
        );
        if (validationResult.errorCase.length == 0) {
          return { data: this._dataStandartization(data), type: key };
        }
        validationErrors.push(validationResult.errorCase);
      }
    }
    console.log(validationErrors);
    return;
  }

  private _selectSchema(
    schema: AllowSchemaTypes,
    data: AllowDataTypes
  ): ValidationResult {
    const isValid = this._avj.validate(schema, data);
    const errorCase: string[] = [];
    if (!isValid) {
      errorCase.push(this._avj.errorsText());
    }
    return { data, errorCase };
  }

  private _dataStandartization(data: AllowDataTypes): ReturnData[] {
    const standartedData = [];
    if (Array.isArray(data)) {
      standartedData.push(...data);
    } else if (
      Object.keys(data).some((value) => dataEntities.indexOf(value) >= 0)
    ) {
      standartedData.push(...Object.values(data).flat(1));
    } else {
      standartedData.push(data);
    }
    return standartedData;
  }
}
