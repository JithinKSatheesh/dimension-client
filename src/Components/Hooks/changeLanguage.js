import React, {useContext, useEffect} from 'react'
import { useTranslation } from 'react-i18next';

// **store
import { Store as StoreConfigs } from 'Store/configs'

export default function Changelanguage(props) {

    const { t, i18n } = useTranslation();
    const _StoreConfigs = useContext(StoreConfigs)
    
    const changeToEnglish = () => {
        i18n.changeLanguage('en')
        localStorage.setItem("currentLang", "en")
        // console.log("lang__chg")
        _StoreConfigs.dispatch({
            type: 'locale_en'
        })
    }

    const changeToArm = () => {
        i18n.changeLanguage('hy')
        localStorage.setItem("currentLang", "hy")
        // console.log("lang__chg")
        _StoreConfigs.dispatch({
            type: 'locale_hy'
        })

    }

    const initLanguage = () => {
        const langNow = localStorage.getItem("currentLang")
        if(langNow === 'en') {
            changeToEnglish()
        } else {
            changeToArm()
        }
    }

    useEffect(() => {
        initLanguage()
    }, [])

    return {changeToEnglish, changeToArm}
}
