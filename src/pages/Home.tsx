import React, {useEffect, useState} from 'react';
import { useAppSelector, useAppDispatch } from '../redux/hooks/hooks';
import { setLoading } from '../redux/dataSlicer';
import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';
import Loader from '../components/Loader'; 
import './Home.css';

export default function Home() {
  const dispatch = useAppDispatch();
  const [timeLeft, setTimeLeft] = useState(2)
  const load = useAppSelector(state=>state.data.load);

  useEffect(() => {
    if (timeLeft > 0) {
      dispatch(setLoading(false));
      const intervalId = setInterval(() => {
        setTimeLeft((t) => t - 1);
      }, 1000);
    return () => {
      clearInterval(intervalId);
      } 
    } else dispatch(setLoading(true));
  }, [dispatch, timeLeft]);

  return (
    load 
    ? <div className='home-container'>
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contacts />
        <Footer />
      </div>
    : <Loader />
  )
}