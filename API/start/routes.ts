import Route from "@ioc:Adonis/Core/Route";

Route.get("/hello", async () => {
  return { hello: "Hello world" };
});

Route.resource("tasks", "TasksController");

Route.resource("users", "UsersController");
