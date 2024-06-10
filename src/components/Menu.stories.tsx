import { MenuItem } from "react-aria-components";
import { Menu } from "./Menu";
import { Info } from './svgs/Info';

export const Default = () =>
  <>
    <Menu buttonLabel="Menu">
      <button>Example button</button>
      <button>Another button</button>
    </Menu>
    <Menu buttonLabel="Test menu" buttonIcon={Info}>
      <button>Example button</button>
      <button>Another button</button>
    </Menu>
    <Menu buttonLabel="Test menu" buttonIcon={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAPoAAAD6AG1e1JrAAACh0lEQVR4nO2TT0gUURyAp1MUdPBUEBS7KpQakkJE2Rt2y3lvHXUlmBl3MCiK9ZDtzjxRO0SE/TPqkCBBIiHieyt7MAgjNSzNgnizIkFSkB62pejgTNQl8LIxawepNaeaXQj2g+/wTu97v/kNxxUoUCAL7SO1FTpFCVtM4bRO4UNMURwT2K9TdBsTdE0nqAtTeFYnwilMkKTFkIAJqtFGYJVGRG+E+rd3DDRu4/4GncAOTFHaPeEXTNFHncDF1YfBGUzQI52iluwBFHW7G5BdnaI36wTAC/kIwBTOZw0IP6jf2h6DJ3QKI5ig85jCHo2gPkzRvR+7MKFROIsJmsMULmGCPukUfv3TAI3AKS6pid5kRKx2y7muOvD8Yr0w2S02jl5FLfEbgTOxm4G2oVuws3MQtmKKzmUW2F7kEaGSS0XrVlLRunRejIjhX8adjAR630cD8VybigZiH7T6qt/+frIqH5ZV+ZhbKopSzDlFVVVvs9qcdtkXjgNCodAetwNkVTb+nwBJknYoIeWbmwGKqow5DrCRJGmLqqpFax3uO7473t/gmRiqrZimR/ez+8Kh+THB93pcQAvj/qa3kz558an/5NIT/+nkjF9LPvPpqVn+ku3yy5oei/E9FgN3TIO/axr8sMX4+GfGa9xGWAxctww+nQtNxr9yEjCQqwDLAAsbBpgMXPmpesVkvGUaYNk0+KWMDCRW5acsAzw2GT9qj9hkYDAzcsb32p/AZKDbNECXmQDtJgNhKwGOrHtxaaW4s7isKVxaHmw9cLBBq6huaLPP/6pnb3D9S9fiKQte9pYH027rKQ++45zgLWvsyFHAnKMAjuM27donFrltSQna7DSgQAEun3wHXrEVP1Vyp4cAAAAASUVORK5CYII="}>
      <MenuItem>Cool menu item</MenuItem>
    </Menu>
  </>
