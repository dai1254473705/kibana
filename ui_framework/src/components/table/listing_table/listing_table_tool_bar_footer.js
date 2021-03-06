import React from 'react';
import PropTypes from 'prop-types';

import {
  KuiToolBarFooter,
  KuiToolBarText,
  KuiToolBarFooterSection,
} from '../../';



export function KuiListingTableToolBarFooter({ pager, itemsSelectedCount }) {
  const renderText = () => {
    if (itemsSelectedCount === 1) {
      return '1 item selected';
    }

    return `${itemsSelectedCount} items selected`;
  };

  return (
    <KuiToolBarFooter>
      <KuiToolBarFooterSection>
        <KuiToolBarText>
          {renderText()}
        </KuiToolBarText>
      </KuiToolBarFooterSection>

      <KuiToolBarFooterSection>
        {pager}
      </KuiToolBarFooterSection>
    </KuiToolBarFooter>
  );
}

KuiListingTableToolBarFooter.PropTypes = {
  pager: PropTypes.node,
  itemsSelectedCount: PropTypes.number,
};
