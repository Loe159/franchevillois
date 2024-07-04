import Breadcrumb from "@/components/Common/Breadcrumb";
import Club from "@/components/Club";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Le club",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Le club"
        description=""
      />
      <Club />
    </>
  );
};

export default ContactPage;
