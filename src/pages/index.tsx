import styles from './index.less';
import { Time } from '@/pages/time/time';
import { Ani } from '@/pages/ani/ani';
import { useState } from 'react';
import 'animate.css';


export interface Config {
  canShow: boolean;
}



export default function IndexPage() {

  const [timeConfig, setTimeConfig] = useState<Config>({
    canShow: false,
  });

  const [aniConfig, setAniConfig] = useState<Config>({
    canShow: true,
  });

  return (
    <div className={styles.mainbox}>
      <Ani config={aniConfig} onUpdate={() => {
        setAniConfig({ canShow: !aniConfig.canShow });
        setTimeConfig({ canShow: !timeConfig.canShow })
      }}></Ani>
      <Time config={timeConfig} ></Time>
    </div >
  );
}

