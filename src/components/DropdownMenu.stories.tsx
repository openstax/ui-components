import { MouseEvent } from 'react';
import { DropdownMenu, DropdownMenuItem, useDropdownMenu } from './DropdownMenu';

const onClick = (e: MouseEvent<HTMLButtonElement>) => alert(`Clicked on menu item for "${e.currentTarget.innerText}"`);

export const Primary = () => {
  const enabledState = useDropdownMenu();
  const disabledState = useDropdownMenu({ disabled: true });

  return <>
    <DropdownMenu id='enabled-grades-menu' state={enabledState} text='Sync/Export Grades' variant='primary'>
      <DropdownMenuItem onClick={onClick} state={enabledState}>
        Sync only completed grades to LMS
      </DropdownMenuItem>
      <DropdownMenuItem onClick={onClick} state={enabledState}>
        Sync all grades to LMS (including partial)
      </DropdownMenuItem>
      <DropdownMenuItem onClick={onClick} state={enabledState}>
        Export grades to .csv
      </DropdownMenuItem>
    </DropdownMenu>

    <br/>

    <DropdownMenu id='disabled-grades-menu' state={disabledState} text='Sync/Export Grades' variant='primary'>
      <DropdownMenuItem onClick={onClick} state={disabledState}>
        Sync only completed grades to LMS
      </DropdownMenuItem>
      <DropdownMenuItem onClick={onClick} state={disabledState}>
        Sync all grades to LMS (including partial)
      </DropdownMenuItem>
      <DropdownMenuItem onClick={onClick} state={disabledState}>
        Export grades to .csv
      </DropdownMenuItem>
    </DropdownMenu>
  </>;
};

export const Light = () => {
  const enabledState = useDropdownMenu();
  const disabledState = useDropdownMenu({ disabled: true });

  return <>
    <DropdownMenu id='enabled-grades-menu' state={enabledState} text='Sync/Export Grades' variant='light'>
      <DropdownMenuItem onClick={onClick} state={enabledState}>
        Sync only completed grades to LMS
      </DropdownMenuItem>
      <DropdownMenuItem onClick={onClick} state={enabledState}>
        Sync all grades to LMS (including partial)
      </DropdownMenuItem>
      <DropdownMenuItem onClick={onClick} state={enabledState}>
        Export grades to .csv
      </DropdownMenuItem>
    </DropdownMenu>

    <br/>

    <DropdownMenu id='disabled-grades-menu' state={disabledState} text='Sync/Export Grades' variant='light'>
    <DropdownMenuItem onClick={onClick} state={disabledState}>
        Sync only completed grades to LMS
      </DropdownMenuItem>
      <DropdownMenuItem onClick={onClick} state={disabledState}>
        Sync all grades to LMS (including partial)
      </DropdownMenuItem>
      <DropdownMenuItem onClick={onClick} state={disabledState}>
        Export grades to .csv
      </DropdownMenuItem>
    </DropdownMenu>
  </>;
};

export const Secondary = () => {
  const enabledState = useDropdownMenu();
  const disabledState = useDropdownMenu({ disabled: true });

  return <>
    <DropdownMenu id='enabled-grades-menu' state={enabledState} text='Sync/Export Grades' variant='secondary'>
      <DropdownMenuItem onClick={onClick} state={enabledState}>
        Sync only completed grades to LMS
      </DropdownMenuItem>
      <DropdownMenuItem onClick={onClick} state={enabledState}>
        Sync all grades to LMS (including partial)
      </DropdownMenuItem>
      <DropdownMenuItem onClick={onClick} state={enabledState}>
        Export grades to .csv
      </DropdownMenuItem>
    </DropdownMenu>

    <br/>

    <DropdownMenu id='disabled-grades-menu' state={disabledState} text='Sync/Export Grades' variant='secondary'>
    <DropdownMenuItem onClick={onClick} state={disabledState}>
        Sync only completed grades to LMS
      </DropdownMenuItem>
      <DropdownMenuItem onClick={onClick} state={disabledState}>
        Sync all grades to LMS (including partial)
      </DropdownMenuItem>
      <DropdownMenuItem onClick={onClick} state={disabledState}>
        Export grades to .csv
      </DropdownMenuItem>
    </DropdownMenu>
  </>;
};
