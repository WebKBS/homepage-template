import TopBanner from "@/components/banner/TopBanner";
import React from "react";

function Layout({children}: { children: React.ReactNode }) {
    return (
        <>
            <TopBanner subtitle="SERVICE CENTER" title="고객센터" src="top_banner_img.jpg"/>
            {children}
        </>
    );
}

export default Layout;