import { Radio } from "./Radio";
import "./stories.css";

type RadioProps = React.ComponentProps<typeof Radio>;
const renderRadios = (props: RadioProps) => <div className="story-group">
  <Radio {...props}>Label</Radio>
  <Radio {...props} defaultChecked>Label</Radio>
  <Radio {...props}>Label</Radio>
  <Radio disabled {...props}>Disabled label</Radio>
</div>;

export const Default = () => <>
  {renderRadios({name: 'default'})}
</>;

export const WithTooltip = () => <>
  {renderRadios({name: 'withTooltip', tooltipText: 'Tooltip text for radio input goes here'})}
</>;

const renderDisabledRadios = (props: RadioProps) => <div className="story-group">
  <Radio disabled {...props}>Disabled label</Radio>
  <Radio disabled defaultChecked {...props}>Disabled label</Radio>
</div>;

export const Disabled = () => <>
  {renderDisabledRadios({name: 'disabled'})}
  {renderDisabledRadios({name: 'disabledWithTooltip', tooltipText: 'Tooltip text for disabled radio'})}
</>;
