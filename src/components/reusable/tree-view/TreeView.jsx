import React, { useState, useCallback } from 'react';
import { string, shape, arrayOf, bool, array } from 'prop-types';
import Icon from '../icon/Icon.jsx';
import styles from './TreeView.less';

const TreeView = props => {
  const [isCollapsed, toggleCollapsed] = useState(props.isCollapsed);

  const handleToggleCollapse = () => {
    toggleCollapsed(isCollapsed => !isCollapsed);
  };

  const getItems = useCallback(() => {
    return props.data.items && props.data.items.length > 0 ?
      props.data.items.map(data => (
        <TreeView
          key={data.id}
          isRoot={false}
          isCollapsed={data.isCollapsed}
          data={data}
        />
      )) :
      null;
  }, [props.data]);

  const items = getItems();
  return (
    <div
      style={props.isRoot ? props.style : {}}
      className={[
        styles.tree,
        props.isRoot ? styles.root : ''
      ].join(' ')}
    >
      <div className={styles.nodeHeader}>
        {
          items &&
          <Icon
            icon='arrowRight'
            size={10}
            onClick={handleToggleCollapse}
            className={[styles.toggleIcon, !isCollapsed ? styles.iconExpanded : ''].join(' ')}
          />
        }
        <span className={[styles.nodeText, !items ? styles.isLeaf : ''].join(' ')}>{props.data.id}</span>
      </div>
      {!isCollapsed && items}
    </div>
  );
};

TreeView.propTypes = {
  isRoot: bool,
  isCollapsed: bool,
  data: shape({
    id: string,
    items: arrayOf(shape({
      id: string,
      items: array
    }))
  })
};

TreeView.defaultProps = {
  isRoot: true,
  isCollapsed: true
};

export default TreeView;
