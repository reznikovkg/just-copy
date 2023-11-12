import {useCallback, useRef, useState} from "react";
import {useDynamicSizeList} from "@/shared/ui/VirtualScroll/VirtualScroll";
import "./VirtualScrollWidget.scss"

const createItems = () =>
    Array.from({ length: 100_000 }, (_) => ({
        id: Math.random().toString(36).slice(2),
        text: "dasdasdasdasd",
    }));


export function VirtualScrollWidget() {
    const [listItems, setListItems] = useState(createItems);
    const scrollElementRef = useRef<HTMLDivElement>(null);

    const { virtualItems, totalHeight, measureElement } = useDynamicSizeList({
        estimateItemHeight: useCallback(() => 16, []),
        itemsCount: listItems.length,
        getScrollElement: useCallback(() => scrollElementRef.current, []),
        getItemKey: useCallback((index) => listItems[index]!.id, [listItems]),
    });

    return (
        <div
            className={"virtual-scroll-widget"}
            ref={scrollElementRef}
        >
            <div className={"virtual-scroll-widget__container"} style={{ height: totalHeight }}>
                {virtualItems.map((virtualItem) => {
                    const item = listItems[virtualItem.index]!;
                    return (
                        <div
                            className={`virtual-scroll-item virtual-scroll-item__type-${virtualItem.index % 3}`}
                            key={item.id}
                            data-index={virtualItem.index}
                            ref={measureElement}
                            style={{
                                transform: `translateY(${virtualItem.offsetTop}px)`,
                            }}
                        >
                            {virtualItem.index} {item.text}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}