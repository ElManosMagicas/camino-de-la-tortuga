import { TemplateRef } from '@angular/core';

export interface IModalConfig {
  show: boolean;
  templateRef: TemplateRef<IContextModal>;
  data?: any;
}

export interface IContextModal {
  data: any;
}
