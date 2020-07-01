import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlexRow } from '../../../styles/styles';
import TreeView from '../../reusable/tree-view/TreeView';
import Input from '../../reusable/controls/input/Input';
import Button from '../../reusable/controls/button/Button';
import { StyledTreeViewContainer, StyledTraverseResult } from './styles';
import { generateTree, flattenTree, mapTree } from '../../../utilities/recursiveTree';
import useFormValue from '../../../hooks/useFormValue';

const maxDepth = 8;
const maxWidth = 10;

function TreeViewDemo () {

  const { t } = useTranslation('common');
  const [tree, setTree] = useState({});
  const [flattened, setFlattened] = useState([]);
  const width = useFormValue(3);
  const depth = useFormValue(3);

  const isDepthValid = depth.value <= maxDepth;
  const isWidthValid = width.value <= maxWidth;

  const canAct = isDepthValid && isWidthValid;

  const handleGenerateTree = () => {
    if (!isDepthValid) return;
    setTree(generateTree({ width: width.value, depth: depth.value }));
  };

  const handleMapTree = () => {
    if (!isDepthValid) return;
    setTree(mapTree(tree, (_, { width, depth, index }) => ({
      id: `Width:${width} Depth:${depth} Index: ${index}`,
      nodeContent: `Width:${width} Depth:${depth} Index: ${index}`,
      isCollapsed: false
    })));
  };

  const handleFlattenTree = () => {
    setFlattened(flattenTree(tree));
  };

  return (
    <>
      <FlexRow>
        <Input
          label={t('width')}
          type="number"
          style={{ width: 150 }}
          validate={() => !isWidthValid && t('widthValidation', { width: maxWidth })}
          {...width}
        />
        <Input
          label={t('depth')}
          type="number"
          style={{ width: 150 }}
          validate={() => !isDepthValid && t('depthValidation', { depth: maxDepth })}
          {...depth}
        />
        <Button
          disabled={!canAct}
          style={{ marginBottom: 0 }}
          onClick={handleGenerateTree}
        >
          {t('generateTree')}
        </Button>
        <Button
          disabled={!canAct}
          style={{ marginBottom: 0 }}
          onClick={handleFlattenTree}
        >
          {t('flattenTree')}
        </Button>
        <Button
          disabled={!canAct}
          style={{ marginBottom: 0 }}
          onClick={handleMapTree}
        >
          {t('mapTree')}
        </Button>
      </FlexRow>
      <StyledTreeViewContainer>
        <TreeView
          data={tree}
          style={{ flex: 1 }}
          shouldDisplayRoot={false}
          expandEventType='onHover'
        />
        <StyledTraverseResult>
          {flattened.map((node, index) => <span key={index}>{node}</span>)}
        </StyledTraverseResult>
      </StyledTreeViewContainer>
    </>
  );
}

export default TreeViewDemo;
