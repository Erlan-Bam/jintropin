import { Header } from "@features/Header/index";
import { Main } from "@widgets/HomePage/Main";
import { Application } from "@widgets/HomePage/Application";
import { Usage } from "@widgets/HomePage/Usage";
import { Advantages } from "@widgets/HomePage/Advantages";
import { Contraindications } from "@widgets/HomePage/Contraindications";
import { VideoBlock } from "@widgets/HomePage/VideoBlock";
import { Certificate } from "@widgets/HomePage/Сertificate";
import { Questions } from "@widgets/HomePage/Questions";
import { Choose } from "@widgets/HomePage/Choose";
import { Results } from "@widgets/HomePage/Results/index";
import { Form } from "@widgets/HomePage/Form/index";
import { Footer } from "../../widgets/HomePage/Footer/index";

import styles from "./styles.module.scss";
import { SideMenu } from "@features/SideMenu";

export const HomePage = () => {
  return (
    <div className={styles.home}>
      <Header />
      <Main />
      <SideMenu />
      <Application />
      <Usage />
      <Advantages />
      <Contraindications />
      <VideoBlock />
      <Certificate />
      <Questions />
      <Choose />
      <Results />
      <Form />
      <Footer />
    </div>
  );
};
