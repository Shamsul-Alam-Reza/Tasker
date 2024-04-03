import Footer from "./Component/Footer";
import HeroSection from "./Component/HeroSection";
import Header from "./Component/header";
import TaskBoard from "./Task/TaskBoard";

export default function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center">
        <HeroSection />
        <TaskBoard />
      </div>
      <Footer />
    </>
  );
}
