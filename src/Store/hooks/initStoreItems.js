import React, { useContext } from 'react'

import { GetFunctions } from 'API/fetch'
// import { fetchProtfolio, fetchMarketResearch, fetchArticles, fetchServicesPage, fetchClientRightsPage, fetchTeam, fetchAboutPage, fetchFaq, fetchCareers, fetchRegulations, fetchAnnualReports } from 'API/fetch'

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
import { Store as StoreAnnualReports } from 'Store/annualReports'
import { Store as StoreIndicesData } from 'Store/Indices'

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
    const _StoreAnnualReports = useContext(StoreAnnualReports)
    const _StoreIndicesData = useContext(StoreIndicesData)

    const CollectionTypeFunction = async (filter, fetchFunction, storeObj, storeInitString = 'initState', singleType = false) => {
        const query = qs.stringify({
            ...filter
        }, {
            encodeValuesOnly: true, // prettify url
        });
        try {

            const res = await fetchFunction(query)
            const data = res?.data?.data || (singleType ? {} : [])
            storeObj.dispatch({
                type: storeInitString,
                payload: singleType ? { ...data } : [...data]
            })


        } catch (ex) {
            console.log(ex)
        }

    }


    const FunctionsList = [
       
        {
            name: 'initProtfolio',
            filter: { populate: ["image"] },
            fetchFunction: GetFunctions.fetchProtfolio,
            storeObj: _StoreProtfolio,
            storeInitString: 'initState',
            singleType: false
        },
        {
            name: 'initMarketResearch',
            filter: { populate: ["image"] },
            fetchFunction: GetFunctions.fetchMarketResearch,
            storeObj: _StoreMarketResearch,
            storeInitString: 'initState',
            singleType: false
        },
        {
            name: 'initArticles',
            filter: { populate: ["image"] },
            fetchFunction: GetFunctions.fetchArticles,
            storeObj: _StoreArticles,
            storeInitString: 'initState',
            singleType: false
        },
        {
            name: 'initServices',
            filter: { populate: ["regilation_documents_capital_market_pdf"] },
            fetchFunction: GetFunctions.fetchServicesPage,
            storeObj: _StoreServices,
            storeInitString: 'initState',
            singleType: true
        },
        {
            name: 'initClientRights',
            filter: { populate: ["regilation_documents_pdf"] },
            fetchFunction: GetFunctions.fetchClientRightsPage,
            storeObj: _StoreClientRights,
            storeInitString: 'initState',
            singleType: true
        },
        {
            name: 'initTeam',
            filter: { populate: ["image"] },
            fetchFunction: GetFunctions.fetchTeam,
            storeObj: _StoreTeam,
            storeInitString: 'initState',
            singleType: false
        },
        {
            name: 'initFaq',
            filter: {},
            fetchFunction: GetFunctions.fetchFaq,
            storeObj: _StoreFaq,
            storeInitString: 'initState',
            singleType: false
        },
        {
            name: 'initCareers',
            filter: {},
            fetchFunction: GetFunctions.fetchCareers,
            storeObj: _StoreCareers,
            storeInitString: 'initState',
            singleType: false
        },
        {
            name: 'initAboutpage',
            filter: { populate: ["license_pdf", "charter_pdf", "regilation_pdf", "central_bank_regulation_pdf"] },
            fetchFunction: GetFunctions.fetchAboutPage,
            storeObj: _StoreAboutPage,
            storeInitString: 'initState',
            singleType: true
        },
        {
            name: 'initRegulationsPage',
            filter: {},
            fetchFunction: GetFunctions.fetchRegulations,
            storeObj: _StoreRegulations,
            storeInitString: 'initState',
            singleType: true
        },
        {
            name: 'initAnnualReports',
            filter: { populate: ["pdf"] },
            fetchFunction: GetFunctions.fetchAnnualReports,
            storeObj: _StoreAnnualReports,
            storeInitString: 'initAnnualReports',
            singleType: false
        },
        {
            name: 'initFinancialStatementAnnual',
            filter: { populate: ["pdf"] },
            fetchFunction: GetFunctions.fetchFinancialReportsAnnual,
            storeObj: _StoreAnnualReports,
            storeInitString: 'initFinancialStatementAnnual',
            singleType: false
        },
        {
            name: 'initFinancialStatementQuaterly',
            filter: { populate: ["q1_pdf", "q2_pdf", "q3_pdf", "q4_pdf"] },
            fetchFunction: GetFunctions.fetchFinancialReportsQuaterly,
            storeObj: _StoreAnnualReports,
            storeInitString: 'initFinancialStatementQuaterly',
            singleType: false
        },
        {
            name: 'initNormatives',
            filter: { populate: ["q1_pdf", "q2_pdf", "q3_pdf", "q4_pdf"] },
            fetchFunction: GetFunctions.fetchNormatives,
            storeObj: _StoreAnnualReports,
            storeInitString: 'initNormatives',
            singleType: false
        },

        // -----------------
        // Indices page 
        // -----------------

        {
            name: 'initAmdIndicesGraph',
            filter: { sort: ['date:asc'],  },
            fetchFunction: GetFunctions.fetchAmdBondIndexGraph,
            storeObj: _StoreIndicesData,
            storeInitString: 'initAmdIndicesGraph',
            singleType: false
        },
        {
            name: 'initUsdIndicesGraph',
            filter: { sort: ['date:asc'],   },
            fetchFunction: GetFunctions.fetchUsdBondIndexGraph,
            storeObj: _StoreIndicesData,
            storeInitString: 'initUsdIndicesGraph',
            singleType: false
        },
        {
            name: 'initAmdIndexTableData',
            filter: {    },
            fetchFunction: GetFunctions.fetchAmdBondIndexTable,
            storeObj: _StoreIndicesData,
            storeInitString: 'initAmdIndexTableData',
            singleType: true
        },

    ]

    const MappedFunctions = [...FunctionsList].reduce((obj, current) => ({
        ...obj,
        [current.name]: () => CollectionTypeFunction(
            current.filter,
            current.fetchFunction,
            current.storeObj,
            current.storeInitString,
            current.singleType,
        )
        })
    ,{})


    return { ...MappedFunctions }
}
