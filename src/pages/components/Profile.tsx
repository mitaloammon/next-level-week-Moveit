import { useContext } from 'react';
import styles from '../styles/components/Profile.module.css';
import { ChallengesContext } from './../../contexts/ChallengesContext';

export function Profile() {
    const { level } = useContext(ChallengesContext);
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/mitaloammon.png" alt="Mitalo o Dev" />
            <div>
                <strong>Mitalo o Dev</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}