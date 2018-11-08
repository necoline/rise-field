import React from 'react';
// import PropTypes from 'prop-types';

const Dialog = (props) => (
<div className="mdc-dialog"
     role="alertdialog"
     aria-modal="true"
     aria-labelledby="my-dialog-title"
     aria-describedby="my-dialog-content">
    <div className="mdc-dialog__container">
        <div className="mdc-dialog__surface">
            <h2 className="mdc-dialog__title" id="my-dialog-title">Dialog Title</h2>
            <div className="mdc-dialog__content" id="my-dialog-content">
                Dialog body text goes here.
            </div>
            <footer className="mdc-dialog__actions">
                <button type="button" className="mdc-button mdc-dialog__button" data-mdc-dialog-action="no">No</button>
                <button type="button" className="mdc-button mdc-dialog__button" data-mdc-dialog-action="yes">Yes</button>
            </footer>
        </div>
    </div>
    <div className="mdc-dialog__scrim"></div>
</div>
);

// Dialog.propTypes = {
//     value: PropTypes.string.isRequired,
//     id: PropTypes.string.isRequired,
//     label: PropTypes.string.isRequired
// };


export default Dialog;