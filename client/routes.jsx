import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx';
import ResolutionsWrapper from './resolutions/ResolutionsWrapper.jsx';
import ArticulosWrapper from './articulos/ArticulosWrapper.jsx';
import About from './About.jsx';
import ResolutionDetail from './resolutions/ResolutionDetail.jsx';

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

FlowRouter.route('/about', {
  action() {
    mount(MainLayout, {
      content: (<About />)
    }
    )
  }
});

FlowRouter.route('/resolution/:id', {
  action(params) {
    mount(MainLayout, {
      content: (<ResolutionDetail id={params.id} />)
    }
    )
  }
});
