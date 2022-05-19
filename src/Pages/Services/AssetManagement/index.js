import React, {useEffect} from 'react'

// ** hooks
import { useScrollBehaviours } from 'Components/Hooks/useScrollBehaviours'

import Hero from './Hero'
import Contents from './Contents'
// import Otherservices from './OtherServices'
import Footer from 'Components/Footer'
import { formatDate } from 'Utils/time'


// ** Store
import useStoreItem from 'Store/hooks/getStoreItems'
import initStoreItem from 'Store/hooks/initStoreItems'
import { UpdateStatus } from 'Components/UpdateStatus'


export default function Capitalmarket(props) {
    
   
    const { getConfigs } = useStoreItem()
    const { initAllConfigs } = initStoreItem()

    // useEffect(() => initAllConfigs(), [])

    const { ScrollToTop } = useScrollBehaviours()

    useEffect(() => {
        ScrollToTop()
    }, [])

    const servicePageData = getConfigs?.configs?.service_page_asset_management    

    return (
        <>
        <Hero  servicePageData={servicePageData} />
        <Contents  servicePageData={servicePageData} />
        <UpdateStatus date={formatDate(servicePageData?.updatedAt)} />
        {/* <Otherservices /> */}
        {/* <Footer /> */}
            
        </>
    )
}
