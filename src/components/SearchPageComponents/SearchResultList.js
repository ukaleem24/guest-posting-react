import React from "react";

import SearchResultItem from "./SearchResultItem";

const SearchResultList =()=>{


    const list=[{
        placement:10,
        article:10,
        da:54,
        completionRate:"Up to 70.00%",
        spamScore:"N/A",
        monthlyTraffic:1299,
        links:"Dofollow",
        Minipost:15,
        Longarticle:15.00,
        DR:51,
        TAT:"up to 1 day",
        Avglifetimeoflinks:"Up to 100.00%",
        Language:"English",
        Country:"Pakistan",
    },
    {
        placement:10,
        article:10,
        da:54,
        completionRate:"Up to 70.00%",
        spamScore:"N/A",
        monthlyTraffic:1299,
        links:"Dofollow",
        Minipost:15,
        Longarticle:15.00,
        DR:51,
        TAT:"up to 1 day",
        Avglifetimeoflinks:"Up to 100.00%",
        Language:"English",
        Country:"Pakistan",
    }]

    return(
        <>
            {list.map((item)=>
             <SearchResultItem item={item} key={item.da}/>  
            )}
        </>
    )

}

export default SearchResultList;