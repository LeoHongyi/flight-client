import { useState, useEffect, useRef } from 'react';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '../components/ui/table';

import { Loader2 } from 'lucide-react';

const InfiniteScrollTable = ({
  columns,
  fetchData,
  renderRow,
  loadingMessage = 'Loading more items...',
  emptyMessage = 'No more items available',
  initialPage = 1,
  threshold = 1.0,
}) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(initialPage);
  const [hasMore, setHasMore] = useState(true);

  const observerTarget = useRef(null);

  const loadMoreItems = async () => {
    if (loading || !hasMore) return;

    setLoading(true);

    try {
      const newItems = await fetchData(page);

      if (!newItems || newItems.length === 0) {
        setHasMore(false);
      } else {
        setItems((prev) => [...prev, ...newItems]);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMoreItems();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMoreItems();
        }
      },
      { threshold },
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget, hasMore, loading]);

  return (
    <div className="border rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50">
            {columns.map((column, index) => (
              <TableHead key={index} className={`font-medium ${column.className || ''}`}>
                {column.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>{items.map((item, index) => renderRow(item, index))}</TableBody>
      </Table>

      {/* 加载指示器和交叉观察器目标 */}
      <div ref={observerTarget} className="py-4 flex justify-center">
        {loading && (
          <div className="flex items-center gap-2 text-gray-500">
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>{loadingMessage}</span>
          </div>
        )}
        {!hasMore && items.length > 0 && <p className="text-gray-500">{emptyMessage}</p>}
      </div>
    </div>
  );
};

export { InfiniteScrollTable };
