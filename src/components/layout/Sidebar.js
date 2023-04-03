import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '../BasicCard';
import BasicCardList from '../BasicCardList';
import User from './User';
import CreditCard from './CreditCard';
import Chart from './Chart';
// import '../../style/Sidebar.css'


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function Sidebar() {

    let arr = [1, 2, 3];

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', width: '110%' }}
        >
            <Grid container spacing={{ xs: 2, md: 3 }} >
                <Grid item lg={2} md={2} sm={1} >
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        sx={{ borderRight: 1, borderColor: 'divider', marginTop: 10 }}

                    >
                        <Tab label="Dashboard" aria-label="phone" {...a11yProps(0)} />
                        <Tab label="Account"  {...a11yProps(1)} />
                        <Tab label="Card"  {...a11yProps(2)} />
                        <Tab label="Transactions" {...a11yProps(3)} />
                        <Tab label="Payment" {...a11yProps(4)} />
                        <Tab label="Invoice" {...a11yProps(5)} />
                        <Tab label="Settings" {...a11yProps(6)} />
                    </Tabs>
                </Grid>

                <Grid item lg={9} md={9} sm={4}>
                    <TabPanel value={value} index={0}   >
                        <Grid container spacing={1} >
                            <Grid item xs={12} sm={3} md={3}>
                                <Card currency="Open Another Account" amount="Click Here" />
                            </Grid>
                            <Grid item xs={12} sm={3} md={3}>
                                <Card currency="Dollars" amount="1234$" />
                            </Grid>
                            <Grid item xs={12} sm={3} md={3}>
                                <Card currency="Euro" amount="1234" />
                            </Grid>
                            <Grid item xs={12} sm={3} md={3}>
                                <Card currency="INR" amount="1234" />
                            </Grid>
                            <Grid item xs={12} sm={3} md={3}>
                                <Card currency="Dollars" amount="1234$" />
                            </Grid>
                            <Grid item xs={12} sm={3} md={3}>
                                <Card currency="Euro" amount="1234" />
                            </Grid>
                            <Grid item xs={12} sm={3} md={3}>
                                <Card currency="INR" amount="1234" />
                            </Grid>
                            <Grid container item sx={{marginTop:5}}>
                                <Grid item xs={12} sm={3} md={3} sx={{marginRight:5}} >
                                    <CreditCard />
                                </Grid>
                                <Grid item xs={12} sm={8} md={8} >
                                    <Chart />
                                </Grid>
                            </Grid>

                            {/* <Grid item xs={12} sm={5} md={5}>
                                <CreditCard/>
                            </Grid>
                             */}
                        </Grid>

                        {/* <Grid container spacing={1} >
                            {[0, 1, 2, 3, 4].map((item, index) => <Grid key={index} item xs={12} sm={12} md={4}>
                                <Card />
                            </Grid>)}
                        </Grid>
                        <BasicCardList arr={arr}/> */}
                    </TabPanel>
                    <TabPanel value={value} index={1}>

                    </TabPanel>
                    <TabPanel value={value} index={2}>

                    </TabPanel>
                    <TabPanel value={value} index={3}>

                    </TabPanel>
                    <TabPanel value={value} index={4}>

                    </TabPanel>
                    <TabPanel value={value} index={5}>

                    </TabPanel>
                    <TabPanel value={value} index={6}>

                    </TabPanel>
                </Grid>
            </Grid>






        </Box>
    );
}
