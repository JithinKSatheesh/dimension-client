import React, {useState, useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import Fuse from 'fuse.js';
import { data } from './searchData';
import { SearchCard } from "./SearchCard";

// ** Store
import useStoreItem from 'Store/hooks/getStoreItems'
import { TeamCard } from 'Pages/About/Team/TeamCard';
import { ProtfolioCard } from 'Pages/Home/Protfolio';

// ***
import { GetFunctions } from "API/fetch"
import { NewsCard } from 'Pages/News/NewsCard';
import { ResearchCard } from 'Pages/Home/Research';

export const SearchResult = (props) => {

    const { searchKey } = props;

    const { getConfigs } = useStoreItem()
    const {t} = useTranslation()

    // -------------------------
    // Fuse page search
    // -------------------------
    const options = {
        includeScore: true,
        // Search in `author` and in `tags` array
        keys: ['title', 'desc', 'tags']
    };

    const fuse = new Fuse(data, options);
    const result = fuse.search(searchKey);

    // -------------------------
    // Fuse Team search
    // -------------------------
    const teamDataEn = getConfigs?.en?.team || []
    const teamDatahy = getConfigs?.hy?.team || []
    const teamCombined = [...teamDataEn, ...teamDatahy]
    const options2 = {
        keys: ['full_name', 'position', "filter_key"]
    };
    const fuse2 = new Fuse(teamCombined, options2);
    const result_team = fuse2.search(searchKey);

    // -------------------------
    // Fuse Protfoio search
    // -------------------------
    const protfolioEn = getConfigs?.en?.protfolios || []
    const protfoliohy = getConfigs?.hy?.protfolios || []
    const protfolioCombined = [...protfolioEn, ...protfoliohy]
    const options3 = {
        keys: ['title']
    };
    const fuse3 = new Fuse(protfolioCombined, options3);
    const result_protfolio = fuse3.search(searchKey);

    // -------------------------
    // News  search
    // -------------------------

    const [loading, setLoading] = useState(false)
    const [newsResult, setNewsResult] = useState([])

    const fetchNewsData = async () => {
        try {
            setLoading(true)
            const res = await GetFunctions.fetchArticles({ 
                populate : ["image"],
                fields : ["title", "description", "updatedAt"],
                locale : "all",
                _q : searchKey
            })
            const _data = res?.data?.data
            console.log(_data)
            setNewsResult(_data)
            
        } catch (ex) {
            console.log(ex)
        }
        setLoading(false)
    }

    const options4 = {
        keys: ['attributes.title']
    };
    const fuse4 = new Fuse(newsResult, options4);
    const result_news = fuse4.search(searchKey);

    useEffect(() => {
        fetchNewsData()
    }, [searchKey])

    // console.log(result_news)

    // -------------------------
    // Fuse Protfoio search
    // -------------------------
    const researchEn = getConfigs?.en?.market_research || []
    const researchhy = getConfigs?.hy?.market_research || []
    const researchCombined = [...researchEn, ...researchhy]
    const options5 = {
        keys: ['title']
    };
    const fuse5 = new Fuse(researchCombined, options5);
    const result_research = fuse5.search(searchKey);
    



    //   console.log(result)
    return (
        <div>
            <div className="py-12 text-dark-blue text-sm">
                Search result for : <span className="font-bold">{searchKey}</span>
            </div>
            <div className=''>
                {[...result].map(item => <SearchCard item={item?.item} />)}

            </div>
            {result_protfolio.length > 0 ?
                <div className="py-5">
                    <div className="py-5 text-2xl text-dark-blue font-bold text-center lg:text-left">
                        {t("Portfolio")}
                    </div>
                    <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 mb-24">
                        {[...result_protfolio].map(item => <ProtfolioCard key={item.id} item={item?.item} />)}
                    </div>
                </div>
                : null}
            {result_research.length > 0 ?
                <div className="py-5">
                    <div className="py-5 text-2xl text-dark-blue font-bold text-center lg:text-left">
                        {t("Research coverage")}
                    </div>
                    <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 mb-24">
                        {[...result_research].map(item => <ResearchCard key={item.id} item={item?.item} />)}
                    </div>
                </div>
                : null}
            {result_team.length > 0 ?
                <div className="py-5">
                    <div className="pb-5 text-2xl text-dark-blue font-bold text-center lg:text-left">
                        {t("Team")}
                    </div>
                    <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 mb-24">
                        {[...result_team].map(person => <TeamCard key={person.id} item={person?.item} />)}
                    </div>
                </div>
                : null}
            {result_news.length > 0 ?
                <div className="py-5">
                    <div className="pb-5 text-2xl text-dark-blue font-bold text-center lg:text-left">
                        {t("News")}
                    </div>
                    <div className="grid grid-cols-1 gap-4 mb-24">
                        
                        {[...result_news].map(news => <NewsCard key={news?.item?.id} id={news?.item?.id} item={news?.item?.attributes} />)}
                    </div>
                </div>
                : null}
            
            {(result?.length <= 0) && <div>
                <div className="text-center text-dark-blue">
                    {/* No result found! */}
                </div>
            </div>}
        </div>
    );
};
