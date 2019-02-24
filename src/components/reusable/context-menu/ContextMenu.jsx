import React, { Component, Fragment, useState } from 'react';
import { bool, func, node, number, string, object } from 'prop-types';
import { ContextMenuContainer } from './styles';
import ClickOutside from '../clickoutside/ClickOutside';
import Portal from '../portal/Portal';
import useClickOutside from '../../pages/hooks/custom-hooks/useClickOutside';

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

export function HookContextMenu ({ children, target }) {
  const [coordinates, setCoordinates] = useState(null);
  const unsetCoords = () => setCoordinates(null);
  return (
    <Fragment>
      <div
        onContextMenu={(event) => {
          event.preventDefault();
          setCoordinates({ left: event.clientX, top: event.clientY });
        }}
      >
        {target}
      </div>
      {
        coordinates &&
        <Menu
          coordinates={coordinates}
          onClickOutside={unsetCoords}
          onClickInside={unsetCoords}
        >
          {children}
        </Menu>
      }
    </Fragment>
  );
}

function Menu ({ coordinates, children, onClickOutside, onClickInside }) {
  const ref = useClickOutside({ onClickOutside, onClickInside });
  return (
    <Portal>
      <ContextMenuContainer
        ref={ref}
        style={{ ...coordinates }}
      >
        {children}
      </ContextMenuContainer>
    </Portal>
  );
}

Menu.propTypes = {
  coordinates: object,
  children: node,
  onClickOutside: func,
  onClickInside: func,
};

HookContextMenu.propTypes = {
  children: node,
  target: node,
};

export default ContextMenu;
