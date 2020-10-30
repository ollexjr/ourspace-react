import React from 'react';
import { Card, ListGroup, ListGroupItem, ButtonGroup, Button } from 'react-bootstrap';
import { useBoardStore } from 'stores/board';
import moment from 'moment';
import { LinkButton, IconButton } from 'components/button';
import { faUserPlus, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { WithEditForm } from 'components/edit';


export const CardAbout: React.FC = () => {
    const store = useBoardStore();
    return (
        <Card className="mb-2">
            <Card.Header>
                About this Space
            <small className="d-block">Created {moment.unix(store.info?.createdAt ?? 0).fromNow()}</small>
            </Card.Header>
            <Card.Body>
                <Card.Title>{store.info?.title}</Card.Title>
                <WithEditForm editForm={() =>
                    <div></div>
                }>
                    <Card.Subtitle className="mb-2 text-muted">{store.info?.description}</Card.Subtitle>
                </WithEditForm>
                <Card.Subtitle className="mb-2 text-muted">{store.info?.rules}</Card.Subtitle>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>{store.info?.members ?? '?'} Members</ListGroupItem>
                <ListGroupItem>{store.info?.posts ?? '?'} Posts</ListGroupItem>
            </ListGroup>
            <Card.Body className="d-none _d-md-block d-flex flex-column">
                <ButtonGroup>
                    <LinkButton variant="outline-primary" to={`/+${store.boardId}/create`}>Post</LinkButton>
                    {!store.info?.isMember &&
                        <IconButton icon={faUserPlus} onClick={() => store.subscribe()}>Join Community</IconButton>}
                    {store.info?.isMember &&
                        <IconButton variant="outline-warning" icon={faUserCheck} onClick={() => store.unsubscribe()}>Leave Community</IconButton>}
                </ButtonGroup>
            </Card.Body>
        </Card>
    )
}

export const CardCustom: React.FC = () => {
    const store = useBoardStore();
    return (
        <Card className="mb-2">
            <Card.Header>
                Moderators
                    </Card.Header>
            <ListGroup className="list-group-flush">
                {store.info?.preview?.map((e) => <ListGroupItem>@{e.username}</ListGroupItem>)}
            </ListGroup>
        </Card>
    )
}

export const CardModerators: React.FC = () => {
    return (
        <Card className="mb-2">
            <Card.Header>
                Community Rules
            </Card.Header>
        </Card>
    )
}