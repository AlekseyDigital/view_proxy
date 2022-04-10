import { RouteRecordRaw } from 'vue-router';
import { mergeWith, merge } from 'lodash';

export const viewOptions = {
  About: 'View1',
  Home: 'View2'
}

export type ViewOptions = typeof viewOptions;

export class ViewFactory {
  private options;
  constructor(options: ViewOptions) {
    this.options = options;
  }

  create(route: RouteRecordRaw): RouteRecordRaw {
    let componentName = `${route.name}_${viewOptions[route.name as keyof ViewOptions]}`;
    return merge(route, {
      props: {
        viewName: componentName
      }
    }) as RouteRecordRaw;
  }
}
