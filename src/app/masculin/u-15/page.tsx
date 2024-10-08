import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";
import Team from "@/components/Team";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="U 15"
        description=""
        parent={"Masculin"}
      />

      <Team resultWidgetId={"66ae3cd21cbac708cad6bb64"} rankingWidgetId={"66ae40cc1cbac708d09853d8"} image={"/images/teams/u15.jpeg"}/>
    </>
  );
};

export default ContactPage;
