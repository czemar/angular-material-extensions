// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveControl } from '@czemar/reactive-forms';
import { SidebarComponent } from '../app/components/sidebar/sidebar.component';

export default {
  title: 'Example/Sidebar',
  component: SidebarComponent,
  decorators: [
    moduleMetadata({
      declarations: [SidebarComponent],
      imports: [BrowserModule, MaterialModule],
    }),
  ]
} as Meta;

const InputTextTemplate: Story<SidebarComponent> = (args: SidebarComponent) => ({ props: args });

export const Basic = InputTextTemplate.bind({ });
Basic.args = { };