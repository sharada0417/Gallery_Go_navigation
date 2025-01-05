import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Platform } from 'react-native';
import { StyleSheet, View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { PaperProvider, Text, Divider, TextInput, Button } from 'react-native-paper';

export default function ContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const navigation = useNavigation();

    return (
        <PaperProvider>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardAvoidingView}
            >
                <View style={styles.mainContainer}>
                    <ScrollView contentContainerStyle={styles.scrollView}>
                        <View style={styles.container}>
                            <View style={styles.header}>
                                <Text variant="headlineLarge">Contact Us</Text>
                                <Divider />
                            </View>
                            <View style={styles.body}>
                                <View style={styles.input}>
                                    <Text variant="bodyMedium" style={styles.intro}>
                                        The Contact Us page of the GalleryGo app is a thoughtfully crafted space where users can directly connect with our team to seek assistance, provide feedback, or share inquiries about the app. This page reflects our commitment to creating a seamless and user-friendly experience, ensuring that every user feels valued and heard.

                                        At the heart of the Contact Us page is its intuitive and responsive design. The page opens with a welcoming and straightforward layout, inviting users to share their concerns or messages without any hassle. A prominent header labeled "Contact Us" sets the tone for the page, followed by a clean visual divider that organizes the content into easily digestible sections. The focus is on clarity and simplicity, making it accessible to users of all ages and technical expertise.
                                    </Text>
                                    <TextInput label="Name" mode="outlined" value={name} onChangeText={setName} />
                                </View>
                                <View style={styles.input}>
                                    <TextInput label="Email" mode="outlined" keyboardType="email-address" value={email} onChangeText={setEmail} />
                                </View>
                                <View style={styles.input}>
                                    <TextInput label="Phone number" mode="outlined" keyboardType="number-pad" value={phone} onChangeText={setPhone} />
                                </View>
                                <View style={styles.input}>
                                    <TextInput label="Message" mode="outlined" multiline numberOfLines={5} style={styles.multilineInput} value={message} onChangeText={setMessage} />
                                </View>
                                <View style={styles.input}>
                                    <Button mode='contained'>Contact</Button>
                                </View>
                            </View>
                            <Text style={styles.yourdetail}>
                                Your details{"\n"}
                                {name}{"\n"}
                                {email}{"\n"}
                                {phone}{"\n"}
                                {message}{"\n"}
                            </Text>
                        </View>
                    </ScrollView>
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>GalleryGo @2024</Text>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1, 
    },
    container: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        padding: 10,
    },
    header: {
        flex: 3,
        width: "100%",
        alignItems: 'center',
        padding: 5,
        marginBottom: 2,
    },
    body: {
        flex: 5,
        width: "100%",
    },
    footer: {
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
    },
    input: {
        padding: 8,
        marginBottom: 7,
    },
    scrollView: {
        flexGrow: 1, 
    },
    keyboardAvoidingView: {
        flex: 1, 
    },
    yourdetail: {
        margin: 'auto',
        padding: 10,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 5,
    },
    footerText: {
        color: "white", 
        fontSize: 16, 
    },
    intro: {
        padding: 2,
        textAlign: 'justify',
        marginBottom: 5,
    },
});
