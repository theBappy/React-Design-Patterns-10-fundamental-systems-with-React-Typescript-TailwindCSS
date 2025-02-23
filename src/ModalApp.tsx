import GamesInfo from "./components/Modal/GamesInfo";
import Modal from "./components/Modal/Modal";
import { games } from "./ModalData/data";

const App = () => {
  return (
    <>
      <Modal>
        <GamesInfo data={games} />
      </Modal>
    </>
  );
};

export default App;
