import Route from "@ioc:Adonis/Core/Route";

Route.get("/hello", async () => {
  return { hello: "Hello world" };
});

Route.post("login", async ({ auth, request, response }) => {
  const email = request.input("email");
  const password = request.input("password");

  try {
    const token = await auth.use("api").attempt(email, password);
    return token;
  } catch {
    return response.unauthorized("Invalid credentials");
  }
});

Route.get("dashboard", async ({ auth }) => {
  await auth.use("api").authenticate();
  console.log(auth.user);
  return `Olá ${auth.user?.username}, você está autenticado`;
});

Route.resource("tasks", "TasksController");

Route.resource("users", "UsersController");
