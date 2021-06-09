import React, { useEffect } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
// used for dispatching actions
import { useDispatch } from 'react-redux'

import { getPosts } from './actions/posts'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import memories from './images/memories.png'
import useStyles from './styles'

function App() {
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    return (
        // MUI: centers your content horizontally, large max width
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                {/* MUI: textual element */}
                <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                {/* alt is text that will be displayed if the image can't be */}
                <img className={classes.image} src={memories} alt="memories" height="60" />
            </AppBar>
            {/* MUI: animation */}
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        {/* MUI: amount of space taken up on different size devices - xs, sm */}
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App
