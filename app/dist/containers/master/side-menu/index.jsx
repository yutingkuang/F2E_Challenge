//@flow
import React from 'react';
import { Link } from 'react-router-dom';
import { compose, withStyle } from '~/core/container';
import {
  withStateHandlers,
  withProps,
  withState,
  shouldUpdate
} from 'recompose';
import { map, addIndex } from 'ramda';
import styles from './menu.scss';
const mapIndexed = addIndex(map);

const Menu = ({ open, toggleHandler, menu, setActive, active }) => (
  <div>
    <div
      styleName={`toggle-menu-btn ${open ? 'open' : ''}`}
      onClick={() => toggleHandler()}>
      <i styleName="fa fa-angle-right" />
    </div>
    <div styleName={`menu ${open ? 'open' : ''}`}>
      {mapIndexed(
        ({ name, route }, idx) => (
          <Link
            to={route}
            styleName={`menu-item ${idx === active ? 'active' : ''}`}
            key={`menu-item-${idx}`}
            onClick={() => setActive(idx)}>
            {name}
          </Link>
        ),
        menu
      )}
    </div>
  </div>
);

export default compose(
  withProps({
    menu: [
      { name: 'To Do List', route: '/ToDoList' },
      { name: 'Filter', route: '/Filter' }
    ]
  }),
  withState('active', 'setActive', 0),
  withStateHandlers(
    { open: false },
    {
      toggleHandler: ({ open }) => _ => ({ open: !open })
    }
  ),
  withStyle(styles)
)(Menu);
