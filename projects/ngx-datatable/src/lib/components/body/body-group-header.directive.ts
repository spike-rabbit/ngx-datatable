import { ContentChild, Directive, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

import { Group, GroupContext, GroupToggleEvents, Row } from '../../types/public.types';
import { DatatableGroupHeaderTemplateDirective } from './body-group-header-template.directive';

@Directive({
  selector: 'ngx-datatable-group-header'
})
export class DatatableGroupHeaderDirective<TRow extends Row = any> {
  /**
   * Row height is required when virtual scroll is enabled.
   */
  @Input() rowHeight: number | ((group?: Group<TRow>, index?: number) => number) = 0;

  /**
   * Show checkbox at group header to select all rows of the group.
   */
  @Input() checkboxable = false;

  @Input('template')
  _templateInput?: TemplateRef<GroupContext<TRow>>;

  @ContentChild(DatatableGroupHeaderTemplateDirective, { read: TemplateRef, static: true })
  _templateQuery?: TemplateRef<GroupContext<TRow>>;

  get template(): TemplateRef<GroupContext<TRow>> | undefined {
    return this._templateInput ?? this._templateQuery;
  }

  /**
   * Track toggling of group visibility
   */
  @Output() readonly toggle = new EventEmitter<GroupToggleEvents<TRow>>();

  /**
   * Toggle the expansion of a group
   */
  toggleExpandGroup(group: Group<TRow>): void {
    this.toggle.emit({
      type: 'group',
      value: group
    });
  }

  /**
   * Expand all groups
   */
  expandAllGroups(): void {
    this.toggle.emit({
      type: 'all',
      value: true
    });
  }

  /**
   * Collapse all groups
   */
  collapseAllGroups(): void {
    this.toggle.emit({
      type: 'all',
      value: false
    });
  }
}
