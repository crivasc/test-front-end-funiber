import React,{ useEffect,useState } from 'react'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import styles from '../styles/App.module.scss';

const ArrowSort = ({direct, ident}) => {

  const [Direction, setDirection] = useState('');

  useEffect(() => {
    ident == direct ? (
      setDirection('up')
    ) : (
      setDirection('down')
    )

    !direct && setDirection('up')
  }, [direct]);

  return (
    <div className={styles.arrowIco}>
        <ArrowDropUpIcon size={10} className={`${styles.icon} ${Direction === 'down' && styles.closed}`}/>
        <ArrowDropDownIcon size={10} className={`${styles.icon} ${Direction === 'up' && styles.closed}`}/>
    </div>
  )
}

export default ArrowSort