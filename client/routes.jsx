import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx';
import ResolutionsWrapper from './resolutions/ResolutionsWrapper.jsx';
import ArticulosWrapper from './articulos/ArticulosWrapper.jsx';

FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      content: (<ResolutionsWrapper />)
    }
    )
  }
});

FlowRouter.route('/articulos', {
  action() {
    mount(MainLayout, {
      content: (<ArticulosWrapper />)
    }
    )
  }
});
