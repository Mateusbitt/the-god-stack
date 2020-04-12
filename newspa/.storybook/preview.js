import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import '@storybook/addon-console';
import { setConsoleOptions } from '@storybook/addon-console';

setConsoleOptions({
panelExclude: [],
});

addDecorator(withInfo); 