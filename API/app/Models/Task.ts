import { DateTime } from "luxon";
import { v4 as uuidv4 } from "uuid";
import { BaseModel, beforeCreate, column } from "@ioc:Adonis/Lucid/Orm";

export default class Task extends BaseModel {
  @column({ isPrimary: true })
  public id: string;

  @beforeCreate()
  public static assignUuid(task: Task) {
    task.id = uuidv4();
  }

  @column()
  public title: string;

  @column()
  public description: string;

  @column()
  public status: boolean;

  @column()
  public deadline: DateTime;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
