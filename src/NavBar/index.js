import { AppBar, InputAdornment, Stack, TextField, Toolbar, useTheme } from "@mui/material";
import Notification from '../assets/icons/notification';
import SearchBarIcon from '../assets/icons/search';

export default function NavBar() {
    const theme = useTheme();

    return (
        <AppBar position='static'
            elevation={0}
            sx={{
                backgroundColor: theme.palette.background.default,
                height: '64px',
            }}
        >
            <Toolbar
                disableGutters
            >
                <Stack flexDirection='row'
                    justifyContent='space-between'
                    sx={{ width: '100%', padding: 1 }}
                >
                    <TextField
                        focused
                        size="small"
                        color='secondary'
                        placeholder="Search"
                        sx={{ width: '500px', backgroundColor: 'rgb(236, 238, 238)', borderRadius: 2 }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start" sx={{ padding: 1 }}>{SearchBarIcon('18', '18')}</InputAdornment>,
                        }}
                    />
                    <Stack flexDirection='row'
                        alignItems='center'
                        sx={{
                            pr: 2,
                            cursor: 'pointer'
                        }}
                    >
                        {Notification('20', '20')}
                    </Stack>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}