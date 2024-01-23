import React from 'react';
import { DropdownMenu, DropdownMenuItemButton } from './DropdownMenu';

const Menus = (variant: 'light' | 'primary' | 'secondary') => {
  const [disabled, setDisabled] = React.useState(false);
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setDisabled(true);
    console.log(`Activated "${e.currentTarget.innerText}"`);
    setTimeout(() => { setDisabled(false); }, 1000);
  };

  return <>
    <DropdownMenu disabled={disabled} id='enabled-grades-menu' text='Sync/Export Grades' variant={variant}>
      <DropdownMenuItemButton onClick={onClick}>
        Sync only completed grades to LMS
      </DropdownMenuItemButton>
      <DropdownMenuItemButton onClick={onClick}>
        Sync all grades to LMS (including partial)
      </DropdownMenuItemButton>
      <DropdownMenuItemButton onClick={onClick}>
        Export grades to .csv
      </DropdownMenuItemButton>
    </DropdownMenu>

    <br/>

    <DropdownMenu disabled={true} id='disabled-grades-menu' text='Sync/Export Grades' variant={variant}>
      <DropdownMenuItemButton onClick={onClick}>
        Sync only completed grades to LMS
      </DropdownMenuItemButton>
      <DropdownMenuItemButton onClick={onClick}>
        Sync all grades to LMS (including partial)
      </DropdownMenuItemButton>
      <DropdownMenuItemButton onClick={onClick}>
        Export grades to .csv
      </DropdownMenuItemButton>
    </DropdownMenu>
  </>;
};

export const Light = () => Menus('light');
export const Primary = () => Menus('primary');
export const Secondary = () => Menus('secondary');
