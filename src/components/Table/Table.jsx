import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { BlocksContext } from '../Provider';
import { rowCreator } from '../../functions/rowCreator';
import { titlesCreator } from '../../functions/titlesCreator';
import styles from './Table.module.scss';
import { sortHandler } from '../../functions/sortHandler';

const Table = ({ sort }) => {
  const { blocks } = useContext(BlocksContext);
  if (!blocks.length) {
    return null;
  }

  const titles = titlesCreator(blocks);
  const sortedBlocks = sortHandler(sort, blocks);
  const rows = sortedBlocks.map((el) => rowCreator(el));

  return (
    <div className={styles.table}>
      <table>
        <thead className='table__head'>
          <tr className='table__row'>
            {titles.map((el) => (
              <th className={styles.table__cell} key={el}>
                {el}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='table__body'>
          {rows.map((row) => {
            const [rowkey] = row;
            return (
              <tr key={rowkey} className='table__row'>
                {row.map((cell, i) => {
                  const cellkey = `${cell} ${i}`;
                  return (
                    <td className={styles.table__cell} key={cellkey}>
                      {cell || '_____'}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  sort: PropTypes.string.isRequired,
};

export { Table };
