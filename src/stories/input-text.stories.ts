// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { InputTextComponent } from 'src/app/components/input-text/input-text.component';
import { MaterialModule } from 'src/app/material/material.module';

export default {
  title: 'Example/Input',
  component: InputTextComponent,
  decorators: [
    moduleMetadata({
      declarations: [InputTextComponent],
      imports: [BrowserModule, MaterialModule],
    }),
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<InputTextComponent> = (args: InputTextComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = { };