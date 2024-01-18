import { MouseEvent } from 'react';
import { DropdownMenu, DropdownMenuItemButton, useDropdownMenu } from './DropdownMenu';

const onClick = (e: MouseEvent<HTMLButtonElement>) => {
  console.log(`Activated "${e.currentTarget.innerText}"`);
};

export const Primary = () => {
  const enabledState = useDropdownMenu();
  const disabledState = useDropdownMenu({ disabled: true });

  return <>
    <DropdownMenu id='enabled-grades-menu' state={enabledState} text='Sync/Export Grades' variant='primary'>
      <DropdownMenuItemButton onClick={onClick} state={enabledState}>
        Sync only completed grades to LMS
      </DropdownMenuItemButton>
      <DropdownMenuItemButton onClick={onClick} state={enabledState}>
        Sync all grades to LMS (including partial)
      </DropdownMenuItemButton>
      <DropdownMenuItemButton onClick={onClick} state={enabledState}>
        Export grades to .csv
      </DropdownMenuItemButton>
    </DropdownMenu>

    <br/>

    <DropdownMenu id='disabled-grades-menu' state={disabledState} text='Sync/Export Grades' variant='primary'>
      <DropdownMenuItemButton onClick={onClick} state={disabledState}>
        Sync only completed grades to LMS
      </DropdownMenuItemButton>
      <DropdownMenuItemButton onClick={onClick} state={disabledState}>
        Sync all grades to LMS (including partial)
      </DropdownMenuItemButton>
      <DropdownMenuItemButton onClick={onClick} state={disabledState}>
        Export grades to .csv
      </DropdownMenuItemButton>
    </DropdownMenu>
  </>;
};

export const Light = () => {
  const enabledState = useDropdownMenu();
  const disabledState = useDropdownMenu({ disabled: true });

  return <>
    <DropdownMenu id='enabled-grades-menu' state={enabledState} text='Sync/Export Grades' variant='light'>
      <DropdownMenuItemButton onClick={onClick} state={enabledState}>
        Sync only completed grades to LMS
      </DropdownMenuItemButton>
      <DropdownMenuItemButton onClick={onClick} state={enabledState}>
        Sync all grades to LMS (including partial)
      </DropdownMenuItemButton>
      <DropdownMenuItemButton onClick={onClick} state={enabledState}>
        Export grades to .csv
      </DropdownMenuItemButton>
    </DropdownMenu>

    <br/>

    <DropdownMenu id='disabled-grades-menu' state={disabledState} text='Sync/Export Grades' variant='light'>
      <DropdownMenuItemButton onClick={onClick} state={disabledState}>
        Sync only completed grades to LMS
      </DropdownMenuItemButton>
      <DropdownMenuItemButton onClick={onClick} state={disabledState}>
        Sync all grades to LMS (including partial)
      </DropdownMenuItemButton>
      <DropdownMenuItemButton onClick={onClick} state={disabledState}>
        Export grades to .csv
      </DropdownMenuItemButton>
    </DropdownMenu>
  </>;
};

export const Secondary = () => {
  const enabledState = useDropdownMenu();
  const disabledState = useDropdownMenu({ disabled: true });

  return <>
    <DropdownMenu id='enabled-grades-menu' state={enabledState} text='Sync/Export Grades' variant='secondary'>
      <DropdownMenuItemButton onClick={onClick} state={enabledState}>
        Sync only completed grades to LMS
      </DropdownMenuItemButton>
      <DropdownMenuItemButton onClick={onClick} state={enabledState}>
        Sync all grades to LMS (including partial)
      </DropdownMenuItemButton>
      <DropdownMenuItemButton onClick={onClick} state={enabledState}>
        Export grades to .csv
      </DropdownMenuItemButton>
    </DropdownMenu>

    <br/>

    <DropdownMenu id='disabled-grades-menu' state={disabledState} text='Sync/Export Grades' variant='secondary'>
      <DropdownMenuItemButton onClick={onClick} state={disabledState}>
        Sync only completed grades to LMS
      </DropdownMenuItemButton>
      <DropdownMenuItemButton onClick={onClick} state={disabledState}>
        Sync all grades to LMS (including partial)
      </DropdownMenuItemButton>
      <DropdownMenuItemButton onClick={onClick} state={disabledState}>
        Export grades to .csv
      </DropdownMenuItemButton>
    </DropdownMenu>
  </>;
};
