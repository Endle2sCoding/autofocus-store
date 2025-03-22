import { Footer } from "@/widgets/layout/Footer/Footer";
import { About } from "@/widgets/sectioins/About/About";
import { Banner } from "@/widgets/sectioins/Banner/Banner";
import { Contacts } from "@/widgets/sectioins/Contacts/Contacts";
import { ServicesList } from "@/widgets/sectioins/ServicesList/ServicesList";

const MainPage = () => {
  return (
    <>
      <Banner />
      <ServicesList />
      <Contacts />
      <About />
      <Footer />
    </>
  );
};

export default MainPage;
