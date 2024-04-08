import React from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText, Link } from '@mui/material';
import Navbar from '../HomePage/Navbar';
import { useParams } from 'react-router-dom';


const DetailPages = () => {
    let { reviewId } = useParams();
    const isEvent1 = reviewId === 'event1';
    const isEvent2 = reviewId === 'event2';
    const isEvent3 = reviewId === 'event3';
    return (
        <>
            <Navbar />
            <Container maxWidth="lg" sx={{ marginTop: '6rem', marginBottom: '3rem' }}>
                {isEvent2 ? (
                    <>
                        <Typography variant="h3" gutterBottom>
                            Smartphone Essentials: Unlocking Your Device's Full Potential
                        </Typography>

                        <Typography variant="h5" gutterBottom sx={{ marginTop: '2rem' }}>
                            For android side only:
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemText primary="Enable Find My Device:" secondary="Keep your Android safe. Activate 'Find My Device' under Settings > Google for tracking and control if lost." />
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                <ListItemText primary="Customize Quick Toggles:" secondary="For easy access, personalize your Quick Toggles by arranging them in the notification shade." />
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                <ListItemText primary="Screen Pinning:" secondary="Ensure privacy by pinning an app to the screen when sharing your phone. Activate in Settings and hold to unpin." />
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                <ListItemText primary="Do Not Disturb: " secondary="Enjoy uninterrupted sleep by customizing Do Not Disturb mode to silence all but essential alerts." />
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                <ListItemText primary="Smart Lock: " secondary="Stay unlocked in trusted locations or with trusted devices via Smart Lock, found in Settings." />
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                <ListItemText primary="Notification History:" secondary="Never miss an alert. Check all your past notifications in Settings > Notifications to see what you've missed." />
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                <ListItemText primary="Split-Screen Multitasking:" secondary="Boost productivity by using two apps simultaneously with the split-screen feature from the recent apps screen." />
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                <ListItemText primary="Nearby Share:" secondary="Share files effortlessly with Nearby Share, Android’s answer to easy device-to-device transfers." />
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                <ListItemText primary="Uninstall Apps with ADB: " secondary="Clean your device by removing unwanted apps using ADB commands." />
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                <ListItemText primary="Link to Windows:" secondary="Connect your Android to Windows for notifications, file transfers, and more on the same Wi-Fi network." />
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                <ListItemText primary="Bonus Tip: Restart Often:" secondary="Solve common issues with a simple restart to keep your phone running smoothly." />
                            </ListItem>
                        </List>

                        <Box sx={{ mt: 4 }}>
                            <Typography variant="body2">
                                For more detailed guides, visit <Link href="https://medium.com/@apksphere/unlocking-the-full-potential-of-your-android-device-essential-tips-and-tricks-70d00968c3b5" target="_blank" rel="noopener">See the Original Website Here</Link>
                            </Typography>
                        </Box>
                    </>) : (
                    <Typography variant="h4" gutterBottom>
                        {/* Content not found for this ID. */}
                    </Typography>
                )}
                {isEvent3 ? (
                    <>
                        <Typography variant="h3" gutterBottom>
                            Email Made Easy: Mastering Your Inbox
                        </Typography>

                        <Typography variant="h5" gutterBottom sx={{ marginTop: '2rem' }}>
                            Learn to manage your email like a pro:
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemText primary="Understanding Email Basics:" secondary="What is Email? Why Use Email? Common Email Terms Explained." />
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                <ListItemText primary="Setting Up Your Email Account:" secondary="Choosing an Email Provider, Creating Your Email Account, Setting a Strong Password." />
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                <ListItemText primary="Navigating Your Inbox:" secondary="Understanding Your Inbox Layout, Reading and Opening Emails, Sorting and Organizing Emails." />
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                <ListItemText primary="Composing and Sending Emails:" secondary="Starting a New Email, Attaching Files and Photos, Sending and Saving Drafts." />
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                <ListItemText primary="Managing Your Email Contacts:" secondary="Adding and Editing Contacts, Grouping Contacts, Sending Emails to Multiple Contacts." />
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                <ListItemText primary="Staying Safe and Secure:" secondary="Recognizing Spam and Phishing Emails, Protecting Your Email Account, Privacy and Confidentiality." />
                            </ListItem>
                        </List>

                        <Box sx={{ mt: 4 }}>
                            <Typography variant="body2">
                                For more detailed guides, visit <Link href="https://support.microsoft.com/en-us/outlook" target="_blank" rel="noopener">See the Original Website Here</Link>
                            </Typography>
                        </Box>
                    </>) : (
                    <Typography variant="h4" gutterBottom>
                        {/* Content not found for this ID. */}
                    </Typography>
                )}
                {isEvent1 ? (
                    <>
                        <Typography variant="h3" gutterBottom>
                            Navigating Social Media: A Beginner Guide to Connecting Online
                        </Typography>

                        <Typography variant="h5" gutterBottom sx={{ marginTop: '2rem' }}>
                            Get started with social media and connect with friends and family online:
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemText primary="Choosing the Right Social Media Platforms:" secondary="Overview of popular social media platforms and how to choose the right ones for you." />
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                <ListItemText primary="Creating Your Social Media Accounts:" secondary="Step-by-step guide to setting up profiles on various social media platforms." />
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                <ListItemText primary="Understanding Social Media Etiquette:" secondary="Tips on interacting respectfully and safely on social media." />
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                <ListItemText primary="Managing Privacy Settings:" secondary="How to adjust privacy settings to control who sees your posts and information." />
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                <ListItemText primary="Finding and Connecting with Friends and Family:" secondary="Methods for finding and adding friends, family, and other contacts on social media." />
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                <ListItemText primary="Posting and Sharing Content:" secondary="Guidelines for creating and sharing posts, photos, and videos on social media." />
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                <ListItemText primary="Joining Groups and Communities:" secondary="How to join and participate in groups, communities, and discussions on social media." />
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                <ListItemText primary="Staying Safe and Avoiding Scams:" secondary="Tips for recognizing and avoiding scams, fake news, and other risks on social media." />
                            </ListItem>
                        </List>

                        <Box sx={{ mt: 4 }}>
                            <Typography variant="body2">
                                For more detailed guides, visit <Link href="https://buffer.com/resources/" target="_blank" rel="noopener">See the Original Website Here</Link>
                            </Typography>
                        </Box>
                    </>) : (
                    <Typography variant="h4" gutterBottom>
                        {/* Content not found for this ID. */}
                    </Typography>
                )}
            </Container>
        </>
    );
};

export { DetailPages };