//@flow
import React from 'react';
import { compose, withStyle } from '~/core/container';
import { withHandlers, withProps, withState, defaultProps } from 'recompose';

import { slice, map, addIndex } from 'ramda';
import styles from './paging.scss';

/**
 * 分頁元件
 * @TO_USE
 * @param children {Array} [要被分頁的東西]
 */
export default compose(
  defaultProps({
    perPage: 8
  }),
  withState('pageIndex', 'setPageIndex', 0),
  withProps(({ perPage, children, pageIndex }) => ({
    pageTotal: Math.ceil(children.length / perPage),
    show: slice(pageIndex * perPage, pageIndex * perPage + 8, children)
  })),
  withHandlers({
    prePage: ({ pageIndex, setPageIndex }) => _ => {
      if (pageIndex - 1 >= 0) setPageIndex(pageIndex - 1);
    },
    nextPage: ({ pageIndex, setPageIndex, pageTotal }) => _ => {
      if (pageIndex + 1 < pageTotal) setPageIndex(pageIndex + 1);
    },
    firstPage: ({ setPageIndex }) => _ => {
      setPageIndex(0);
    },
    lastPage: ({ setPageIndex, pageTotal }) => _ => {
      setPageIndex(pageTotal - 1);
    },
    setPage: ({ setPageIndex }) => index => _ => {
      setPageIndex(index);
    }
  }),
  withStyle(styles)
)(
  ({
    show,
    pageIndex,
    pageTotal,
    setPage,
    prePage,
    nextPage,
    firstPage,
    lastPage
  }) => (
    <div>
      {show}
      <div styleName="pagination">
        <div
          styleName={`page-item ${pageIndex === 0 ? 'disabled' : ''}`}
          onClick={firstPage}>
          <i styleName="fa fa-angle-double-left" />
        </div>
        <div
          styleName={`page-item ${pageIndex === 0 ? 'disabled' : ''}`}
          onClick={prePage}>
          <i styleName="fa fa-angle-left" />
        </div>
        {addIndex(map)(
          (x, idx) => (
            <div
              styleName={`page-item ${pageIndex === idx ? 'active' : ''}`}
              key={`page-index-${idx}`}
              onClick={setPage(idx)}>
              {idx + 1}
            </div>
          ),
          Array(pageTotal)
        )}
        <div
          styleName={`page-item ${
            pageIndex + 1 === pageTotal ? 'disabled' : ''
          }`}
          onClick={nextPage}>
          <i styleName="fa fa-angle-right" />
        </div>
        <div
          styleName={`page-item ${
            pageIndex + 1 === pageTotal ? 'disabled' : ''
          }`}
          onClick={lastPage}>
          <i styleName="fa fa-angle-double-right" />
        </div>
      </div>
    </div>
  )
);
