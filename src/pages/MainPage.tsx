import { Footer } from "@/widgets/layout/Footer/Footer";
import { About } from "@/widgets/sectioins/About/About";
import { Banner } from "@/widgets/sectioins/Banner/Banner";
import { Form } from "@/widgets/sectioins/Form/Form";
import { ServicesList } from "@/widgets/sectioins/ServicesList/ServicesList";

const MainPage = () => {
  return (
    <>
      <Banner />
      <ServicesList />
      <Form />
      <About />
      <Footer />
    </>
  );
};

export default MainPage;
