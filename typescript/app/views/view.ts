export abstract class View<T> {
  protected element: HTMLElement;
  private escape: boolean = false;

  constructor(selector: string, escape?: boolean) {
    this.element = document.querySelector(selector)
    if(escape) {
        this.escape = escape
    }
  }

  update(model: T): void  {
    let template = this.template(model);
    if(this.escape) {
      template = template.replace(/<script>[\s\S]*?<script>/, '')
    }
    this.element.innerHTML = template;
  }

  protected abstract template(model: T): string 
}