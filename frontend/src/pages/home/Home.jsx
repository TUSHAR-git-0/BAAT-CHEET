import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";

function Home() {
  return (
    <div className="flex h-[700px] w-[1050px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0">
      <Sidebar />
      <MessageContainer />
    </div>
  );
}

export default Home;
