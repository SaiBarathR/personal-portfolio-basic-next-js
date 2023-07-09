'use client'
import styled from "@emotion/styled";
import { Box, SwipeableDrawer, useMediaQuery } from "@mui/material";
import { grey } from '@mui/material/colors';

function SwipeableEdgeDrawer({ open, toggleDrawer, position, width, ...props }) {
    const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isMobile = useMediaQuery('(max-width:767px)')

    return (
        <SwipeableDrawer
            anchor={position}
            open={open}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
            disableSwipeToOpen={false}
            disableBackdropTransition={!iOS}
            disableDiscovery={iOS}
            transitionDuration={{
                appear: 500,
                enter: 500,
                exit: 500,
            }}
            PaperProps={{ sx: { width: isMobile ? "100%" : width } }}
        >
            {props.children}
        </SwipeableDrawer>

    );
}


export default SwipeableEdgeDrawer;
