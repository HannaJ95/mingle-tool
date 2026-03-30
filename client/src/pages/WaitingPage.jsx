import Text from "../components/Text";
import PageLayout from "../components/layout/PageLayout";


export default function WaitingPage(){
    return(
        <PageLayout>
            <div className="max-w-sm w-full mx-auto min-h-screen flex flex-col items-center justify-between text-center py-24 gap-14">
        
                <Text as="h1">
                    We are finding your Group!
                </Text>

               {/* Will be replaced with actual mp4 animation */}
                <div className="w-72 h-72 bg-gray-200 rounded-md flex items-center justify-center">
                  <span className="text-xs text-gray-500">Loading...</span>
                </div>



            <Text as="h1">
                Almost there...
            </Text>

            </div>

        </PageLayout>
    )
}

