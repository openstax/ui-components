import { MouseEvent } from 'react';
import { DropdownMenu, DropdownMenuItemButton } from './DropdownMenu';

const onClick = (e: MouseEvent<HTMLButtonElement>) => {
  console.log(`Activated "${e.currentTarget.innerText}"`);
};

export const Primary = () => <>
  <DropdownMenu id='enabled-grades-menu' text='Sync/Export Grades' variant='primary'>
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

  <DropdownMenu disabled={true} id='disabled-grades-menu' text='Sync/Export Grades' variant='primary'>
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

export const Light = () => <>
  <DropdownMenu id='enabled-grades-menu' text='Sync/Export Grades' variant='light'>
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

  <DropdownMenu disabled={true} id='disabled-grades-menu' text='Sync/Export Grades' variant='light'>
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

export const Secondary = () => <>
  <DropdownMenu id='enabled-grades-menu' text='Sync/Export Grades' variant='secondary'>
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

  <DropdownMenu disabled={true} id='disabled-grades-menu' text='Sync/Export Grades' variant='secondary'>
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
