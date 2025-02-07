import { observable, makeAutoObservable, action, computed } from 'mobx';
import { Notification } from 'domain/notification';
import { NotificationStore } from './notification.store';

export class NotificationStoreImpl implements NotificationStore {
  @observable private _data: Notification[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  @computed list(): Notification[] {
    return this._data;
  }

  @action save(entity: Notification): Notification {
    this._data.push(entity);

    return entity;
  }

  @action delete(entity: Notification): Notification {
    this._data = this._data.filter(notification => notification.id !== entity.id);

    return entity;
  }
}
