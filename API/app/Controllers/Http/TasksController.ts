import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Task from "App/Models/Task";

export default class TasksController {
  public async index({}: HttpContextContract) {
    const task = await Task.all();
    return task;
  }

  public async store({ request }: HttpContextContract) {
    const body = request.only(["title", "description"]);
    const task = await Task.create({
      title: body.title,
      description: body.description,
    });

    console.log(task.$isPersisted);
    return task;
  }

  public async show({ request }: HttpContextContract) {
    const taskId = request.param("id");
    const task = await Task.findOrFail(taskId);
    return task;
  }

  public async update({ request }: HttpContextContract) {
    const taskId = request.param("id");
    const body = request.only(["title", "description"]);
    const task = await Task.findOrFail(taskId);
    await task.merge(body).save();
    return task;
  }

  public async destroy({ request }: HttpContextContract) {
    const taskId = request.param("id");
    const task = await Task.findOrFail(taskId);
    await task.delete();
  }
}
