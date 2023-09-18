import React, {Fragment} from "react";
import {Modal} from "react-bootstrap";

export const ModalFormBodyText = (props) => {
    return (
        <Fragment>
            <Modal centered
                show={
                    props.show
                }
                onHide={
                    props.onHide
                }
                size={
                    props.size
            }>
                <Modal.Header>
                    <Modal.Title>{
                        props.titulo
                    }</Modal.Title>
                </Modal.Header>
                <Modal.Body> {
                    props.bodyText
                } </Modal.Body>
            </Modal>
        </Fragment>
    )
};