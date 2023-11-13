import {useCallback, useRef} from "react";
import {useDynamicSizeList} from "@/shared/ui/VirtualScroll/VirtualScroll";
import "./NotesWidget.scss"
import {useAppSelector} from "@/shared/model/hooks";
import {SortNotes} from "@/features/notes/SortNotes";
import {FilterNotes} from "@/features/notes/FilterNotes";

export function NotesWidget() {
    const {notes} = useAppSelector(state => state.noteList);
    const scrollElementRef = useRef<HTMLDivElement>(null);

    const {virtualItems, totalHeight, measureElement} = useDynamicSizeList({
        estimateItemHeight: useCallback(() => 16, []),
        itemsCount: notes.length,
        getScrollElement: useCallback(() => scrollElementRef.current, []),
        getItemKey: useCallback((index) => notes[index]!.id, [notes]),
    });

    return (
        <div className={"notes-widget"}>
            <div className={"notes-widget__menu"}>
                <SortNotes/>
                <FilterNotes/>
            </div>
            <div
                className={"virtual-scroll"}
                ref={scrollElementRef}
            >
                <div className={"virtual-scroll__container"} style={{height: totalHeight}}>
                    {virtualItems.map((virtualItem) => {
                        const item = notes[virtualItem.index]!;
                        return (
                            <div
                                className={`virtual-scroll-item virtual-scroll-item__type-${item.id % 3}`}
                                key={item.id}
                                data-index={virtualItem.index}
                                ref={measureElement}
                                style={{
                                    transform: `translateY(${virtualItem.offsetTop}px)`,
                                }}
                            >
                                {`index: ${virtualItem.index}, id: ${item.id}, text: ${item.text}`}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}