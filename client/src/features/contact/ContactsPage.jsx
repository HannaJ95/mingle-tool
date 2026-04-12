import Text from "../../components/ui/Text.jsx";
import Button from "../../components/ui/Button";

import CheersIcon from "../../assets/icons/cheers.svg?react";
import FigureIcon from "../../assets/icons/figure.svg?react";

export default function ContactsPage() {
  const users = [
    { id: 1, name: "Jan Jansson", email: "janansson@gmail.com" },
    { id: 2, name: "Jan Jansson", email: "janansson@gmail.com" },
    { id: 3, name: "Jan Jansson", email: "janansson@gmail.com" },
    { id: 4, name: "Jan Jansson", email: "janansson@gmail.com" },
  ];

  return (
      <main className="min-w-80 p-6 max-w-md w-screen min-h-screen flex flex-col justify-end gap-14 text-primary mx-auto">
        <div className="flex items-end justify-between">
          <Text as="h1" variant="heading">
            CONNECT
          </Text>
          <CheersIcon />
        </div>

        {/* CONTACT LIST */}
        <ul className="flex flex-col gap-10 max-w-full">
          {users.map((user) => (
            <li key={user.id} className="flex items-center justify-between gap-4">
              
              {/* ICON, NAME AND EMAIL */}
              <div className="flex items-center gap-4 min-w-0">
                <FigureIcon className="shrink-0"/>
                <div className="min-w-0">
                  <Text as="p" variant="bodyBold" className="truncate">
                    {user.name}
                  </Text>
                  <Text as="p" variant="bodyRegular" className="truncate">
                    {user.email}
                  </Text>
                </div>
              </div>

              {/* CONNECT BUTTON FOR CONTACT INFO */}
              <Button variant="connect">CONNECT</Button>
            </li>
          ))}
        </ul>

        <Button>START NEW GAME</Button>
      </main>
  );
}
