import axios from "axios";

const qs = require('qs');

const BASE_URL = `${process.env.REACT_APP_API_URL || 'http://localhost:1337'}/api/`

// ---------------------------------------
//  User
// ---------------------------------------

const fetchFunctioModal = (url_end, query, id, data ,method = "get") => {
    const _query = qs.stringify({
        ...query
    }, {
        encodeValuesOnly: true, // prettify url
    });
    return  axios[method](`${BASE_URL}${url_end}${id ? `/${id}` : ``}${_query ? `?${_query}`: `` }`, data )
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
    // AMD bond index
    {
        name : 'fetchAmdBondIndexGraph',
        url_end : 'amd-bond-index-graphs',  
    },
    {
        name : 'fetchAmdBondIndexTable',
        url_end : 'amd-bond-index-table',  
    },
    {
        name : 'fetchAmdBondIndexFactsheets',
        url_end : 'amd-bond-index-factsheets',  
    },
    // USD corporate index
    {
        name : 'fetchUsdBondIndexGraph',
        url_end : 'usd-bond-index-graphs',  
    },
    {
        name : 'fetchUsdBondIndexFactsheets',
        url_end : 'usd-bond-index-factsheets',  
    },
    {
        name : 'fetchUsdBondIndexTable',
        url_end : 'usd-corporate-index-table',  
    },
    // =====================================
    // POST
    // =====================================
    {
        name : 'postMailCareer',
        url_end : 'mail-request/jobRequest',  
        method : 'post'
    },
    {
        name : 'postMailMarketResearch',
        url_end : 'mail-request/researchRequest',  
        method : 'post'
    },
    {
        name : 'postMailUserQuestion',
        url_end : 'mail-request/userQuestion',  
        method : 'post'
    },

]

const GetFunctions = [...GetFunctionsList].reduce((obj, current) => ({
    ...obj,
    [current.name]: (query, id, data) => fetchFunctioModal(
        current.url_end,
        query,
        id,
        data,
        current?.method
    )
    })
,{})

export { GetFunctions }