import { FastifyInstance } from "fastify";
import { geocoderRouter } from "./geocoderRouter";
import { offersRouter } from "./offersRouter";

export function registerRouters(app: FastifyInstance) {
    geocoderRouter(app)
    offersRouter(app)
}