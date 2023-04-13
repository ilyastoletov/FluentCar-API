import axios from "axios";
import { FastifyInstance } from "fastify";
import { rmSync } from "fs";
import { GeocoderParams, GeocodeResponse, ReverseGeocodeParams } from "../types/geocodeTypes";
import { ReverseGeocodeResponse } from "../types/reverseGeocodeTypes";

export const geocoderRouter = (app: FastifyInstance) => {

    app.get<{Querystring: GeocoderParams}>("/geocodeCoords", async (req, res) => {
        const geocodeResponse = await axios.get<GeocodeResponse>(`https://geocode-maps.yandex.ru/1.x/?apikey=f75f2782-6c2e-438d-bfb3-77be826cff57&geocode=${req.query.longitude},${req.query.latitude}&format=json`);
        console.log(geocodeResponse.data)
        res.send({
            "city_name": geocodeResponse.data.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.text
        })
    })

    app.get<{Querystring: ReverseGeocodeParams}>("/reverseGeocode", async (req, res) => {
        const reverseGeocodeResponse = await axios.get<ReverseGeocodeResponse>(`https://geocode-maps.yandex.ru/1.x/?apikey=f75f2782-6c2e-438d-bfb3-77be826cff57&geocode=${req.query.adress_string}&format=json`)
        try {
            const coordinates = reverseGeocodeResponse.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(" ")
            res.send({
                latitude: coordinates[1],
                longitude: coordinates[0]
            })
        } catch {
            res.send({
                latitude: "0.0000",
                longitude: "0.0000"
            })
        }
    })

}

