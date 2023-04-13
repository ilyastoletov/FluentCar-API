import { FastifyInstance } from "fastify";
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore, FieldValue } from "firebase-admin/firestore";
import { DeleteOffer, OfferRequest, SearchPrompt, UserMailQuery, UserRequest } from "../types/offerTypes";


const serviceAccount = require("../fluent-car-bfc20-firebase-adminsdk-9613y-8376534460.json");
initializeApp({credential: cert(serviceAccount)})
const db = getFirestore();

export const offersRouter = (app: FastifyInstance) => {
    
    app.post<{Body: OfferRequest}>("/createOffer", async (req, res) => {
        await db.collection('offers').doc(req.body.route).set(req.body)
        const updateUser = await db.collection('users').doc(req.body.userEmail)
        updateUser.update({offers: FieldValue.arrayUnion(req.body)})
        res.send({message : "Offer successfully added!"})
    })

    app.post<{Body: UserRequest}>("/createUser", async (req, res) => {
        await db.collection('users').doc(req.body.email).set(req.body)
        res.send({message : "User added"})
    })

    app.post<{Querystring: DeleteOffer}>("/deleteOffer", async (req, res) => {
        const offerDocument = await db.collection('offers').doc(req.query.offer_route).get()
        await db.collection('users').doc(req.query.user_email).update({offers: FieldValue.arrayRemove(offerDocument)})
        await db.collection('offers').doc(req.query.offer_route).delete()
        res.send({message: "Offer deleted"})
    })

    app.get<{Querystring: UserMailQuery}>("/getUserData", async (req, res) => {
        const user = await db.collection('users').doc(req.query.user_mail).get()
        res.send(user.data)
    })

    app.get("/getAllOffers", async (req, res) => {
        const documentsCollection = (await db.collection('offers').get()).docs
        var finalDocuments: Object[] = []
        for (var i = 0; i < documentsCollection.length; i++) {
            finalDocuments.push(documentsCollection[i].data)
        }
        res.send(finalDocuments)
    })

}