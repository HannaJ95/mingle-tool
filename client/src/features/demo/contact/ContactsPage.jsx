import { useState } from "react";
import Text from "../../../components/ui/Text.jsx";
import Button from "../../../components/ui/Button";
import ModalContact from "./ModalContact.jsx";
import { demoUser, demoGroup } from "../DemoAppStore";

import CheersIcon from "../../../assets/icons/cheers.svg?react";
import contactIcons from "../../../assets/icons/contact/contactIcons.js";

export default function ContactsPage({ onRestart }) {
  const [selectedUser, setSelectedUser] = useState(null);

  const users = [...demoGroup.members].sort((a, b) => {
    if (a.id === demoUser.id) return -1;
    if (b.id === demoUser.id) return 1;
    return 0;
  });

  return (
    <>
      {selectedUser && (
        <ModalContact user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
      <main className="max-w-sm min-w-80 p-6 w-screen min-h-screen flex flex-col justify-end gap-14 text-primary mx-auto">
        <div className="flex items-end justify-between">
          <Text as="h1" variant="heading">CONNECT</Text>
          <CheersIcon />
        </div>

        <ul className="flex flex-col gap-10 max-w-full">
          {users.map((user, index) => (
            <li key={user.id} className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 min-w-0">
                <img src={contactIcons[index % contactIcons.length]} className="shrink-0" alt="" />
                <div className="min-w-0">
                  <Text as="p" variant="bodyBold" className="truncate">
                    {[user.firstname, user.lastname].filter(Boolean).join(" ")}
                  </Text>
                  <Text as="p" variant="bodyRegular" className="truncate">
                    {user.email}
                  </Text>
                </div>
              </div>
              <Button variant="connect" onClick={() => setSelectedUser(user)}>CONNECT</Button>
            </li>
          ))}
        </ul>

        <Button onClick={onRestart}>START NEW GAME</Button>
      </main>
    </>
  );
}
