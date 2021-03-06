import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';
import MenuIcon from 'material-ui-icons/Menu';
import Avatar from 'material-ui/Avatar';
import Card, { CardContent } from 'material-ui/Card';
import NewReleases from 'material-ui-icons/NewReleases';
import {Link} from 'react-router';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Hobbies from 'material-ui-icons/ThumbUp';
import School from 'material-ui-icons/School';
import Publications from 'material-ui-icons/Book';
import Posts from 'material-ui-icons/Create';
import Code from 'material-ui-icons/Code';
import Sri from 'material-ui-icons/Face';
import Contact from 'material-ui-icons/Contacts';
import Work from 'material-ui-icons/Work';
import Resume from 'material-ui-icons/ImportContacts';
import classNames from 'classnames';
import {connect} from "react-redux";
import compose from "recompose/compose";
import {fetchNews} from "../../actions/news.action";
import CardMedia from 'material-ui/Card/CardMedia';
import CardHeader from 'material-ui/Card/CardHeader';
import CardActions from 'material-ui/Card/CardActions';
import Button from 'material-ui/Button';
import red from "material-ui/colors/red";

const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexGrow: 1,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
    },
    appBar: {
        position: 'absolute',
        marginLeft: drawerWidth,
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        [theme.breakpoints.up('md')]: {
            position: 'relative',
        },
    },
    content: {
        width: '100%',
        flexGrow: 1,
        padding: 24,
        height: 'calc(100% - 56px)',
        marginTop: 56,
        [theme.breakpoints.up('sm')]: {
            height: 'calc(100% - 64px)',
            marginTop: 64,
        },
    },
    noUnderLine: { textDecoration: 'none' },
    textColour: { color: 'white' },
    stretch: {
        width: '100%'
    }, card: {
        width: '90%',
        margin: '0 2px',
        marginBottom: 16,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        margin: 10
    },
    title: {
        margin: 16,
        marginTop: 0,
        fontSize: 20,
        color: theme.palette.text.secondary,
        fontWeight: 'bold',
    },
    actions: {
        display: 'flex',
    },
    avatar: {
        backgroundColor: red[500],
    },
    button: {
        align: 'left',
        margin: theme.spacing.unit,
    },
});

class News extends React.Component {
    state = {
        mobileOpen: false,
    };

    componentWillMount() {
        const {dispatch} = this.props;
        dispatch(fetchNews());
    }

    handleDrawerToggle = () => {
        this.setState({ mobileOpen: !this.state.mobileOpen });
    };

    render() {
        const { classes, theme } = this.props;

        const drawer = (
            <div>
                <div className={classes.toolbar} />
                <Divider />
                <List className={classes.list}>
                    <Link to="/" className={classes.noUnderLine}>
                        <ListItem button>
                            <ListItemIcon>
                                <Sri />
                            </ListItemIcon>
                            <ListItemText primary="Srikanth Chebrolu" />
                        </ListItem>
                    </Link>
                    <Divider/>
                    <Link to="/resume" className={classes.noUnderLine}>
                        <ListItem button >
                            <ListItemIcon>
                                <Resume />
                            </ListItemIcon>
                            <ListItemText primary="Resume" />
                        </ListItem>
                    </Link>
                    <Divider/>
                    <Link to="/publications" className={classes.noUnderLine}>
                        <ListItem button>
                            <ListItemIcon>
                                <Publications />
                            </ListItemIcon>
                            <ListItemText primary="Publications" />
                        </ListItem>
                    </Link>
                    <Divider/>
                    <Link to="/projects" className={classes.noUnderLine}>
                        <ListItem button>
                            <ListItemIcon>
                                <Code />
                            </ListItemIcon>
                            <ListItemText primary="Projects" />
                        </ListItem>
                    </Link>
                    <Divider/>
                    <Link to="/education" className={classes.noUnderLine}>
                        <ListItem button>
                            <ListItemIcon>
                                <School />
                            </ListItemIcon>
                            <ListItemText primary="Education" />
                        </ListItem>
                    </Link>
                    <Divider/>
                    <Link to="/jobs" className={classes.noUnderLine}>
                        <ListItem button>
                            <ListItemIcon>
                                <Work />
                            </ListItemIcon>
                            <ListItemText primary="Jobs" />
                        </ListItem></Link>
                    <Divider/>
                    <Link to="/hobbies" className={classes.noUnderLine}>
                        <ListItem button>
                            <ListItemIcon>
                                <Hobbies />
                            </ListItemIcon>
                            <ListItemText primary="Hobbies" />
                        </ListItem></Link>
                    <Divider/>
                    <Link to="/posts" className={classes.noUnderLine}>
                        <ListItem button>
                            <ListItemIcon>
                                <Posts />
                            </ListItemIcon>
                            <ListItemText primary="Posts" />
                        </ListItem>
                    </Link>
                    <Divider/>
                    <Link to="/news" className={classes.noUnderLine}>
                        <ListItem button >
                            <ListItemIcon>
                                <NewReleases />
                            </ListItemIcon>
                            <ListItemText primary="Latest News" />
                        </ListItem>
                    </Link>
                    <Divider/>
                    <Link to="/contact" className={classes.noUnderLine}>
                        <ListItem button>
                            <ListItemIcon>
                                <Contact />
                            </ListItemIcon>
                            <ListItemText primary="Contact" />
                        </ListItem>
                    </Link>
                </List>
                <Divider />
            </div>
        );

        return (
            <div className={classes.root}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={this.handleDrawerToggle}
                            className={classes.navIconHide}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Link to="/"  className={classes.noUnderLine}>
                            <Avatar
                                alt="Srikanth Chebrolu"
                                src="sri.jpg"
                                className={classNames(classes.avatar, classes.bigAvatar)}/>
                        </Link>
                        <Link to="/"  className={classes.noUnderLine}>
                            <Typography variant="title" noWrap  className={classes.textColour}>
                                Srikanth Chebrolu
                            </Typography>
                        </Link>
                    </Toolbar>
                </AppBar>
                <Hidden mdUp>
                    <Drawer
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={this.state.mobileOpen}
                        onClose={this.handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden smDown implementation="css">
                    <Drawer
                        variant="permanent"
                        open
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <main className={classes.content}>
                    <h1>Tech News</h1>
                    <div>
                        {this.props.latestnews.map(function(latestnew, index){
                            return (<div>
                                <Card className={classes.card}>
                                    <CardHeader
                                        avatar={
                                            <Avatar aria-label="Recipe" className={classes.avatar}>
                                                R
                                            </Avatar>
                                        }
                                        title={ latestnew.author }
                                        subheader={ latestnew.publishedAt }
                                    />
                                    <Typography className={classes.title}>
                                        { latestnew.title }
                                    </Typography>
                                    {latestnew.urlToImage !== null &&
                                    <CardMedia
                                        className={classes.media}
                                        image={ latestnew.urlToImage }
                                        title={ latestnew.title }
                                    />
                                    }

                                    <CardContent>
                                        <Typography component="p">
                                            { latestnew.description }
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="secondary" className={classes.button} href={ latestnew.url }>Read more</Button>
                                    </CardActions>
                                </Card>
                            </div>);
                        })}
                    </div>
                </main>
            </div>
        );
    }
}

News.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};


function mapStateToProps(state) {
    return {
        latestnews: state.getLatestNews.news
    }
}

export default compose(
    withStyles(styles, { withTheme: true }, { name: 'News' }),
    connect(mapStateToProps, null)
)(News);