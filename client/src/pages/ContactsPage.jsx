import PageLayout from "../components/layout/PageLayout";
import Text from "../components/Text";
import Button from "../components/ui/Button";

export default function ContactsPage() {
  // tempory data (later from backend)
  const users = [
    { id: 1, name: "Jan Jansson", email: "janansson@gmail.com" },
    { id: 2, name: "Jan Jansson", email: "janansson@gmail.com" },
    { id: 3, name: "Jan Jansson", email: "janansson@gmail.com" },
    { id: 4, name: "Jan Jansson", email: "janansson@gmail.com" },
    { id: 5, name: "Jan Jansson", email: "janansson@gmail.com" },
  ];

  return (
    <PageLayout>
      <div className="max-w-xl mx-auto py-14 flex flex-col gap-14">

      <div className="px-6">  
        <Text as="h1">
          CONNECT
        </Text>
      </div>

        {/* List */}
        <div className="flex flex-col gap-10">
          {users.map((user) => (
            <div key={user.id} className="flex items-center justify-between pl-6 pr-4">

              
              <div className="flex items-center justify-between -mx-6 px-6">
                <span className="flex items-center gap-5">⭐</span>

                <div>
                  <p className="font-medium">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              </div>

              
              <Button variant="connect"
                      className="ml-auto !bg-[#gray-300] !text-black !border !border-black !rounded-md !px-3 !py-1 !text-xs">
                CONNECT
              </Button>
            </div>
          ))}
        </div>

      <div className="px-6">
        <Button variant="secondary" onClick={() => alert('Start new game')}>
          START NEW GAME
        </Button>
      </div>
      </div>
      
    </PageLayout>
  );
}