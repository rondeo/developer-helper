import {PLATFORM} from 'aurelia-pal';

export class App {
    configureRouter(config, router) {
        this.router = router;
        config.title = 'Developer helper';
        config.map([
          { route: ['', '/home'],        name: 'home',           moduleId: PLATFORM.moduleName('home'), nav: true, title: 'Home' },
          { route: '/string-length',     name: 'string-length',  moduleId: PLATFORM.moduleName('string-length'), nav: true, title: 'String length' },
          { route: '/base64',            name: 'base64',         moduleId: PLATFORM.moduleName('base64'), nav: true, title: 'Base64 encode and decode' }/*,
          { route: 'files/*path',      name: 'files',      moduleId: 'files/index', nav: 0,    title: 'Files', href:'#files' }
            */
        ]);
      }
}
