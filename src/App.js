import Footer from "./components/footer/footer.component";
import PageHeader from "./components/header/header.component";
import Navigation from "./components/navigation/navigation.component";
import Testimonials from "./components/testimonials/testimonials.component";
const App = () => {
  return (
    <div className="App">
      <Navigation />
      <PageHeader />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
