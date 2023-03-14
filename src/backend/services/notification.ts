import { Entity } from '../types';

export class NotificationService {
  constructor() {}

  getByProperty(property: string, value: any) {}
  getById(id: string) {}
  getByEntity(entity: Entity) {}

  updateById(id: string, message: any) {}
  updateStatusById(id: string, status: any) {}

  create(message: any) {}

  deleteById(id: string) {}
};