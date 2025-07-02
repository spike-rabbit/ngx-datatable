# [24.0.0](https://github.com/siemens/ngx-datatable/compare/23.0.0...24.0.0) (2025-07-02)


### Features

* add aria-labels to row selection checkboxes ([ae8c946](https://github.com/siemens/ngx-datatable/commit/ae8c9467cda04a20642658aff8d1fa28c177bc18))
* support using string values in previous enum locations ([9033187](https://github.com/siemens/ngx-datatable/commit/9033187ddaa82d467ee5fbf069a1e14ba8273fb5))


### Bug Fixes

* add treeToggleTemplate property in toInternalColumn method to make custom tree template work ([97e8529](https://github.com/siemens/ngx-datatable/commit/97e8529dfd7118e624293891a6c716e9f1fce5ab))
* calculate correct column width in flex mode after resize ([f6d6cf9](https://github.com/siemens/ngx-datatable/commit/f6d6cf99d2e61684888813878561c5d6e5e5e30c)), closes [#155](https://github.com/siemens/ngx-datatable/issues/155)
* never render a resize handle after the last column ([51e3daf](https://github.com/siemens/ngx-datatable/commit/51e3daf4979bb6cc35344b4efd2b7a42665e98b4))
* prevent column reordering between frozen and non-frozen columns ([9c38292](https://github.com/siemens/ngx-datatable/commit/9c38292b0a8930af3c867ae1565fba4e9f57f78f)), closes [#145](https://github.com/siemens/ngx-datatable/issues/145)


### DEPRECATIONS

* All constants that replaced the previous enums should no longer be used. Use the plain string value instead.
  
  Example:
  ```ts
  // Before
  @Component({template: `<ngx-datatable [columnMode]="ColumnMode.Force" />`})
  class MyComponent {
    ColumnMode = ColumnMode;
  }
  
  // After
  @Component({template: `<ngx-datatable [columnMode]="'force'" />`})
  class MyComponent { }

### BREAKING CHANGES

* All output properties are now readonly and cannot be reassigned.
