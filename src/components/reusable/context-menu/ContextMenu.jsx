import React, { Component, Fragment } from 'react';
import { bool, func, node, number, string, object } from 'prop-types';
import { ContextMenuContainer } from './styles';
import ClickOutside from '../clickoutside/ClickOutside';
import Portal from '../portal/Portal';
import useClickOutside from '../../pages/hooks/custom-hooks/useClickOutside';
import useContextMenu from '../../pages/hooks/custom-hooks/useContextMenu';

class ContextMenu extends Component {

  static getRootPosition (root) {
    return (root && root.getBoundingClientRect && root.getBoundingClientRect()) || { top: 0, left: 0 };
  }

  constructor (props) {
    super(props);
    this.state = {
      isShown: false,
      x: 0,
      y: 0
    };

    this.handleHide = this.handleHide.bind(this);
    this.handleShow = this.handleShow.bind(this);

    this.root = this.getContextMenuRoot();
  }

  getContextMenuRoot () {
    return this.props.rootContainer ? document.getElementById(this.props.rootContainer) : null;
  }

  handleHide () {
    this.state.isShown && this.setState({ isShown: false });
  }

  handleShow (event) {
    event && event.preventDefault && event.preventDefault();
    this.setState({
      isShown: true,
      y: event.clientY,
      x: event.clientX
    });
  }

  render () {
    const { top, left } = ContextMenu.getRootPosition(this.root);
    const { mouseOffset, children, renderCaller } = this.props;
    const { x, y, isShown } = this.state;
    return (
      <Fragment>
        {
          renderCaller({ handleShowMenu: this.handleShow })
        }
        {
          isShown ?
            <Portal node={this.root}>
              <ClickOutside onClickedOutside={this.handleHide}>
                {({ bindRef }) => (
                  <ContextMenuContainer
                    ref={bindRef}
                    style={{
                      top: y - top + mouseOffset,
                      left: x - left + mouseOffset
                    }}
                  >
                    {children({ handleHideMenu: this.handleHide })}
                  </ContextMenuContainer>
                )}
              </ClickOutside>
            </Portal>
            : null
        }
      </Fragment>
    );
  }
}

ContextMenu.defaultProps = {
  mouseOffset: 10
};

ContextMenu.propTypes = {
  children: func.isRequired,
  renderCaller: func.isRequired,
  closeOnSelectOption: bool,
  mouseOffset: number,
  rootContainer: string
};

export function HooksContextMenu2 ({ target, children, closeOnClickInside }) {
  const [callerRef, coords, handleClose] = useContextMenu();
  const onClickInside = closeOnClickInside ? handleClose : undefined;
  const menuRef = useClickOutside({ onClickOutside: handleClose, onClickInside });

  return (
    <Fragment>
      <div ref={callerRef}>
        {target}
      </div>
      {
        coords &&
        <Portal>
          <ContextMenuContainer
            ref={menuRef}
            style={{ ...coords }}
          >
            {children}
          </ContextMenuContainer>
        </Portal>
      }
    </Fragment>
  );
}

export function HooksContextMenu ({ coords, children, handleClose }) {
  const menuRef = useClickOutside({ onClickOutside: handleClose });

  return (
    <Fragment>
      {
        coords &&
        <Portal>
          <ContextMenuContainer
            ref={menuRef}
            style={{ ...coords }}
          >
            {children}
          </ContextMenuContainer>
        </Portal>
      }
    </Fragment>
  );
}

HooksContextMenu2.propTypes = {
  target: object,
  children: node,
  closeOnClickInside: bool
};

HooksContextMenu.propTypes = {
  children: node,
  coords: object,
  handleClose: func
};

export default ContextMenu;
