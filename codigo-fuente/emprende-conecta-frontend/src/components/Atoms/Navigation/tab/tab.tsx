import React from "react";
import "./tab.css"

type TabProps = {
    numTabs: number,
    actualTab: number,
}

const Tab: React.FC<TabProps> = ({ numTabs, actualTab }) => {
    const tabs = []
    for(let i=0; i<numTabs; i++){
        tabs.push(
            <a key={i} role="tab" className={`tab mx-1 w-auto ${i+1 <= actualTab ? 'tab-active' : ''}`}></a>
        )
    }
    return(
        <div role="tablist" className="tabs tabs-bordered">
            {tabs}
        </div>
    )
}

export default Tab