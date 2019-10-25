import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import "./PaperCard.css";

class PaperCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLiked: false,
            numLikes: 0,
        };
        this.clickPaperCardUnlikeHandler = this.clickPaperCardUnlikeHandler.bind(this);
        this.clickPaperCardLikeHandler = this.clickPaperCardLikeHandler.bind(this);
    }

    // handle click 'Like' button
    clickPaperCardLikeHandler() {
        const nextState = {
            isLiked: true,
            numLikes: this.state.numLikes + 1,
        };
        this.setState(nextState);
    }

    // handle click 'Unlike' button
    clickPaperCardUnlikeHandler() {
        const nextState = {
            isLiked: false,
            numLikes: this.state.numLikes - 1,
        };
        this.setState(nextState);
    }

    render() {
        return (
            <div className="wrapper">
                <Card className="paper">
                    <Card.Header>{`${this.props.user} ${this.props.source} this paper.`}</Card.Header>
                    <Card.Body className="body">
                        <div className="title">
                            <Card.Link href={`/paper/${this.props.id}`} className="text">{this.props.title}</Card.Link>
                        </div>
                        <Card.Text>{this.props.date}</Card.Text>
                        <Card.Text>{this.props.authors}</Card.Text>
                        <Card.Text>{this.props.keywords}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="footer">
                        <Button className="like-button" onClick={this.state.isLiked ? this.clickPaperCardUnlikeHandler : this.clickPaperCardLikeHandler}>{this.state.numLikes}</Button>
                        <Button href={`/papers/${this.props.id}`}>{this.props.numReplies}</Button>
                        <Button className="add-button">Add</Button>
                    </Card.Footer>
                </Card>
            </div>
        );
    }
}

PaperCard.propTypes = {
    source: PropTypes.string,
    id: PropTypes.number,
    user: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
    authors: PropTypes.string,
    keywords: PropTypes.string,
    numReplies: PropTypes.number,
};

PaperCard.defaultProps = {
    source: "",
    id: 0,
    user: "",
    title: "",
    date: "",
    authors: "",
    keywords: "",
    numReplies: 0,
};

export default PaperCard;