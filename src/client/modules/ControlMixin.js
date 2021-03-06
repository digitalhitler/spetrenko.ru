/******************************************************************************
 * @project spetrenko.ru                                                      *
 * @description My sweety personal pet-project sources                        *
 * @repository https://github.com/digitalhitler/spetrenko.ru                  *
 *                                                                            *
 * @author Sergey Petrenko <spetrenko@me.com>                                 *
 * @license Creative Commons Attribution-NonCommercial 4.0                    *
 * @licenseUrl  http://creativecommons.org/licenses/by-nc/4.0/                *
 *                                                                            *
 ******************************************************************************/

/******************************************************************************
 * @project spetrenko.ru                                                      *
 * @description My sweety personal pet-project sources                        *
 * @repository https://github.com/digitalhitler/spetrenko.ru                  *
 *                                                                            *
 * @author Sergey Petrenko <spetrenko@me.com>                                 *
 * @license Creative Commons Attribution-NonCommercial 4.0                    *
 * @licenseUrl  http://creativecommons.org/licenses/by-nc/4.0/                *
 *                                                                            *
 ******************************************************************************/

/******************************************************************************
 * @project spetrenko.ru                                                      *
 * @description My sweety personal pet-project sources                        *
 * @repository https://github.com/digitalhitler/spetrenko.ru                  *
 *                                                                            *
 * @author Sergey Petrenko <spetrenko@me.com>                                 *
 * @license Creative Commons Attribution-NonCommercial 4.0                    *
 * @licenseUrl  http://creativecommons.org/licenses/by-nc/4.0/                *
 *                                                                            *
 ******************************************************************************/

/******************************************************************************
 * @project spetrenko.ru                                                      *
 * @description My sweety personal pet-project sources                        *
 * @repository https://github.com/digitalhitler/spetrenko.ru                  *
 *                                                                            *
 * @author Sergey Petrenko <spetrenko@me.com>                                 *
 * @license Creative Commons Attribution-NonCommercial 4.0                    *
 * @licenseUrl  http://creativecommons.org/licenses/by-nc/4.0/                *
 *                                                                            *
 ******************************************************************************/

"use strict";

let log = require('debug')('app:mixins:control');
let applicationInstance = window.applicationInstance || require('./Application').findInstance();
const ControlMixin = {
  init: function() {
    log(`Control mixin attached`, arguments);
    if(!applicationInstance.componentRefs) {
      applicationInstance.componentRefs = {};
    }
  },

  getApplication: function() {
    return applicationInstance;
  },

  changeRootState: function(rootStateName, rootStateConfiguration) {
    console.log(this);
  },

  bindRootHandler: function(name, handler, once) {
    let app = this.getApplication();
    if(typeof name === 'string' && typeof handeler === 'function') {
      let applyHandler = (once === true ? app.on : app.once);
      applyHandler(name, handler);
    }
  },


  /**
   * @todo Wait for events to occur before render tag.
   * @param events
   */
  waitBeforeRender: function(events) {

  },

  defineComponentReference: function(name, link) {
    if(name && link) {
      applicationInstance.componentRefs[name] = link;
    }
  }

};


export default ControlMixin;