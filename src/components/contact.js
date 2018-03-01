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
import Posts from 'material-ui-icons/Create';
import Code from 'material-ui-icons/Code';
import Sri from 'material-ui-icons/Face';
import Contact from 'material-ui-icons/Contacts';
import Work from 'material-ui-icons/Work';
import Resume from 'material-ui-icons/ImportContacts';
import Button from 'material-ui/Button';
import Grade from 'material-ui-icons/Grade';

import classNames from 'classnames';

const drawerWidth = 240;

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

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
    button: {
        margin: theme.spacing.unit,
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
});

class ResponsiveDrawer extends React.Component {
    state = {
        mobileOpen: false,
        value: 0,
    };

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
                    <Button className={classes.button} variant="raised" size="small" href="https://srikanthchebrolu.typeform.com/to/nndFWH" >
                        <Grade className={classes.leftIcon} />
                        Let us Know
                    </Button>
                </main>
            </div>
        );
    }
}

ResponsiveDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);

