import React from 'react';
import { Link } from "react-router-dom";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    DialogButton
  } from '@rmwc/dialog';

import { Button } from '@rmwc/button';


  const DialogMenu  = () => (
  
      <DialogContent>
          <div className="row">
              <Button raised tag={Link} to="/student-form">
                  New Student
              </Button>
          </div>
          <div>   
              <Button raised tag={Link} to="/main-register">
                  Existing Student
              </Button>
          </div>
      </DialogContent>
  );

export default DialogMenu;

