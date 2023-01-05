import { Box, Button, Checkbox, FormControlLabel, Stack, ToggleButton, ToggleButtonGroup, Typography, useTheme } from '@mui/material';
import ForwardArrowIcon from '../assets/icons/forwardArrow';
import EditIcon from '../assets/icons/editIcon';
import AddTextIcon from '../assets/icons/addTextIcon';
import DragIcon from '../assets/icons/drag';
import CheckBoxOuterLineIcon from '../assets/icons/checkBoxOuterLine'
import CheckBoxCheckedIcon from '../assets/icons/checkBoxChecked'
import { useEffect, useState } from 'react';
import axios from 'axios';

const sourceModules = [
    {
        name: 'Contacts',
        id: '1'
    },
    {
        name: 'Companies',
        id: '2'
    },
    {
        name: 'Leads',
        id: '3'
    }
]

export default function Settings() {
    const [buttonIndex, setButtonIndex] = useState(0);
    const [dataField, setDataField] = useState([])
    const theme = useTheme();

    const handleButton = (index) => {
        setButtonIndex(index)
    }
    console.log(dataField);
    useEffect(() => {
        const postFieldsApi = async () => {

            const requestData = {
                type: "list",
                orgId: 60,
                data: {
                    source: "Contact",
                }
            }
            const header = {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            }

            const settingDataField = await axios.post("https://api.thelaunchclub.in/fields", requestData, header)
                .then((responce) => { return responce.data.data.entity })
            setDataField(settingDataField)
        }
        postFieldsApi()

    }, [])

    return (
        <>
            <Stack
                direction='row'
                justifyContent='space-between'
                alignItems='center'
                sx={{
                    borderBottom: `1px solid ${theme.palette.primary.light}`,
                    height: '60px',
                    padding: 3,
                }}
            >
                <Stack
                    direction='row'
                    spacing={1}
                    alignItems='center'
                >
                    <Typography
                        sx={{
                            color: theme.palette.primary.main,
                            cursor: 'pointer',
                        }}
                    >
                        Settings
                    </Typography>
                    {ForwardArrowIcon('16', '16')}
                    <Typography>Data Fields</Typography>
                </Stack>
                <Box sx={{ padding: 1 }} >
                    <Button startIcon={EditIcon('20', '20')}>
                        Rename Modules
                    </Button>
                </Box>
            </Stack>
            <Stack spacing={2} sx={{ padding: 2 }}>
                <Stack direction='row' alignItems='center' spacing={2}>
                    <Stack
                        direction='row'
                        sx={{
                            backgroundColor: theme.palette.secondary.light,
                            borderRadius: 2,
                        }}
                    >
                        {
                            sourceModules.map((items, index) => {
                                return (
                                    <Box key={index}>
                                        <ToggleButtonGroup sx={{ margin: 0.6 }} >
                                            <ToggleButton
                                                id={items.id}
                                                value={items.name}
                                                onClick={() => handleButton(index)}
                                                sx={{
                                                    ":hover": {
                                                        backgroundColor: buttonIndex === index ?
                                                            'rgb(35, 131, 88)'
                                                            :
                                                            ''
                                                    },
                                                    backgroundColor: buttonIndex === index ?
                                                        theme.palette.primary.main
                                                        :
                                                        'transparent',
                                                    color: buttonIndex === index ?
                                                        'white'
                                                        :
                                                        theme.palette.primary.contrastText,
                                                }}
                                            >
                                                {items.name}
                                            </ToggleButton>
                                        </ToggleButtonGroup>
                                    </Box>
                                )
                            })
                        }
                    </Stack>
                    <Box>
                        <Button startIcon={AddTextIcon('18', '18')}>
                            System Fields
                        </Button>
                    </Box>
                    <Box>
                        <Button startIcon={AddTextIcon('18', '18')}>
                            Custom Field
                        </Button>

                    </Box>
                </Stack>
                <Stack spacing={1}>
                    {
                        dataField?.map((fieldData, index) => {
                            return (
                                <Stack key={index}
                                    direction='row'
                                    alignItems='center'
                                    sx={{
                                        border: '1px solid rgba(0, 0, 0, 0.12)',
                                        width: '100%',
                                        height: '48px',
                                        borderRadius: 2,
                                        padding: 2
                                    }}
                                >
                                    <Stack
                                        direction='row'
                                        alignItems='center'
                                        spacing={2}
                                        sx={{
                                            width: '45%',
                                        }}
                                    >
                                        <Box
                                            display='flex'
                                            sx={{ cursor: 'grab' }}
                                        >
                                            {DragIcon('24', '24')}
                                        </Box>
                                        <Typography sx={{ fontSize: '14px' }}>{fieldData.fieldName}</Typography>
                                        <Typography
                                            sx={{
                                                fontSize: '13px',
                                                padding: '1px 8px',
                                                backgroundColor: theme.palette.secondary.light,
                                                borderRadius: '3px',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            Text
                                        </Typography>
                                    </Stack>
                                    <Box sx={{ width: '14%' }} >
                                        <FormControlLabel control={
                                            <Checkbox
                                                icon={CheckBoxOuterLineIcon('22', '22')}
                                                checkedIcon={CheckBoxCheckedIcon('22', '22')}
                                            />
                                        } label='Add View'
                                        />
                                    </Box>

                                    <Box sx={{ width: '14%' }} >
                                        <FormControlLabel control={
                                            <Checkbox
                                                icon={CheckBoxOuterLineIcon('22', '22')}
                                                checkedIcon={CheckBoxCheckedIcon('22', '22')}
                                            />
                                        } label='Required'
                                        />
                                    </Box>

                                </Stack>
                            )
                        })
                    }
                </Stack>
            </Stack>
        </>
    )
}