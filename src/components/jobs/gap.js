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
        height: 80,
        width: 222,
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
                        title="Gap"
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
                            <li>Followed Agile methodology to complete the project. Used Jira for bug tracker, issue tracking system and project management software. Confluence and Google Sites is used as the content management.</li>
                            <li>Worked closely with the scientists in gathering the requirements and worked with my manager in order to develop a whole new application called Boomerang for high throughput of the scientists with whole new tech stack.</li>
                            <li>Involved in designing the flow diagrams using gliffy</li>
                            <li>Developed some of the wireframes using axure.</li>
                            <li>Used distributed version control (BitBucket) as source code repository.</li>
                            <li>Developed a RESTful web API using Spring Boot. Spring Data is used to communicate with the mongo DB.</li>
                            <li>Integrated the swagger-ui with the back end web application for visualizing RESTful webservice.</li>
                            <li>Maintained security authentication using Spring Security with LDAP server.</li>
                            <li>Used Gradle as build tool for the Backend application.</li>
                            <li>Tomcat 8 is used as application server. Used wine plugin for the deployments on the tomcat servers</li>
                            <li>Using Angular4 developed the frontend of the project as a disconnected UI. Gulp is used as a build tool for the UI application and node server using web-pack.</li>
                            <li>Angular routing is used to route the frontend web application.</li>
                            <li>Used Log4J logging framework to write Log messages with various levels for logging across the application.</li>
                            <li>Used Jenkins 2.5 for Continuous Integration and Continuous Deployment.</li>
                            <li>Sonarqube is used for the continuous code quality.</li>
                            <li>Monitored the mongo DB data using Robo-Mongo.</li>
                            <li>Worked with other application teams for getting some of the data from them as Rest API.</li>
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
