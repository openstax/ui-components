import React from 'react';
import { DropdownMenu, DropdownMenuItem } from './DropdownMenu';

const Menus = (variant: 'light' | 'primary' | 'secondary') => {
  const [disabled, setDisabled] = React.useState(false);
  const handleAction = () => {
    setDisabled(true);
    setTimeout(() => { setDisabled(false); }, 1000);
  };

  return <>
    <DropdownMenu disabled={disabled} id='enabled-grades-menu' text='Sync/Export Grades' variant={variant}>
      <DropdownMenuItem onAction={handleAction}>
        Sync only completed grades to LMS
      </DropdownMenuItem>
      <DropdownMenuItem onAction={handleAction}>
        Sync all grades to LMS (including partial)
      </DropdownMenuItem>
      <DropdownMenuItem onAction={handleAction}>
        Export grades to .csv
      </DropdownMenuItem>
    </DropdownMenu>

    <br/>

    <DropdownMenu disabled={true} id='disabled-grades-menu' text='Sync/Export Grades' variant={variant}>
      <DropdownMenuItem onAction={handleAction}>
        Sync only completed grades to LMS
      </DropdownMenuItem>
      <DropdownMenuItem onAction={handleAction}>
        Sync all grades to LMS (including partial)
      </DropdownMenuItem>
      <DropdownMenuItem onAction={handleAction}>
        Export grades to .csv
      </DropdownMenuItem>
    </DropdownMenu>
  </>;
};

export const Light = () => Menus('light');
export const Primary = () => Menus('primary');
export const Secondary = () => Menus('secondary');
