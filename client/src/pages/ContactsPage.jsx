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
      <div className="max-w-xl mx-auto px-6 py-14 flex flex-col gap-14">

        
        <Text as="h1">
          CONNECT
        </Text>

        {/* List */}
        <div className="flex flex-col gap-10">
          {users.map((user) => (
            <div key={user.id} className="flex items-center justify-between">

              
              <div className="flex items-center gap-3">
                <span className="text-2xl">⭐</span>

                <div>
                  <p className="font-medium">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              </div>

              
              <Button variant="secondary mx-4 my-4">
                CONNECT
              </Button>
            </div>
          ))}
        </div>

        
        <Button>
          START NEW GAME
        </Button>

      </div>
    </PageLayout>
  );
}