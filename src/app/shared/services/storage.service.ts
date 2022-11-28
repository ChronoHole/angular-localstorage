import { Injectable } from '@angular/core';
import { ReturnData } from 'src/app/components/data-parser/data-parser.service';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  getItems<T>(item: string): T[] {
    return JSON.parse(localStorage.getItem(item) || '[]');
  }

  setItems(item: string, value: string) {
    localStorage.setItem(item, value);
  }

  selectItemAndUpdate(item: ReturnData[], type: string) {
    const dataFromStorage: ReturnData[] = this.getItems(type);
    const unionData = this._arraysUnion([dataFromStorage, item], 'id');
    this.setItems(type, JSON.stringify(unionData));
  }

  private _arraysUnion<T>(arrays: Array<T[]>, keyToUnion: keyof T): Array<T> {
    const map = new Map();
    arrays.forEach((array) => {
      array.forEach((object) => {
        map.set(object[keyToUnion], object);
      });
    });
    return [...map.values()];
  }
}
