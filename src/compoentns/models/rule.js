import ReactDOM from 'react-dom';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
};

export class RuleElement extends React.Component {
    constructor(props) {
        super(props);
    }


    drawEmptyElement() {
        return (
            <Card style={styles.card}>
                <CardActionArea>
                    <CardMedia
                        style={styles.media}
                        image='http://static1.squarespace.com/static/599327e56b8f5b29a7f66773/t/59e12c9629f187419b21ed1e/1507929239914/CREATE_LOGO.png?format=1500w'
                        title="Create rule img"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Create new rule
                    </Typography>
                        <Typography component="p">
                            Create rule description
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button 
                    size="small" 
                    color="primary"
                    href='create-rule/condition'
                    >
                        Create
                </Button>
                    <Button size="small" color="primary">
                        Learn More
                </Button>
                </CardActions>
            </Card>
        );
    }

    drawElement() {
        return (
            <Card style={styles.card}>
                <CardActionArea>
                    <CardMedia
                        style={styles.media}
                        image='http://static1.squarespace.com/static/599327e56b8f5b29a7f66773/t/59e12c9629f187419b21ed1e/1507929239914/CREATE_LOGO.png?format=1500w'
                        title="Rule img"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Create new rule
                        </Typography>
                        <Typography component="p">
                            Create rule description
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Create
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        )
    }

    render() {
        let card;
        console.log('render', this.props.rule)
        if (!this.props.rule) {
            card = this.drawEmptyElement();
        } else {
            card = this.drawElement();
        }

        return (
            <div>
                {card}
            </div>
        );
    }
}