import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';
import { OnResize } from '../../utils/decorator';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  @Prop() clickOutCount: number = 0;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  @OnResize()
  private logResize(): void {
    console.log('RESIZED!');
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}
