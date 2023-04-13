export type OfferRequest = {
    offer_id: Number,
    price: Number,
    route: string,
    maxPassenger: Number,
    status: Boolean,
    responses: Number,
    name: string,
    phone: string,
    userEmail: string
    respondents: []
}

export type UserRequest = {
    phone: string,
    email: string,
    password: string,
    name: string,
    offers: [],
}

export type DeleteOffer = {
    offer_route: string
    user_email: string
}

export type UserMailQuery = {
    user_mail: string
}

 export type SearchPrompt = {
    query: string
 }

 export type ApplyOffer = {
    offer_route: string,
    user_mail: string
 }