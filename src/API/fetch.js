import axios from "axios";


const BASE_URL = `${process.env.REACT_APP_API_URL || 'http://localhost:1337'}/api/`

// ---------------------------------------
//  User
// ---------------------------------------

const fetchFunctioModal = (url_end, query) => {
    return  axios.get(`${BASE_URL}${url_end}?${query}`)
}

const GetFunctionsList = [
    {
        name : 'fetchProtfolio',
        url_end : 'portfolios',  
    },
    {
        name : 'fetchMarketResearch',
        url_end : 'market-researches',  
    },
    {
        name : 'fetchArticles',
        url_end : 'articles',  
    },
    {
        name : 'fetchServicesPage',
        url_end : 'services-page',  
    },
    {
        name : 'fetchClientRightsPage',
        url_end : 'client-rights-page',  
    },
    {
        name : 'fetchTeam',
        url_end : 'teams',  
    },
    {
        name : 'fetchFaq',
        url_end : 'faq-pages',  
    },
    {
        name : 'fetchCareers',
        url_end : 'careers',  
    },
    {
        name : 'fetchAboutPage',
        url_end : 'about-page',  
    },
    {
        name : 'fetchRegulations',
        url_end : 'regulations-pdf',  
    },
    {
        name : 'fetchAnnualReports',
        url_end : 'annual-reports',  
    },
    {
        name : 'fetchFinancialReportsAnnual',
        url_end : 'financial-statments-annuals',  
    },
    {
        name : 'fetchFinancialReportsQuaterly',
        url_end : 'financial-statments',  
    },
    {
        name : 'fetchNormatives',
        url_end : 'normatives',  
    },
    {
        name : 'fetchAmdBondIndexGraph',
        url_end : 'amd-bond-index-graphs',  
    },
    {
        name : 'fetchUsdBondIndexGraph',
        url_end : 'usd-bond-index-graphs',  
    },
    {
        name : 'fetchAmdBondIndexTable',
        url_end : 'amd-bond-index-table',  
    },
]

const GetFunctions = [...GetFunctionsList].reduce((obj, current) => ({
    ...obj,
    [current.name]: (query) => fetchFunctioModal(
        current.url_end,
        query,
    )
    })
,{})

export { GetFunctions }