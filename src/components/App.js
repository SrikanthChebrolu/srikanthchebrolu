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

import {Link} from 'react-router';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Hobbies from 'material-ui-icons/ThumbUp';
import School from 'material-ui-icons/School';
import Publications from 'material-ui-icons/Book';
import Create from 'material-ui-icons/Create';
import Code from 'material-ui-icons/Code';
import Sri from 'material-ui-icons/Face';
import Contact from 'material-ui-icons/Contacts';
import Work from 'material-ui-icons/Work';
import Resume from 'material-ui-icons/ImportContacts';
import classNames from 'classnames';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import Picker from './test/picker';
import Posts from './test/posts';

import {
    selectSubreddit,
    fetchPostsIfNeeded,
    invalidateSubreddit
} from '../actions/projects/githubprojects.action'

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
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },
    noUnderLine: { textDecoration: 'none' },
    textColour: { color: 'white' }
});

class ResponsiveDrawer extends React.Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleRefreshClick = this.handleRefreshClick.bind(this)
    }

    componentDidMount() {
        const { dispatch, selectedSubreddit } = this.props
        dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }

    componentDidUpdate(prevProps) {
        if (this.props.selectedSubreddit !== prevProps.selectedSubreddit) {
            const { dispatch, selectedSubreddit } = this.props
            dispatch(fetchPostsIfNeeded(selectedSubreddit))
        }
    }

    handleChange(nextSubreddit) {
        this.props.dispatch(selectSubreddit(nextSubreddit))
        this.props.dispatch(fetchPostsIfNeeded(nextSubreddit))
    }

    handleRefreshClick(e) {
        e.preventDefault()

        const { dispatch, selectedSubreddit } = this.props
        dispatch(invalidateSubreddit(selectedSubreddit))
        dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }


    state = {
        mobileOpen: false,
    };

    handleDrawerToggle = () => {
        this.setState({ mobileOpen: !this.state.mobileOpen });
    };

    render() {
        const { classes, theme } = this.props;
        const { selectedSubreddit, posts, isFetching, lastUpdated } = this.props

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
                                <Create />
                            </ListItemIcon>
                            <ListItemText primary="Posts" />
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
                    <div>
                        <Picker
                            value={selectedSubreddit}
                            onChange={this.handleChange}
                            options={['reactjs', 'frontend']}
                        />
                        <p>
                            {lastUpdated &&
                            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
                                {' '}
            </span>}
                            {!isFetching &&
                            <a href="#" onClick={this.handleRefreshClick}>
                                Refresh
                            </a>}
                        </p>
                        {isFetching && posts.length === 0 && <h2>Loading...</h2>}
                        {!isFetching && posts.length === 0 && <h2>Empty.</h2>}
                        {posts.length > 0 &&
                        <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                            <Posts posts={posts} />
                        </div>}
                    </div>
                </main>
            </div>
        );
    }
}

ResponsiveDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    selectedSubreddit: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    const { selectedSubreddit, postsBySubreddit } = state
    const {
        isFetching,
        lastUpdated,
        items: posts
    } = postsBySubreddit[selectedSubreddit] || {
        isFetching: true,
        items: []
    }

    return {
        selectedSubreddit,
        posts,
        isFetching,
        lastUpdated
    }
}

export default compose(
    withStyles(styles, { withTheme: true }, { name: 'ResponsiveDrawer' }),
    connect(mapStateToProps, null)
)(ResponsiveDrawer);