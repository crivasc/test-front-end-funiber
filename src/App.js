import {useState} from 'react';
import ListContent from "./components/ListContent";
import Container from '@mui/material/Container';
import styles from './styles/App.module.scss';
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  const [Users, setUsers] = useState(0);
  const usuarios=(info)=>{
    setUsers(info)
  }

  return (
    <div className={`App ${styles.appContainer}`}>
        <Container maxWidth="lg"  sx={{
          padding:'10px',
          paddingTop:0,
          borderRadius:'20px',
          background:'white',
          marginTop:'2rem',
          marginBottom:'2rem',
          boxShadow:'2px 10px 30px rgba(0,0,0,.2)'
        }}>
          <Header count={Users}/>
          <ListContent counter={usuarios}/>
          <Footer/>
        </Container>
    </div>
  );
}

export default App;
