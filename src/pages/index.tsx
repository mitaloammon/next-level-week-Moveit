import { CompletedChallenges } from "./components/CompletedChallenges";
import { ExperienceBar } from "./components/ExperienceBar";
import { Profile } from "./components/Profile";
import { ChallengeBox } from "./components/ChallengeBox";

import Head from "next/head";
import { GetServerSideProps } from 'next';

import styles from './styles/pages/Home.module.css';
import { Countdown } from './components/Countdown';
import { CountDownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengeCompleted: number;
}

export default function Home(props: HomeProps) {

  return (
    <ChallengesProvider level={props.level} currentExperience={props.currentExperience} challengeCompleted={props.challengeCompleted}>
      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
        </Head>


        <ExperienceBar />

        <CountDownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountDownProvider>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengeCompleted } = ctx.req.cookies;
  
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengeCompleted: Number(challengeCompleted),
    }
  }
}