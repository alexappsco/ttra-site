import { useState, useCallback } from 'react';

import { TableProps } from './types';
import { useQuery } from '../use-query';

// ----------------------------------------------------------------------

type ReturnType = TableProps;

export type UseTableProps = {
  defaultDense?: boolean;
};

export default function useTable(props?: UseTableProps): Partial<ReturnType> {
  const [dense, setDense] = useState(!!props?.defaultDense);
  const { setQueries } = useQuery(['page', 'limit'], true);

  const onChangeDense = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  }, []);
  const onChangeRowsPerPage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newLimit = event.target.value;
      setQueries({ limit: newLimit });
    },
    [setQueries]
  );

  const onChangePage = useCallback(
    (event: unknown, newPage: number) => {
      setQueries({ page: String(newPage + 1) }, false);
    },
    [setQueries]
  );

  return {
    dense,
    //
    onChangePage,
    onChangeDense,
    onChangeRowsPerPage,
    //
    setDense,
  };
}
