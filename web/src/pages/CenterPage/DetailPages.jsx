import React from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText, Link } from '@mui/material';
import Navbar from '../HomePage/Navbar';
import { useParams } from 'react-router-dom';


const DetailPages = () => {
    let { reviewId } = useParams();
    const isEvent2 = reviewId === 'event2';
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
                        Content not found for this ID.
                    </Typography>
                )}
            </Container>
        </>
    );
};

export default DetailPages;
