import { useState } from "react";
import Text from "../../components/ui/Text.jsx";
import Button from "../../components/ui/Button";
import useAppStore from "../../store/useAppStore";
import ModalContact from "./ModalContact.jsx"
import { useNavigate } from "react-router";

import CheersIcon from "../../assets/icons/cheers.svg?react";
import contactIcons from "../../assets/icons/contact/contactIcons.js";

export default function ContactsPage() {
  const [selectedUser, setSelectedUser] = useState(null);
  const { user, group } = useAppStore();
  const navigate = useNavigate();

  const users = [...(group?.members ?? [])].sort((a, b) => {
    if (a.id === user?.id) return -1;
    if (b.id === user?.id) return 1;
    return 0;
  });

  return (
    <>
      {selectedUser && (
        <ModalContact user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
      <main className="min-w-80 p-6 max-w-md w-screen min-h-screen flex flex-col justify-end gap-14 text-primary mx-auto">
        <div className="flex items-end justify-between">
          <Text as="h1" variant="heading">
            CONNECT
          </Text>
          <CheersIcon />
        </div>

        {/* CONTACT LIST */}
        <ul className="flex flex-col gap-10 max-w-full">
          {users.map((user, index) => (
            <li key={user.id} className="flex items-center justify-between gap-4">

              {/* ICON, NAME AND EMAIL */}
              <div className="flex items-center gap-4 min-w-0">
                <img src={contactIcons[index % contactIcons.length]} className="shrink-0" alt="" />
                <div className="min-w-0">
                  <Text as="p" variant="bodyBold" className="truncate">
                    {[user.firstname, user.lastname].filter(Boolean).join(' ')}
                  </Text>
                  <Text as="p" variant="bodyRegular" className="truncate">
                    {user.email}
                  </Text>
                </div>
              </div>

              {/* CONNECT BUTTON FOR CONTACT INFO */}
              <Button variant="connect" onClick={() => setSelectedUser(user)}>CONNECT</Button>
            </li>
          ))}
        </ul>

        <Button onClick={() => navigate("/")}>START NEW GAME</Button>
      </main>
    </>
  );
}
