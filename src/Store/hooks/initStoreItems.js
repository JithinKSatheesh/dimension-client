import React, {useContext} from 'react'

import { fetchProtfolio, fetchMarketResearch, fetchArticles, fetchServicesPage, fetchClientRightsPage, fetchTeam, fetchAboutPage, fetchFaq, fetchCareers, fetchRegulations } from 'API/fetch'

import { Store as StoreProtfolio } from 'Store/protfolio'
import { Store as StoreMarketResearch } from 'Store/marketResearch'
import { Store as StoreArticles } from 'Store/articles'
import { Store as StoreServices } from 'Store/services'
import { Store as StoreClientRights } from 'Store/clientRights'
import { Store as StoreTeam } from 'Store/team'
import { Store as StoreAboutPage } from 'Store/aboutPage'
import { Store as StoreFaq } from 'Store/faq'
import { Store as StoreCareers } from 'Store/careers'
import { Store as StoreRegulations } from 'Store/regulations'

const qs = require('qs');

export default function Initstore(props) {

    const _StoreProtfolio = useContext(StoreProtfolio)
    const _StoreMarketResearch = useContext(StoreMarketResearch)
    const _StoreArticles = useContext(StoreArticles)
    const _StoreServices = useContext(StoreServices)
    const _StoreClientRights = useContext(StoreClientRights)
    const _StoreAboutPage = useContext(StoreAboutPage)
    const _StoreTeam = useContext(StoreTeam)
    const _StoreFaq = useContext(StoreFaq)
    const _StoreCareers = useContext(StoreCareers)
    const _StoreRegulations = useContext(StoreRegulations)

    
    const initProtfolio = async() => {

        const query = qs.stringify({
            populate : ["image"]
            
          }, {
            encodeValuesOnly: true, // prettify url
          });

        try {

            const res = await fetchProtfolio(query)
            const data = res?.data?.data || []
            _StoreProtfolio.dispatch({
                type : 'initState',
                payload : [...data]
            })


        } catch (ex) {
            console.log(ex)
        }
        
    }

    const initMarketResearch = async() => {

        const query = qs.stringify({
            populate : ["image"]
            ,
          }, {
            encodeValuesOnly: true, // prettify url
          });

        try {

            const res = await fetchMarketResearch(query)
            const data = res?.data?.data || []
            // console.log(data)
            _StoreMarketResearch.dispatch({
                type : 'initState',
                payload : [...data]
            })


        } catch (ex) {
            console.log(ex)
        }
        
    }
    const initArticles = async() => {

        const query = qs.stringify({
            populate : ["image"],
          }, {
            encodeValuesOnly: true, // prettify url
          });

        try {

            const res = await fetchArticles(query)
            const data = res?.data?.data || []
            // console.log(data)
            _StoreArticles.dispatch({
                type : 'initState',
                payload : [...data]
            })


        } catch (ex) {
            console.log(ex)
        }
        
    }

    const initServices = async() => {

        const query = qs.stringify({
            populate : ["regilation_documents_capital_market_pdf"],
          }, {
            encodeValuesOnly: true, // prettify url
          });

        try {

            const res = await fetchServicesPage(query)
            const data = res?.data?.data || {}
            // console.log(data)
            _StoreServices.dispatch({
                type : 'initState',
                payload : {...data}
            })


        } catch (ex) {
            console.log(ex)
        }
        
    }

    const initClientRights = async() => {

        const query = qs.stringify({
            populate : ["regilation_documents_pdf"],
          }, {
            encodeValuesOnly: true, // prettify url
          });

        try {

            const res = await fetchClientRightsPage(query)
            const data = res?.data?.data || {}
            // console.log(data)
            _StoreClientRights.dispatch({
                type : 'initState',
                payload : {...data}
            })


        } catch (ex) {
            console.log(ex)
        }
        
    }
    const initTeam = async() => {

        const query = qs.stringify({
            populate : ["image"],
          }, {
            encodeValuesOnly: true, // prettify url
          });

        try {

            const res = await fetchTeam(query)
            const data = res?.data?.data || []
            // console.log(data)
            _StoreTeam.dispatch({
                type : 'initState',
                payload : [...data]
            })


        } catch (ex) {
            console.log(ex)
        }
        
    }
    const initFaq = async() => {

        const query = qs.stringify({
            // populate : ["image"],
          }, {
            encodeValuesOnly: true, // prettify url
          });

        try {

            const res = await fetchFaq(query)
            const data = res?.data?.data || []
            // console.log(data)
            _StoreFaq.dispatch({
                type : 'initState',
                payload : [...data]
            })


        } catch (ex) {
            console.log(ex)
        }
        
    }

    const initCareers = async() => {

        const query = qs.stringify({
            // populate : ["image"],
          }, {
            encodeValuesOnly: true, // prettify url
          });

        try {

            const res = await fetchCareers(query)
            const data = res?.data?.data || []
            // console.log(data)
            _StoreCareers.dispatch({
                type : 'initState',
                payload : [...data]
            })


        } catch (ex) {
            console.log(ex)
        }
        
    }

    const initAboutpage = async() => {

        const query = qs.stringify({
            populate : ["license_pdf", "charter_pdf", "regilation_pdf", "central_bank_regulation_pdf"]
          }, {
            encodeValuesOnly: true, // prettify url
          });

        try {

            const res = await fetchAboutPage(query)
            const data = res?.data?.data || {}
            // console.log(data)
            _StoreAboutPage.dispatch({
                type : 'initState',
                payload : {...data}
            })


        } catch (ex) {
            console.log(ex)
        }
        
    }

    const initRegulationsPage = async() => {

        const query = qs.stringify({
            
          }, {
            encodeValuesOnly: true, // prettify url
          });

        try {

            const res = await fetchRegulations(query)
            const data = res?.data?.data || {}
            // console.log(data)
            _StoreRegulations.dispatch({
                type : 'initState',
                payload : {...data}
            })


        } catch (ex) {
            console.log(ex)
        }
        
    }

    return {initProtfolio, initMarketResearch, initArticles,  initServices, initClientRights, initTeam, initAboutpage, initFaq, initCareers, initRegulationsPage}
}
