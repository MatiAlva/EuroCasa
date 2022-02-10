import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Footer from './components/Footer/Footer';
import Layout from './components/Layout/Layout';
import Article from './components/Article/Article';


function App() {
  return (
    <Layout>
      <Navbar />
      <Header />
      <Section />
      <Article />
      <Footer />
    </Layout>
  );
}

export default App;
