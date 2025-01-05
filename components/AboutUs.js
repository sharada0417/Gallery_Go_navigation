import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import { PaperProvider, Text, Divider, Button } from 'react-native-paper';
export default function AboutUs() {

  const navigation = useNavigation();
    return (
        <PaperProvider>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.container}>
                    <Text variant="headlineLarge">History</Text>
                    <Divider />
                    <View style={styles.imagepad}>
                        <Image source={require('../assets/uovlogo.png')} style={styles.image}/>
                    </View>
                    <Text variant="bodyMedium" style={styles.body}>
                    GalleryGo was born out of a personal need to create an intuitive, simple, and efficient photo gallery app that could organize and display images seamlessly. The idea stemmed from my frustration with cluttered, slow, and complicated gallery apps that failed to deliver a smooth user experience. As a developer with a passion for mobile applications, I set out to build an app that would make it easier to browse through photos, whether it's for a quick glance at recent pictures or an in-depth look at years of memories.

                    The journey began with selecting the right tools to ensure the app was lightweight, responsive, and capable of handling a large number of images with ease. I chose Flutter for its cross-platform capabilities and user-friendly interface design options. I also integrated the powerful image_picker package to allow users to select multiple images effortlessly from their device's gallery. Through countless hours of refining the layout and ensuring smooth image rendering, I created a grid-based view that lets users see their pictures in a clear, visually appealing format.

                    Throughout the development process, I focused on enhancing the app’s performance and ensuring that the interface was as user-friendly as possible. I wanted GalleryGo to be an app that anyone, regardless of technical ability, could use with ease. After months of tweaking, testing, and feedback from friends and family, GalleryGo became the app it is today—an intuitive, fast, and reliable gallery experience that simplifies photo management.

                    The app’s goal is not only to serve as a simple gallery viewer but also to make photo organization enjoyable and hassle-free. With every update, I strive to add new features and improvements, always keeping the user experience at the forefront of development. Building GalleryGo has been a rewarding experience, and I’m excited to continue enhancing it as I gather more insights and feedback from its users. This app has truly been a labor of love, and it reflects my passion for both technology and creating meaningful, user-centered solutions.

                    </Text>
                    <Button icon="camera" mode="outlined" onPress={()=>navigation.push('aboutus')}>
                     call agin
                    </Button>
                    <Button mode="outlined" onPress={() => navigation.popTo('home')}>Go to Home</Button>
                    <Button  mode="outlined" onPress={() => navigation.popToTop()}>Go to Top Screen</Button>
                    <View style={styles.footer}>
                        <Text>MyApp © 2024</Text>
                    </View>
                </View>
            </ScrollView>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        padding: 10
    },
    imagepad:{
        padding: 8,
         alignItems: 'center',
        flex: 2,
        marginBottom: 10
    },
    image:{
        width: '80%',
        height: 70,
    },
    body: {
        padding: 8,
        textAlign: 'justify',
        flex: 6,
    },
    scrollView: {
        flexGrow: 1, // Ensures the ScrollView behaves correctly
    },
    footer: {
        flex: 2,
        width: "100%",
        alignItems: 'center',
        marginTop:10
    }
});