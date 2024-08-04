import { Menu } from "@features/Menu/index";
import { BurgerButton } from "@shared/ui/Buttons/BurgerButton";
import { useBurgerButtonAnimation } from "@shared/lib/hooks/useBurgerButtonAnimation";
import { useMenuAnimation } from "@shared/lib/hooks/useMenuAnimation";
import { navLinks } from "@shared/lib/content/links";
import Button from "@shared/ui/Buttons/ReactButton";
import ThemeSwitcher from "@shared/lib/hooks/useThemeSwitch";
import { useHeaderHooks } from "@shared/lib/hooks/useHeaderHooks";
import { PCBurgerButton } from "@shared/ui/Buttons/PCBurgerButton";

import styles from "./styles.module.scss";
import { Fade } from "react-awesome-reveal";

export const Header = () => {
  const { isOpen, handleOpenMenu } = useHeaderHooks();
  const { menuRef } = useMenuAnimation(isOpen);
  const { firstLine, secondLine, thirdLine } = useBurgerButtonAnimation(isOpen);

  return (
    <>
      <header className={styles.header_mob}>
        <div className={styles.header_mob__items}>
          <a href="" className="text-primary">
            Джинтропин
          </a>
          <Menu isOpen={isOpen} menuRef={menuRef} />
          <BurgerButton
            isOpen={isOpen}
            onClick={handleOpenMenu}
            firstLine={firstLine}
            secondLine={secondLine}
            thirdLine={thirdLine}
          />
        </div>
      </header>
      <header className={styles.header_pc}>
        <div className={styles.header_pc__items}>
          <Fade>
            <a href="/home" className={styles.header_pc__logo}>
              Джинтропин
            </a>
          </Fade>
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Fade delay={0.15}>
                <a href={link.href} className={styles.header_pc__link}>
                  {link.label}
                </a>
              </Fade>
            ))}
            <Fade delay={0.17}>
              <ThemeSwitcher />
            </Fade>
            <Fade delay={0.19}>
              <>
                <Button text="Написать в Whatsapp" buttonType="outline" />
              </>
            </Fade>
            <Fade delay={0.21}>
              <>
                <Button text="Получить консультацию" buttonType="outline" />
              </>
            </Fade>
            <Fade delay={0.23}>
              <PCBurgerButton />
            </Fade>
          </nav>
        </div>
      </header>
    </>
  );
};
