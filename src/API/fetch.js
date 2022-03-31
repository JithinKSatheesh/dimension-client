import axios from "axios";


const BASE_URL = `${process.env.REACT_APP_API_URL || 'http://localhost:1337'}/api/`

// ---------------------------------------
//  User
// ---------------------------------------

export function fetchProtfolio  (query) {
    return  axios.get(`${BASE_URL}portfolios?${query}`)
}

export function fetchMarketResearch  (query) {
    return  axios.get(`${BASE_URL}market-researches?${query}`)
}

export function fetchArticles  (query) {
    return  axios.get(`${BASE_URL}articles?${query}`)
}

export function fetchServicesPage  (query) {
    return  axios.get(`${BASE_URL}services-page?${query}`)
}

export function fetchClientRightsPage  (query) {
    return  axios.get(`${BASE_URL}client-rights-page?${query}`)
}
