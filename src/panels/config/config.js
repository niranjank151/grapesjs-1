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
          id: 'publish',
          className: 'btn-publish',
          label: 'Publish',
          command: 'publish',
          attributes: { title: 'Publish' }
        },
        {
          id: prv,
          className: 'btn-preview',
          command: prv,
          context: prv,
          label: 'Preview',
          attributes: { title: 'Preview' }
        },
        {
          active: true,
          id: swv,
          className: 'far fa-square',
          command: swv,
          context: swv,
          attributes: { title: 'View components' }
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
    }
  ],

  // Editor model
  em: null,

  // Delay before show children buttons (in milliseconds)
  delayBtnsShow: 300
};
