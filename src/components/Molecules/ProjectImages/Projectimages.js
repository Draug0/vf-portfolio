import Image from "next/image";
import React, { useState } from "react";
import iga1 from "../../../images/iga1.png";
import iga2 from "../../../images/iga2.png";
import iga3 from "../../../images/iga3.png";
import fa from "../../../images/fa.png";
import long_ga_1 from "../../../images/long_ga_1.png";
import long_ga_2 from "../../../images/long_ga_2.png";
import ga1 from "../../../images/ga1.png";
import ga2 from "../../../images/ga2.png";
import ga3 from "../../../images/ga3.png";
import ga4 from "../../../images/ga4.png";
import big_ga from "../../../images/big_ga.png";
import styles from "./style.module.scss";
import { Controller, Scene } from "react-scrollmagic";

const Projectimages = () => {
  const [hook] = useState(0.6);
  const [reverse] = useState(true);

  return (
    <Controller>
      <div className={styles.imagesGrid}>
        <Scene
          triggerElement={`.${styles.iga1}`}
          triggerHook={hook}
          reverse={reverse}
          classToggle={`fade-in`}
        >
          <div className={styles.iga1}>
            <Image src={iga1} alt="Instagram Ad 1" />
          </div>
        </Scene>

        <Scene
          triggerElement={`.${styles.iga2}`}
          triggerHook={hook}
          reverse={reverse}
          classToggle={`fade-in`}
        >
          <div className={styles.iga2}>
            <Image src={iga2} alt="Instagram Ad 2" />
          </div>
        </Scene>

        <Scene
          triggerElement={`.${styles.fa}`}
          triggerHook={hook}
          reverse={reverse}
          classToggle={`fade-in`}
        >
          <div className={styles.fa}>
            <Image src={fa} alt="Facebook Ad" />
          </div>
        </Scene>

        <Scene
          triggerElement={`.${styles.iga4}`}
          triggerHook={hook}
          reverse={reverse}
          classToggle={`fade-in`}
        >
          <div className={styles.iga4}>
            <Image src={iga3} alt="Instagram Ad 3" />
          </div>
        </Scene>

        <Scene
          triggerElement={`.${styles.wide}`}
          triggerHook={hook}
          reverse={reverse}
          classToggle={`fade-in`}
        >
          <div className={styles.wide}>
            <div>
              <Image src={long_ga_1} alt="Wide Google Ad 1" />
            </div>
            <div>
              <Image src={long_ga_2} alt="Wide Google Ad 2" />
            </div>
          </div>
        </Scene>

        <Scene
          triggerElement={`.${styles.sqr}`}
          triggerHook={hook}
          reverse={reverse}
          classToggle={`fade-in`}
        >
          <div className={styles.sqr}>
            <div>
              <Image src={ga1} alt="Google Ad 1" />
            </div>
            <div>
              <Image src={ga2} alt="Google Ad 2" />
            </div>
            <div>
              <Image src={ga3} alt="Google Ad 3" />
            </div>
            <div>
              <Image src={ga4} alt="Google Ad 4" />
            </div>
          </div>
        </Scene>

        <Scene
          triggerElement={`.${styles.sqr}`}
          triggerHook={hook}
          reverse={reverse}
          classToggle={`fade-in`}
        >
          <div className={styles.bigGa}>
            <Image src={big_ga} alt="Google Ad big" />
          </div>
        </Scene>
      </div>
    </Controller>
  );
};

export default Projectimages;
