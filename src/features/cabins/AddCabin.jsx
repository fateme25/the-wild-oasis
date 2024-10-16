import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  return (
    <>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm/>
        </Modal.Window>
      </Modal>
      {/* Another Modal for showing cabin table */}
      {/* <Modal>
        <Modal.Open opens="table">
          <Button>Show Table</Button>
        </Modal.Open>
        <Modal.Window name="table">
          <CabinTable />
        </Modal.Window>
      </Modal> */}
    </>
  );

  // * before compound component pattern
  // const [isOpenModal, setIsOpenModal] = useState(false);
  // return (
  //   <div>
  //     <Button onClick={() => setIsOpenModal((show) => !show)}>
  //       Add new Cabin
  //     </Button>
  //     {isOpenModal && (
  //       <Modal onClose={() => setIsOpenModal(false)}>
  //         <CreateCabinForm
  //           onCloseModal={() => setIsOpenModal(false)}
  //         ></CreateCabinForm>
  //       </Modal>
  //     )}
  //   </div>
  // );
}

export default AddCabin;
