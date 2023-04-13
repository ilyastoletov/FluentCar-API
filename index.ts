import Fastify from "fastify";
import { registerRouters } from "./routers/mainRouter";

const app = Fastify({logger: true})

registerRouters(app)

app.listen(5000, "0.0.0.0");
