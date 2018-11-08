import React from 'react';
import { Link } from "react-router-dom";
import { DialogContent } from '@rmwc/dialog';
import PropTypes from 'prop-types';

import { Button } from '@rmwc/button';

  const DialogMenu  = (props) => (
  
      <DialogContent>
        {props.menuContent.map(option => 
          <div key={option.id} className="menu-row">
              <Button raised tag={Link} to={option.link}>
                  {option.text}
              </Button>
          </div>
        )}
      </DialogContent>
  );

  DialogMenu.propTypes = {
    menuContent: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      })
    ).isRequired
    
};



export default DialogMenu;

