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

    <br/>

    <DropdownMenu id='links-menu' text='Resources' variant={variant}>
      <DropdownMenuItem href='https://openstax.org' target='_blank'>
        Browse subjects
      </DropdownMenuItem>
      <DropdownMenuItem href='https://openstax.org/subjects' target='_blank'>
        View all textbooks
      </DropdownMenuItem>
      <DropdownMenuItem href='https://openstax.org/about' target='_blank'>
        About OpenStax
      </DropdownMenuItem>
    </DropdownMenu>

    <br/>

    <div style={{ width: '50rem', maxWidth: '100%' }}>
      <DropdownMenu id='links-menu' text='Wide Menu' width="100%" variant={variant}>
        <DropdownMenuItem href='https://openstax.org' target='_blank'>
          Browse subjects
        </DropdownMenuItem>
        <DropdownMenuItem href='https://openstax.org/subjects' target='_blank'>
          View all textbooks
        </DropdownMenuItem>
        <DropdownMenuItem href='https://openstax.org/about' target='_blank'>
          About OpenStax
        </DropdownMenuItem>
      </DropdownMenu>
    </div>
  </>;
};

export const Light = () => Menus('light');
export const Primary = () => Menus('primary');
export const Secondary = () => Menus('secondary');
