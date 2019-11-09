import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlexRow } from '../../../styles/styles';
import TreeView from '../../reusable/tree-view/TreeView';
import Input from '../../reusable/controls/input/Input';
import Button from '../../reusable/controls/button/Button';
import { StyledTreeViewContainer, StyledTraverseResult } from './styles';
import generateTree, { traverseTree } from '../../../utilities/recursiveTree';
import useFormValue from '../../../hooks/useFormValue';

const maxDepth = 8;
const maxWidth = 10;

function TreeViewDemo () {

  const [data, setData] = useState({});
  const [traverseResult, setTraverseResult] = useState([]);
  const { t } = useTranslation('common');
  const width = useFormValue(3);
  const depth = useFormValue(3);

  const isDepthValid = depth.value <= maxDepth;
  const isWidthValid = width.value <= maxWidth;

  const handleGenerate = () => {
    isDepthValid && setData(generateTree({ depth: depth.value, width: width.value }));
  };

  const handleTraverse = () => {
    Object.keys(data).length && setTraverseResult(traverseTree(data));
  };

  return (
    <>
      <FlexRow>
        <Input
          label={t('width')}
          type='number'
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
        <Button style={{ marginBottom: 0 }} onClick={handleGenerate}>{t('generateTree')}</Button>
        <Button style={{ marginBottom: 0 }} onClick={handleTraverse}>{t('traverseTree')}</Button>
      </FlexRow>
      <StyledTreeViewContainer>
        <TreeView data={data} style={{ flex: 1 }} />
        <StyledTraverseResult>
          {traverseResult.map((node, index) => <span key={index}>{node}</span>)}
        </StyledTraverseResult>
      </StyledTreeViewContainer>
    </>
  );
}

export default TreeViewDemo;
