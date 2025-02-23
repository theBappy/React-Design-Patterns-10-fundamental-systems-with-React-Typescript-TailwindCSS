import { MyProvider } from "./components/Slots/context/MyContext";
import SlotComponent from "./components/Slots/contextComponent/SlotComponent";
import SlotContent from "./components/Slots/contextComponent/SlotContent";

const App = () => {
    return (
        <MyProvider>
          <SlotComponent>
            <SlotContent />
         </SlotComponent>  
        </MyProvider>
  );
};

export default App;




// import CompoundCardSlot from "./components/Slots/CompoundCardSlot";
    // <div>
    //   <CompoundCardSlot.Title>
    //     <h2>Card Title</h2>
    //   </CompoundCardSlot.Title>
    //   <CompoundCardSlot.Content>
    //     <p>Card Content</p>
    //   </CompoundCardSlot.Content>
    //   <CompoundCardSlot.Button>
    //         <button className="bg-black text-white">Click Me</button>
    //   </CompoundCardSlot.Button>
    // </div>
// import NamedSlotCard from "./components/Slots/NamedSlotCard";
// {/* <NamedSlotCard
// // Named Slos
// cardTitle={<h1>this is my card title</h1>}
// cardContent ={<p>this is my card content</p>}
// cardButton={<button className="bg-black text-white">Learn More</button>}
// /> */}

// Default Slots
// import Card from "./components/Slots/Card"
// {/* <Card>
//     {/* Default Slots(anonymous slots) */}
//     <h2>This is my card title</h2>
//     <p>This is my card content</p>
//     <button className="border  bg-black text-white">Learn More</button>
// </Card> */}
