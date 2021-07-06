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
import GraduationGif from '../../static/GAP_Logo.webp';

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
                    <CardHeader subheader="June 2018 – present"/>
                    <CardMedia
                        className={classes.media}
                        image={GraduationGif}
                        title="Gap Inc."
                    />
                    <CardContent>
                        <Typography component="p">
                            Developed and enhanced an internal application for the Gap.
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
                            <li>Followed Agile methodology to complete the Deliverables. Used Jira for project management software. Confluence is used as the content management and the Documentation of all the Project related documentation.</li>
                            <li>Worked closely with the Business in gathering the requirements and created the Technical Architecture diagrams and revised with the team.</li>
                            <li>Developed some of the wireframes using Axure and revised them from the feedback with the PDM.</li>
                            <li>Used GITHUB as source code repository.</li>
                            <li>Using Angular5 developed the frontend of the project as a disconnected UI and developed it from scratch.</li>
                            <li>Maintained the existing application which is developed in AngularJS 1.6.</li>
                            <li>Followed the Microservices architecture patterns to divide the Monolith application both the UI and the backend.</li>
                            <li>Developed a RESTful web API using Spring Boot. Spring Data is used to communicate with the mongo DB.</li>
                            <li>Integrated the swagger-ui with the back-end web application for visualizing RESTful webservice.</li>
                            <li>Maintained security authentication using Spring Security and developed the Authorization framework within our Application.</li>
                            <li>Strong understanding on Microservices.</li>
                            <li>Strong understanding on Solid Design Patterns.</li>
                            <li>Used Gradle as build tool for the Backend application.</li>
                            <li>Used Jenkins 2.5 for Continuous Integration and Continuous Deployment and automate the Views with Groovy scripts</li>
                            <li>Used PCF for all the microservices Hosting.</li>
                            <li>Have deployed the Applications to prod with zero downtime with Blue Green Deployment strategy</li>
                            <li>Used Splunk to maintain the Application Logging. Also Created Dev ops dashboard in Splunk and alerts for critical features.</li>
                            <li>Used New Relic for Application performance monitoring.</li>
                            <li>SonarQube is used for the continuous code quality.</li>
                            <li>Monitored the mongo DB data using Robo-Mongo, Mongo Compass.</li>
                            <li>Worked with other application teams for getting some of the data from them as Rest API.</li>
                            <li>Migrate the Application to Azure Cloud.</li>
                            <li>Knowledge on the APIGEE API Gateway</li>
                            <li>Worked with Confluent Kafka</li>
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
