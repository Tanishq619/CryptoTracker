import Header from "./Header";
import Main from "./Main";
import Modal from "./Modal";
function App() {
  return (
    <div className="absolute w-[100rem] h-[100rem] md:w-[100vw] pb-[20rem] md:h-full ">
      <Header />

      <Main />
    </div>
  );
}

export default App;
