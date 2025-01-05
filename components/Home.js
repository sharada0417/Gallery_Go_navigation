import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, ScrollView } from 'react-native';
import { PaperProvider, Text, Divider, Button } from 'react-native-paper';

export default function Home() {
   const navigation = useNavigation();
    return (
        <PaperProvider>
            <ScrollView >
                <View >
                <Text variant="headlineLarge" style={styles.heading}>              GalleryGo</Text>
                 <Divider/>
                    <Text variant='bodyMedium' style={styles.body}>
                          Our Photo Gallery app is your ultimate destination for organizing, storing, and sharing your cherished memories. Whether you're a photography enthusiast, a traveler, or simply someone who loves capturing life's beautiful moments, this app is designed to meet all your needs. With an intuitive and user-friendly interface, you can easily upload, sort, and categorize your photos into customizable albums. Enjoy seamless navigation through your gallery with advanced search and filter options that let you find specific photos in seconds. The app also features a secure cloud storage system, ensuring your memories are safely backed up and accessible anytime, anywhere. Share your favorite photos effortlessly with friends and family via social media or direct links, or keep them private with robust privacy controls. Additionally, immerse yourself in a visually stunning experience with slideshow features, photo editing tools, and a sleek dark mode for comfortable viewing. Whether it's capturing milestones or showcasing your creativity, our app transforms your photo collection into a personalized masterpiece. Start preserving your moments today!
                    </Text>
                    </View>
                    <View style={styles.buttonsection}>
                   <Button icon="camera" mode="contained" onPress={()=>console.log('pressed')} style={styles.btn}>
                         Add photo
                    </Button>
                    <Button icon="camera" mode="outlined" onPress={()=>navigation.navigate('contact')} style={styles.btn}>
                        Contact Us
                    </Button>
                    <Button icon="camera" mode="outlined" onPress={()=>navigation.navigate('aboutus')} style={styles.btn}>
                        About Us
                    </Button>
                   
                </View>
            </ScrollView>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    heading: {
        marginTop: 10,
        marginBottom: 10,
    },
    body: {
        marginTop: 10,
        padding: 10,
        textAlign: 'justify',
        alignContent: 'space-between',
    },
    buttonsection: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        justifyContent: 'flex-start', // Align buttons to the top
        padding: 10,
    },
    btn: {
        marginBottom: 15, // Add spacing between buttons
    },
    
    
});