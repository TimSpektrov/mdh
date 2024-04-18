import { FC, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import { Title } from '@/components/ui/Typography';
import { Button } from '@/components/ui';
import { motion } from 'framer-motion';

import style from './Custom404.module.scss';

const colorAnimate = {
  initial: {
    color: '#282828',
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  },
  hover: {
    color: '#FFFFFF',
    transition: {
      duration: 0.5,
      ease: 'easeIn'
    }
  }
};

export const Custom404: FC = () => {
  const onMouseEnterHandler = () => setHover(true);
  const onMouseLeaveHandler = () => setHover(false);

  const [hover, setHover] = useState(false);
  const { push } = useRouter();

  return (
    <>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <div className={style.wrap}>
        <motion.div className={style.pattern}>
          <motion.svg
            width="1920"
            height="841"
            viewBox="0 0 1920 841"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              onMouseEnter={onMouseEnterHandler}
              onMouseLeave={onMouseLeaveHandler}
              animate={hover ? 'hover' : 'initial'}
              initial="initial"
              variants={colorAnimate}
              d="M536.239 536.256L632.64 522.708L648.068 632.487L551.667 646.035L567.207 756.603L433.668 775.371L418.128 664.803L65.7116 714.331L50.9491 609.291C102.228 492.553 123.152 375.786 113.721 258.99L244.889 240.556C252.601 352.761 236.986 467.171 198.045 583.786L402.7 555.024L378.281 381.273L511.82 362.505L536.239 536.256Z"
              fill="currentColor"
            />
            <motion.path
              onMouseEnter={onMouseEnterHandler}
              onMouseLeave={onMouseLeaveHandler}
              animate={hover ? 'hover' : 'initial'}
              initial="initial"
              variants={colorAnimate}
              d="M988.687 711.06C890.706 724.83 815.207 711.279 762.191 670.408C709.627 628.936 676.241 557.654 662.034 456.563C648.418 359.684 661.307 285.12 700.699 232.872C740.618 180.55 809.568 147.504 907.549 133.733C1004.48 120.111 1079.07 132.983 1131.34 172.349C1183.61 211.715 1216.55 279.838 1230.17 376.717C1244.37 477.808 1231.93 555.531 1192.83 609.885C1153.66 663.712 1085.62 697.437 988.687 711.06ZM973.037 599.701C1026.77 592.15 1063.26 572.792 1082.52 541.63C1101.7 509.94 1106.67 461.188 1097.42 395.373C1088.76 333.771 1070.73 291.472 1043.32 268.478C1016.37 244.883 976.294 236.825 923.089 244.302C868.83 251.928 831.735 270.832 811.804 301.016C791.799 330.674 786.125 376.304 794.783 437.906C804.032 503.721 822.508 549.178 850.209 574.279C877.836 598.853 918.778 607.327 973.037 599.701Z"
              fill="currentColor"
            />
            <motion.path
              onMouseEnter={onMouseEnterHandler}
              onMouseLeave={onMouseLeaveHandler}
              animate={hover ? 'hover' : 'initial'}
              initial="initial"
              variants={colorAnimate}
              d="M1787.86 360.352L1884.26 346.804L1899.69 456.583L1803.29 470.131L1818.83 580.7L1685.29 599.467L1669.75 488.899L1317.33 538.428L1302.57 433.388C1353.85 316.65 1374.77 199.883 1365.34 83.0864L1496.51 64.6518C1504.22 176.857 1488.61 291.268 1449.67 407.882L1654.32 379.12L1629.9 205.369L1763.44 186.602L1787.86 360.352Z"
              fill="currentColor"
            />
          </motion.svg>
        </motion.div>
        <div className={style.content}>
          <Title color="light" variant="subline" className={style.title}>
            Страница не найдена
          </Title>
          <Button onClick={() => push('/', undefined)} color="white">
            На главную
          </Button>
        </div>
      </div>
    </>
  );
};
