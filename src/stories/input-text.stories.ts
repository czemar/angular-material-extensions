// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { InputTextComponent } from 'src/app/components/input-text/input-text.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveControl } from '@czemar/reactive-forms';

export default {
  title: 'Example/Input',
  component: InputTextComponent,
  decorators: [
    moduleMetadata({
      declarations: [InputTextComponent],
      imports: [BrowserModule, MaterialModule],
    }),
  ]
} as Meta;

const InputTextTemplate: Story<InputTextComponent> = (args: InputTextComponent) => ({ props: args });

export const Basic = InputTextTemplate.bind({ });
Basic.args = { control: new ReactiveControl(), label: 'Label' };