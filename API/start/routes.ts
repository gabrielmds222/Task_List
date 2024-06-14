import Route from "@ioc:Adonis/Core/Route";

Route.get("/", async () => {
  return { hello: "Hello world" };
});
