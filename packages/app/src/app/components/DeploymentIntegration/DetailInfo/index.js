import React from 'react';
import Margin from 'common/components/spacing/Margin';
import Button from '../../Button';

import { Details, Info } from './elements';

function DetailInfo({ info, deploy, bgColor, light, loading }) {
  return (
    <Details bgColor={bgColor}>
      <Margin right={2}>
        <Info light={light}>{info}</Info>
      </Margin>
      <Button small disabled={loading} onClick={deploy}>
        Deploy
      </Button>
    </Details>
  );
}

export default DetailInfo;
