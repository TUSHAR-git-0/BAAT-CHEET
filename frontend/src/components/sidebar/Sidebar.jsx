import { useAuthContext } from "../../context/AuthContext";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  const { authUser } = useAuthContext();
  const profilePic = authUser.profilePic;
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col gap-2">
      <div className="flex flex-row gap-5 justify-between items-center mt-[-0.75rem]">
        <img src={profilePic} alt="user avatar" className="w-12 rounded-full" />
        <LogoutButton />
      </div>

      <SearchInput />

      <Conversations />
      <h1 className="mt-6">🔒 Chats are End to End Encrypted</h1>
    </div>
  );
};
export default Sidebar;
