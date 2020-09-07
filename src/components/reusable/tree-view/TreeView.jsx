import React, { useState, useMemo } from 'react';
import { string, shape, arrayOf, bool, array, object, any, func, number } from 'prop-types';
import Icon from '../icon/Icon.jsx';
import styles from './TreeView.less';

export const TreeView = (props) => {
  const shouldHideRoot = !props.shouldDisplayRoot && props.isRoot;
  const [isCollapsed, toggleCollapsed] = useState(shouldHideRoot ? false : props.isCollapsed);

  const items = useMemo(
    () =>
      (props.data.items || []).map(data => (
        <TreeView
          key={props.getId(data)}
          isRoot={false}
          isCollapsed={data.isCollapsed}
          data={data}
          getId={props.getId}
          subTreeOffset={props.subTreeOffset}
        />
      )),
    [props.data, props.getId, props.subTreeOffset] //eslint-disable-line
  );

  const getNodeContent = ({ nodeContent }) => (typeof nodeContent === 'function' ? nodeContent() : nodeContent);

  const isLeaf = items.length === 0;

  return (
    <div
      style={{ ...(props.isRoot ? props.style : { marginLeft: props.subTreeOffset }) }}
      className={props.isRoot ? [styles.root, props.className].join(' ') : ''}
    >
      <div
        onClick={() => toggleCollapsed(isCollapsed => !isCollapsed)}
        className={[styles.nodeHeader, shouldHideRoot ? styles.isHidden : ''].join(' ')}
      >
        {!isLeaf &&
        <Icon
          icon="arrowRight"
          size={10}
          className={[styles.toggleIcon, !isCollapsed ? styles.iconExpanded : ''].join(' ')}
        />}
        <span style={isLeaf ? { marginLeft: props.subTreeOffset } : {}} className={styles.nodeText}>
          {getNodeContent(props.data)}
        </span>
      </div>
      {!isCollapsed && !isLeaf && items}
    </div>
  );
};

TreeView.propTypes = {
  subTreeOffset: number,
  getId: func,
  isRoot: bool,
  style: object,
  isCollapsed: bool,
  className: string,
  shouldDisplayRoot: bool,
  data: shape({
    id: string,
    isCollapsed: bool,
    nodeContent: any,
    items: arrayOf(
      shape({
        id: string,
        items: array
      })
    )
  }).isRequired
};

TreeView.defaultProps = {
  getId: data => (data || {}).id || '',
  className: '',
  isRoot: true,
  isCollapsed: true,
  shouldDisplayRoot: true,
  subTreeOffset: 15
};

export default TreeView;
