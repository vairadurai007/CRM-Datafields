import { Box, ListItemButton, ListItemIcon, Stack, useTheme } from "@mui/material"
import CompanyIcon from '../assets/icons/company'
import Contact from '../assets/icons/contact'
import Deals from '../assets/icons/deals'
import Product from '../assets/icons/product'
import Setting from '../assets/icons/settings'
import Logo from '../assets/logo/twozo.png'
import Avatar from '../assets/images/avatar.png'
import { useState } from "react"

const sideNavBarIcons = [
    {
        icon: Deals('22', '22', '#fff')
    },
    {
        icon: Contact('22', '22', '#fff')
    },
    {
        icon: CompanyIcon('22', '22', '#fff')
    },
    {
        icon: Product('22', '22', '#fff')
    },
    {
        icon: Setting('22', '22', '#fff')
    }
]

export default function SideNavBar() {
    const theme = useTheme();
    const [slideIconIndex, setSlideIconIndex] = useState(0);

    const handleBackgroundColor = (index) => {
        setSlideIconIndex(index)
    }

    return (
        <Box
            sx={{
                width: '60px',
                height: '100vh',
                backgroundColor: theme.palette.background.paper,
            }}
        >
            <Stack
                justifyContent='space-between'
                sx={{
                    minHeight: '100%',
                }}
            >
                <Stack
                    alignItems='center'
                >
                    <Box>
                        <Stack
                            direction='row'
                            justifyContent='center'
                            alignItems='center'
                            sx={{
                                height: '64px'
                            }}
                        >
                            <img width='85px' src={Logo} alt='Logo' />
                        </Stack>
                    </Box>
                    <Stack
                        spacing={1.5}
                        sx={{
                            pt: 1.5
                        }}
                    >
                        {sideNavBarIcons.map((items, index) => {
                            return (
                                <ListItemButton
                                    style={{
                                        backgroundColor: index === slideIconIndex ?
                                            theme.palette.primary.main
                                            :
                                            'transparent',
                                        borderRadius: 8,
                                        width: '52px',
                                        height: '52px'
                                    }}
                                    onClick={() => handleBackgroundColor(index)}
                                    key={index}
                                >
                                    <ListItemIcon>
                                        {items.icon}
                                    </ListItemIcon>
                                </ListItemButton>
                            )
                        })}
                    </Stack>
                </Stack >
                <Stack
                    sx={{
                        width: '100%',
                        alignItems: 'center',
                        padding: '24px 16px'
                    }}
                >
                    <img width='24px'
                        style={{ borderRadius: '50px', cursor: 'pointer' }}
                        src={Avatar} alt='Logo'
                    />
                </Stack>

            </Stack>
        </Box>
    )
}