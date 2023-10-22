import { useEffect, useState, useRef } from 'react';
import styles from './Clock.module.css';

export const Clock = () => {
  const [time, setTime] = useState(() => new Date())
  const intervalId = useRef(null)
  const input = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      stop();
    }
  }, [])
  const stop = () => {
    clearInterval(intervalId.current);
  };
  
  return (
      <div className={styles.container}>
        <p className={styles.clockface}>
          Поточний час: {time.toLocaleTimeString()}
      </p>
      <form onSubmit={handleSubmit}>
        <input type="text" name='name' ref={input}/>
        <button type='submit'>Send</button>
      </form>
        <button type="button" onClick={stop}>
          Зупитини
        </button>
      </div>
    )
}

