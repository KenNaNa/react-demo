import React from 'react';

export default function SearchBar({
  filterText,
  onFilterTextChange,
  inStockOnly,
  onInStockOnlyChange,
}) {
  return (
    <form>
      <input
        onChange={(e) => onFilterTextChange(e.target.value)}
        type="text"
        placeholder="Search..."
        value={filterText}
      />
      <label>
        <input
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
          type="checkbox"
          checked={inStockOnly}
        />{' '}
        Only show products in stock
      </label>
    </form>
  );
}
