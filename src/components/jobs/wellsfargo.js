import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import GraduationGif from '../../static/Wells-Fargo.jpg';

const styles = theme => ({
    card: {
    },
    media: {
        height: 230,
        width: 230,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
});

class RecipeReviewCard extends React.Component {
    state = { expanded: true };

    handleExpandClick = () => {
        this.setState({ expanded: !this.state.expanded });
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Card className={classes.card}>
                    <CardHeader subheader="May 2015 – January 2017"/>
                    <CardMedia
                        className={classes.media}
                        image={GraduationGif}
                        title="WellsFargo"
                    />
                    <CardContent>
                        <Typography component="p">
                           Developed a customer facing application called CEOMobile for WellsFargo wholesale customers
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.actions} disableActionSpacing>
                        <IconButton
                            className={classnames(classes.expand, {
                                [classes.expandOpen]: this.state.expanded,
                            })}
                            onClick={this.handleExpandClick}
                            aria-expanded={this.state.expanded}
                            aria-label="Show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph variant="body2">
                                Responsibilities:
                            </Typography>
                            <li>Followed agile methodology, provide/take feedback on the features, suggest/implement optimal solutions.</li>
                            <li>Involved in analysis, design, development, testing/debugging and implementation.</li>
                            <li>Worked closely with Quality Assurance testers during the testing phase of the project to ensure that any and all necessary changes (fixes or enhancements) to the application can be accommodated to meet user requirements while also honoring timeline;</li>
                            <li>Experience with authentication protocols (SAML 2.0).</li>
                            <li>Implemented the Model View Control (MVC) structure using Struts. 1.0, 2.0.</li>
                            <li>Used Spring Batch for a batch processing application.</li>
                            <li>Used Apache tomcat and Weblogic 12.1.1,12.1.3 as an application server to deploy various components of application.</li>
                            <li>Installing, deploying, monitoring, maintain and configure Weblogic server 12c in local machine (Windows).</li>
                            <li>Monitoring error logs, troubleshooting and fixing the problems.</li>
                            <li>Providing JSON responses for both android and IPhone applications using Struts Actions classes.</li>
                            <li>Helping the mobile team to debug the issue on both the IOS and android applications.</li>
                            <li>Strong experience with SOAP and REST webservice consuming (JAX-RS, JAX-WS, CXF, Axis, JAXB).</li>
                            <li>Tested the Web services using SOAPUI and by writing Web service client in Java for transmitting the offender's information in XML data using the WSDL provided.</li>
                            <li>Designed exception handling and a logging framework as part of the remediation strategy.</li>
                            <li>Involved in application migration from older server environments to newer server environments providing high availability and accessibility.</li>
                            <li>Upgrading JDK version from 1.7 to 1.8, also Weblogic servers from 12.1.1 to 12.1.3 and making sure all the applications are running after performing upgrade task.</li>
                            <li>Interacting with Oracle Support whenever needed, and coordinating with Oracle via Metal ink for product related issues.</li>
                            <li>Responsible for diagnosing the root cause analysis of the support issues observed to avoid reoccurrence of such issues in the future.</li>
                            <li>Configured and scheduled jobs for multiple projects on Jenkins.</li>
                            <li>Developing Test Cases and performed Unit testing using JUnit for the Action classes.</li>
                            <li>Used test automation frameworks like Selenium.</li>
                            <li>Used Log4J logging framework to write Log messages with various levels for logging across the application.</li>
                            <li>Logging the alert strings in to the logs whenever required which helps in triggering the OVO Alerts.</li>
                            <li>Working on Oracle database systems to create pilot users for some of the applications.</li>
                            <li>Isolated problems by using CA Wily Introscope, Dynatrace as application performance management tool.</li>
                            <li>Used Apache JMeter as a load-testing tool for analyzing and measuring the performance of a variety of services.</li>
                            <li>Maintained version control of the Java files with SVN.</li>
                            <li>Assisted with overnight on-call development/operations duties such as application installations and deployments into a production environment.</li>
                        </CardContent>
                    </Collapse>
                </Card>
            </div>
        );
    }
}

RecipeReviewCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);
