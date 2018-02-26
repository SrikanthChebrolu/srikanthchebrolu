import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import GifPlayer from 'react-gif-player';
import GraduationGif from '../../static/graduation.gif';
import Grid from 'material-ui/Grid';
import ExpansionPanel, {
    ExpansionPanelDetails,
    ExpansionPanelSummary,
} from 'material-ui/ExpansionPanel';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
    }),
    paper: {
        padding: 16,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '80%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
});

class SecondMasters  extends React.Component{

    state = {
        expanded: null,
    };

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    render() {
        const {classes} = this.props;
        const {expanded} = this.state;

        return (
            <div>
                <Paper className={classes.root}>
                    <Grid container spacing={24}>
                        <Grid item xs={2}>
                            <GifPlayer gif={GraduationGif} still={GraduationGif}/>
                        </Grid>
                        <Grid item xs={1}>

                        </Grid>
                        <Grid item xs={8}>
                            <Typography variant="headline" component="h5">
                                International Technological University
                            </Typography>
                            <Typography component="p">
                                class of 2018
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
                <Paper className={classes.root}>
                    <Typography variant="headline" component="h3">
                        This is a sheet of paper.
                    </Typography>

                    <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}>HDL Logic Simulation</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                                maximus est, id dignissim quam.
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}>Wireless Networks</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
                                diam eros in elit. Pellentesque convallis laoreet laoreet.
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}>Stochastic Processes</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
                                eros, vitae egestas augue. Duis vel est augue.
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}>Computer-Network Security</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
                                eros, vitae egestas augue. Duis vel est augue.
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel expanded={expanded === 'panel5'} onChange={this.handleChange('panel5')}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}>Adv Digital Signal Processing</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
                                eros, vitae egestas augue. Duis vel est augue.
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel expanded={expanded === 'panel6'} onChange={this.handleChange('panel6')}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}>Digital Image Processing</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
                                eros, vitae egestas augue. Duis vel est augue.
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel expanded={expanded === 'panel7'} onChange={this.handleChange('panel7')}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}>Renewable Energy</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
                                eros, vitae egestas augue. Duis vel est augue.
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel expanded={expanded === 'panel8'} onChange={this.handleChange('panel8')}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}>Introduction to Robotics</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
                                eros, vitae egestas augue. Duis vel est augue.
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel expanded={expanded === 'panel9'} onChange={this.handleChange('panel9')}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}>Digital Computer Architecture</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
                                eros, vitae egestas augue. Duis vel est augue.
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel expanded={expanded === 'panel10'} onChange={this.handleChange('panel10')}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}>Optoelectronics</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
                                eros, vitae egestas augue. Duis vel est augue.
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                </Paper>
            </div>
        );
    }
}

SecondMasters.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SecondMasters);