import Text from "../components/Text";
import PageLayout from "../components/layout/PageLayout";


export default function WaitingPage(){
    return(
        <PageLayout>
            <div className="max-w-sm w-full mx-auto min-h-screen flex flex-col  px-6 py-20 gap-14 text-center">
        
            <Text as="h1">
                We are finding your Group!
            </Text>

            {/* You can change the information to the actual mp4 */}
            <video
                src="/assets/moth.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-48 opacity-90"
            />




            <Text as="h1">
                Almost there...
            </Text>

            </div>

        </PageLayout>
    )
}

