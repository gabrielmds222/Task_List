import { DateTime } from "luxon";
import {
  BaseModel,
  beforeCreate,
  beforeSave,
  column,
} from "@ioc:Adonis/Lucid/Orm";
import { v4 as uuidv4 } from "uuid";

import Hash from "@ioc:Adonis/Core/Hash";
export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: string;

  @beforeCreate()
  public static assignUuid(user: User) {
    user.id = uuidv4();
  }

  @column()
  public username: string;

  @column()
  public email: string;

  @column({ serializeAs: null })
  public password: string;

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password);
    }
  }

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
