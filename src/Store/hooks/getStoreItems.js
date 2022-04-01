import React, {useContext} from 'react'

import { Store as StoreProtfolio } from 'Store/protfolio'
import { Store as StoreMarketResearch } from 'Store/marketResearch'
import { Store as StoreArticles } from 'Store/articles'
import { Store as StoreServices } from 'Store/services'
import { Store as StoreClientRights } from 'Store/clientRights'
import { Store as StoreTeam } from 'Store/team'
import { Store as StoreAboutPage } from 'Store/aboutPage'
import { Store as StoreFaq } from 'Store/faq'
import { Store as StoreCareers } from 'Store/careers'


export default function Getstoreitems(props) {

    const _StoreProtfolio = useContext(StoreProtfolio)
    const _StoreMarketResearch = useContext(StoreMarketResearch)
    const _StoreArticles = useContext(StoreArticles)
    const _StoreServices = useContext(StoreServices)
    const _StoreClientRights = useContext(StoreClientRights)
    const _StoreTeam = useContext(StoreTeam)
    const _StoreAboutPage = useContext(StoreAboutPage)
    const _StoreFaq = useContext(StoreFaq)
    const _StoreCareers = useContext(StoreCareers)

    const getProtfolio = _StoreProtfolio?.state
    const getMarketResearch = _StoreMarketResearch?.state
    const getArticles = _StoreArticles?.state
    const getServices = _StoreServices?.state
    const getClientRights = _StoreClientRights?.state
    const getTeam = _StoreTeam?.state
    const getAboutPage = _StoreAboutPage?.state
    const getFaq = _StoreFaq?.state
    const getCareers = _StoreCareers?.state
    

    return {getProtfolio, getMarketResearch, getArticles, getServices, getClientRights, getTeam, getAboutPage, getFaq, getCareers}
}
