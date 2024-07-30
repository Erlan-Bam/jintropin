import { tabItems } from '@shared/lib/content/SocialTabContent/items'

import styles from './styles.module.scss'

export const SocialMediaTab = () => {
    return (
        <div className={styles.container}>
            <p className={styles.container__text}>Социальные сети</p>
            <div className={styles.container__items}>
                {
                    tabItems.map((item, index) => (
                        <div key={index}>
                            {item.icons.map((icon, idx) => (
                                <div key={idx} className={styles.container__items__icon}>
                                    {icon}
                                </div>
                            ))}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}