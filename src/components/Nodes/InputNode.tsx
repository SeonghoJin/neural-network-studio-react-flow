import React, { memo } from 'react';

import Handle from '../../components/Handle';
import { NodeProps, Position } from '../../types';

const InputNode = ({ data, isConnectable, sourcePosition = Position.Bottom }: NodeProps) => (
  <>
    <div className={"hello"} style={{
      zIndex: 0,
    }}>
      {data.label}
      <Handle type="source" position={sourcePosition} isConnectable={isConnectable} />
    </div>
  </>
);

InputNode.displayName = 'InputNode';

export default memo(InputNode);
