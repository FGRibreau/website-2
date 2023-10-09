import clsx from 'clsx';
import { AnimatePresence, m, LazyMotion, domAnimation, useAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import Button from 'components/shared/button/button';
import Link from 'components/shared/link';
import GITHUB from 'constants/github';
import LINKS from 'constants/links';
import MENUS from 'constants/menus';
import GitHubIcon from 'icons/github.inline.svg';

const RIGHT_BUTTON_TEXT = 'Get Started';

const ANIMATION_DURATION = 0.2;

const variants = {
  hidden: {
    opacity: 0,
    translateY: 30,
    transition: {
      duration: ANIMATION_DURATION,
    },
  },
  visible: {
    zIndex: 20,
    opacity: 1,
    translateY: 0,
    transition: {
      duration: ANIMATION_DURATION,
    },
  },
};

const MobileMenu = ({ isOpen }) => {
  const controls = useAnimation();
  const [paddingTopClassName, setPaddingTopClassName] = useState('pt-16 sm:pt-[60px]');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
  }, [isOpen, controls]);

  useEffect(() => {
    const topBanner = document.querySelector('.top-banner');
    if (topBanner) {
      setPaddingTopClassName('pt-[114px] sm:pt-[125px]');
    }
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      {isOpen && (
        <AnimatePresence>
          <m.div
            className={clsx(
              'safe-paddings fixed inset-0 flex h-full w-full flex-col bg-black',
              paddingTopClassName
            )}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
          >
            <nav className="flex h-full w-full overflow-x-hidden overflow-y-scroll">
              <ul className="my-auto flex w-full flex-col">
                {MENUS.mobile.map(({ to, text, target }, index) => (
                  <li key={index}>
                    <Link
                      className="block w-full py-4 text-center"
                      theme="white"
                      size="xl"
                      to={to}
                      target={target}
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="sticky bottom-0 bg-black">
              <div className="container">
                <div className="flex w-full justify-between space-x-4 py-7">
                  <Button
                    className="w-full xs:text-xs"
                    to={GITHUB.repoUrl}
                    target="_blank"
                    size="sm"
                    theme="gray-outline"
                  >
                    <GitHubIcon className="mr-2 h-[26px] w-[26px]" />
                    <span>Star us</span>
                  </Button>

                  <Button
                    className="w-full xs:text-xs"
                    size="sm"
                    theme="white-filled"
                    {...LINKS.getStarted}
                  >
                    {RIGHT_BUTTON_TEXT}
                  </Button>
                </div>
              </div>
            </div>
          </m.div>
        </AnimatePresence>
      )}
    </LazyMotion>
  );
};

MobileMenu.propTypes = {
  isOpen: PropTypes.bool,
};

MobileMenu.defaultProps = {
  isOpen: false,
};

export default MobileMenu;
