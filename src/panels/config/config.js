const swv = 'sw-visibility';
const osm = 'open-sm';
const otm = 'open-tm';
const ola = 'open-layers';
const obl = 'open-blocks';
const ful = 'fullscreen';
const prv = 'preview';
const undo = 'core:undo';
const ocd = 'core:open-code';
const redo = 'core:redo';

export default {
  stylePrefix: 'pn-',

  // Default panels fa-sliders for features
  defaults: [
    {
      id: 'commands',
      buttons: [{}]
    },
    {
      id: 'options',
      buttons: [
        {
          active: true,
          id: swv,
          className: 'far fa-square',
          command: swv,
          context: swv,
          attributes: { title: 'View components' }
        },
        {
          id: prv,
          className: 'fa fa-eye',
          command: prv,
          context: prv,
          attributes: { title: 'Preview' }
        },
        {
          id: ful,
          className: 'fa fa-arrows-alt',
          command: ful,
          context: ful,
          attributes: { title: 'Fullscreen' }
        },
        {
          id: 'clear',
          className: 'fa fa-trash',
          command: 'core:canvas-clear',
          attributes: { title: 'Clear' }
        },
        {
          id: redo,
          className: 'fa fa-repeat',
          command: redo,
          attributes: { title: 'Redo' }
        },
        {
          id: undo,
          className: 'fa fa-undo',
          command: undo,
          attributes: { title: 'Undo' }
        }
      ]
    },
    {
      id: 'views',
      buttons: [
        {
          id: osm,
          className: 'fa fa-paint-brush',
          command: osm,
          active: true,
          togglable: 0,
          attributes: { title: 'Open Style Manager' }
        },
        {
          id: otm,
          className: 'fa fa-cog',
          command: otm,
          togglable: 0,
          attributes: { title: 'Settings' }
        },
        {
          id: ola,
          className: 'fa fa-bars',
          command: ola,
          togglable: 0,
          attributes: { title: 'Open Layer Manager' }
        },
        {
          id: obl,
          className: 'fa fa-th-large',
          command: obl,
          togglable: 0,
          attributes: { title: 'Open Blocks' }
        }
      ]
    }
  ],

  // Editor model
  em: null,

  // Delay before show children buttons (in milliseconds)
  delayBtnsShow: 300
};
