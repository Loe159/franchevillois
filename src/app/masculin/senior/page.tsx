import Breadcrumb from "@/components/Common/Breadcrumb";
import Team from "@/components/Team";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const SeniorPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Senior"
        description=""
        parent={"Masculin"}
      />

      <Team resultWidgetId={"66ae3cd21cbac708cad6bb64"} rankingWidgetId={"66ae40cc1cbac708d09853d8"}/>
    </>
  );
};

export default SeniorPage;
