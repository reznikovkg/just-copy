<template>
    <div class="calendar">
        <input
            :value="selectedToString"
            readonly
            @click="toggleCalendar"
        />
        <div v-show="showCalendar" aria-modal="true" class="calendar__selector">
            <div
                v-if="showQuickOptions"
                class="calendar__quick-options"
            >
                <div
                    v-for="quickOption in quickOptions"
                    class="calendar__quick-option"
                    @click="pickDeltaDate(quickOption)"
                >
                    {{ quickOption.name }}
                </div>
            </div>
            <div>
                <div class="calendar__upper">
                    <div class="calendar__button__upper" @click="() => {bufferDate = upperDates.past2}">«</div>
                    <div class="calendar__button__upper" @click="() => {bufferDate = upperDates.past1}">‹</div>
                    <div class="calendar__month-title">{{  pageTitle }}</div>
                    <div class="calendar__button__upper" @click="() => {bufferDate = upperDates.future1}">›</div>
                    <div class="calendar__button__upper" @click="() => {bufferDate = upperDates.future2}">»</div>
                </div>
                <div
                    :class="{
                        'calendar__grid': showDaySelector,
                        'calendar__grid__months': !showDaySelector,
                    }"
                >
                    <div
                        v-if="showDaySelector"
                        v-for="day in dayNames" class="calendar__button"
                    >
                        {{ day }}
                    </div>
                    <div
                        v-for="(date, index) in datesList"
                        :key="index"
                        :class="{
                            'calendar__button--disabled': !date.enabled,
                            'calendar__button--today': date.today,
                            'calendar__button--selected': date.selected && date.enabled,
                            'calendar__big-button': !showDaySelector,
                        }"
                        class="calendar__button"
                        @click="pickDate(date.date)"
                    >
                        {{ dateButtonText(date.date) }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export const SelectorVariants = {
    DAY: "day",
    WEEK: "week",
    MONTH: "month",
    YEAR: "year",
}
export const SelectorModes = {
    SINGLE: "single",
    RANGE: "range",
    SEVERAL: "several",
}

export default {
    name: "Calendar",
    props: {
        showQuickOptions: {type: Boolean, default: false},
        closeAfterSelect: {type: Boolean, default: false},
        selectorVariant: {
            type: String,
            default: SelectorVariants.DAY,
            validator(value) {
                return Object.values(SelectorVariants).includes(value)
            }
        },
        selectorMode: {
            type: String,
            default: SelectorModes.SINGLE,
            validator(value) {
                return Object.values(SelectorModes).includes(value)
            }
        },
    },
    data() {
        return {
            selectedDates: [new Date(), new Date()],
            bufferDate: new Date(),
            showCalendar: false,
            rangeSelectorState: true
        }
    },
    mounted() {
        this.bufferDate.setHours(0, 0, 0, 0)
        this.selectedDates = []
        switch (this.selectorMode){
            case SelectorModes.SINGLE: {
                this.selectedDates.push(new Date(this.bufferDate))
                break
            }
            case SelectorModes.RANGE:  {
                this.selectedDates.push(new Date(this.bufferDate))
                this.selectedDates.push(new Date(this.bufferDate))
                break
            }
        }
    },
    computed: {
        dayNames() {
            return ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс',]
        },

        showDaySelector(){
            return [SelectorVariants.DAY, SelectorVariants.WEEK].includes(this.selectorVariant)
        },

        pageTitle(){
            switch (this.selectorVariant) {
                case SelectorVariants.DAY:
                case SelectorVariants.WEEK:{
                    return this.monthTitle(this.bufferDate)
                }
                case SelectorVariants.MONTH: {
                    return this.bufferDate.getFullYear()
                }
                case SelectorVariants.YEAR: {
                    return ""
                }
            }
        },

        upperDates() {
            const result = {
                past2: new Date(this.bufferDate),
                past1: new Date(this.bufferDate),
                future1: new Date(this.bufferDate),
                future2: new Date(this.bufferDate),
            }
            switch (this.selectorVariant){
                case SelectorVariants.DAY:
                case SelectorVariants.WEEK:{
                    result.past2.setFullYear(this.bufferDate.getFullYear() - 1)
                    result.past1.setMonth(this.bufferDate.getMonth() - 1)
                    result.future1.setMonth(this.bufferDate.getMonth() + 1)
                    result.future2.setFullYear(this.bufferDate.getFullYear() + 1)
                    break
                }
                case SelectorVariants.MONTH: {
                    result.past2.setFullYear(this.bufferDate.getFullYear() - 2)
                    result.past1.setFullYear(this.bufferDate.getFullYear() - 1)
                    result.future1.setFullYear(this.bufferDate.getFullYear() + 1)
                    result.future2.setFullYear(this.bufferDate.getFullYear() + 2)
                    break
                }
                case SelectorVariants.YEAR: {
                    result.past2.setFullYear(this.bufferDate.getFullYear() - 6)
                    result.past1.setFullYear(this.bufferDate.getFullYear() - 3)
                    result.future1.setFullYear(this.bufferDate.getFullYear() + 3)
                    result.future2.setFullYear(this.bufferDate.getFullYear() + 6)
                }
            }
            return result
        },

        datesList(){
            const today = new Date()
            today.setHours(0, 0, 0, 0)
            const date = new Date(this.bufferDate)
            const lastDay = new Date(this.bufferDate)
            const nextMonth = (date.getMonth() + 1) % 12
            let next
            let enabled = false

            switch (this.selectorVariant){
                case SelectorVariants.WEEK:
                case SelectorVariants.DAY:
                    date.setDate(1)
                    date.setDate(date.getDate() - (date.getDay() + 6) % 7)
                    lastDay.setMonth(lastDay.getMonth() + 1, 0)
                    lastDay.setDate(lastDay.getDate() + 7 - lastDay.getDay())
                    next = () => {date.setDate(date.getDate() + 1)}
                    break
                case SelectorVariants.MONTH:
                    date.setMonth(0, 1)
                    lastDay.setMonth(11, 1)
                    today.setDate(1)
                    next = () => {date.setMonth(date.getMonth() + 1)}
                    break
                case SelectorVariants.YEAR:
                    date.setFullYear(date.getFullYear() - 4, 0, 1)
                    lastDay.setFullYear(lastDay.getFullYear() + 4, 0, 1)
                    today.setMonth(0, 1)
                    next = () => {date.setFullYear(date.getFullYear() + 1)}
            }

            const dates = []
            do{
                let weekStart = new Date(date).setDate(date.getDate() - (date.getDay() + 6) % 7)
                if (date.getDate() === 1) {
                        enabled = date.getMonth() !== nextMonth
                    }
                let selected = false
                switch (this.selectorMode) {
                    case SelectorModes.SINGLE: {
                        if(this.selectorVariant === SelectorVariants.WEEK)
                            selected = this.selectedDates[0].getTime() === weekStart
                        else
                            selected = date.getTime() === this.selectedDates[0].getTime()
                        break
                    }
                    case SelectorModes.SEVERAL: {
                        for (const index in Object.values(this.selectedDates)) {
                            if(this.selectorVariant === SelectorVariants.WEEK) {
                                if (this.selectedDates[index].getTime() === weekStart) {
                                    selected = true
                                    break
                                }
                            }
                            else if (date.getTime() === this.selectedDates[index].getTime()) {
                                selected = true
                                break
                            }
                        }
                        break
                    }
                    case SelectorModes.RANGE: {
                        if(this.selectorVariant === SelectorVariants.WEEK)
                            selected = this.selectedDates[0].getTime() <= weekStart &&
                                   weekStart <= this.selectedDates[1].getTime()
                        else
                            selected = this.selectedDates[0].getTime() <= date.getTime() &&
                                   date.getTime() <= this.selectedDates[1].getTime()

                    }
                }
                dates.push({
                    date: new Date(date),
                    enabled: enabled,
                    selected: selected,
                    today: date.getTime() === today.getTime(),
                })
                next()
            } while (date.getTime() <= lastDay.getTime())
            return dates
        },

        selectedToString() {
            switch (this.selectorMode) {
                case SelectorModes.SINGLE: {
                    return this.dateToString(this.selectedDates[0])
                }
                case SelectorModes.SEVERAL: {
                    let result = ""
                    for (const index in this.selectedDates) {
                        result += this.dateToString(this.selectedDates[index]) + ", "
                    }
                    return result.slice(0, result.length - 2)
                }
                case SelectorModes.RANGE: {
                    return `${this.dateToString(this.selectedDates[0])} - ${this.dateToString(this.selectedDates[1])}`
                }
            }
        },

        quickOptions() {
            switch (this.selectorVariant) {
                case SelectorVariants.DAY:
                    return [
                        {name: "Вчера", deltaDays: -1},
                        {name: "Завтра", deltaDays: 1},
                        {name: "Сегодня"},
                        {name: "Неделю назад", deltaWeeks: -1},
                        {name: "Через неделю", deltaWeeks: 1},
                        {name: "Месяц назад", deltaMonths: -1},
                        {name: "Через месяц", deltaMonths: 1},
                        {name: "Год назад", deltaYears: -1},
                        {name: "Через год", deltaYears: 1},
                    ];
                case SelectorVariants.MONTH:
                    return [
                        {name: "Этот месяц"},
                        {name: "Месяц назад", deltaMonths: -1},
                        {name: "Через Месяц", deltaMonths: 1},
                        {name: "Два месяца назад", deltaMonths: -2},
                        {name: "Через два месяца", deltaMonths: 2},
                        {name: "Год назад", deltaYears: -1},
                        {name: "Через год", deltaYears: 1},
                    ];
                case SelectorVariants.WEEK:
                    return [
                        {name: "Эта неделя"},
                        {name: "Неделю назад", deltaWeeks: -1},
                        {name: "Через неделю", deltaWeeks: 1},
                        {name: "Две недели назад", deltaWeeks: -2},
                        {name: "Через две недели", deltaWeeks: 2},
                        {name: "Месяц назад", deltaMonths: -1},
                        {name: "Через месяц", deltaMonths: 1},
                        {name: "Год назад", deltaYears: -1},
                        {name: "Через год", deltaYears: 1},
                    ];
                case SelectorVariants.YEAR:
                    return [
                        {name: "Этот год"},
                        {name: "Год назад", deltaYears: -1},
                        {name: "Через год", deltaYear: 1},
                        {name: "Два года назад", deltaYears: -2},
                        {name: "Через два года", deltaYear: 2},
                    ];
            }
        }
    },

    methods: {
        dateButtonText(date){
            switch (this.selectorVariant){
                case SelectorVariants.DAY:
                case SelectorVariants.WEEK:{
                    return date.getDate()
                }
                case SelectorVariants.MONTH: {
                    return this.monthTitle(date)
                }
                case SelectorVariants.YEAR: {
                    return date.getFullYear()
                }
            }
        },
        monthTitle(date) {
            const monthNames = ["янв ", "фев ", "апр ", "мар ", "май ", "июн ", "июл ", "авг ", "сен ", "окт ", "ноя ", "дек ",]
            return monthNames[date.getMonth()] + date.getFullYear()
        },
        openCalendar() {
            if (this.selectedDates.length > 0)
                this.bufferDate = new Date(this.selectedDates[0])
            else {
                this.bufferDate = new Date()
                this.bufferDate.setHours(0, 0, 0, 0)
            }

            this.showCalendar = true
        },
        closeCalendar() {
            this.showCalendar = false
        },
        toggleCalendar() {
            if (this.showCalendar) {
                this.closeCalendar()
            } else {
                this.openCalendar()
            }
        },
        pickDate(date) {
            if(this.selectorVariant === SelectorVariants.WEEK)
                date.setDate(date.getDate() - (date.getDay() + 6) % 7)
            switch (this.selectorMode) {
                case SelectorModes.SINGLE: {
                    this.selectedDates[0] = date
                    if (this.closeAfterSelect) {
                        this.closeCalendar()
                    }
                    break
                }
                case SelectorModes.SEVERAL: {
                    for (const index in this.selectedDates) {
                        if (date.getTime() === this.selectedDates[index].getTime()) {
                            this.selectedDates.splice(index, 1)
                            return
                        }
                    }
                    this.selectedDates.push(date)
                    break
                }
                case SelectorModes.RANGE: {
                    if(date.getTime() <= this.selectedDates[0].getTime())
                        this.selectedDates[0] = date
                    else if (date.getTime() >= this.selectedDates[1].getTime())
                        this.selectedDates[1] = date
                    else{
                        if (Math.abs(date.getTime() - this.selectedDates[0].getTime()) <
                        Math.abs(date.getTime() - this.selectedDates[1].getTime()))
                        this.selectedDates[0] = date
                    else
                        this.selectedDates[1] = date}
                }
            }
            let newDates = []
            for(const index in this.selectedDates){
                newDates.push(this.selectedDates[index])
            }
            this.selectedDates = newDates
        },

        dateToString(date) {
            if(date === undefined)
                return ""
            switch (this.selectorVariant){
                case SelectorVariants.DAY: {
                    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
                }
                case SelectorVariants.WEEK: {
                    const first = new Date(date)
                    first.setMonth(0, 1)
                    const week = Math.ceil((date - first) / (86400000 * 7)) + 1
                    if (week === 53)
                        return `${date.getFullYear() + 1}-${1}`
                    return `${date.getFullYear()}-${week}`
                }
                case SelectorVariants.MONTH: {
                    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`
                }
                case SelectorVariants.YEAR: {
                    return date.getFullYear()
                }
            }
        },

        pickDeltaDate(quickOption) {
            const dateToPick = new Date()
            dateToPick.setHours(0, 0, 0, 0)
            if(this.selectorVariant === SelectorVariants.MONTH)
                dateToPick.setDate(1)
            if(this.selectorVariant === SelectorVariants.YEAR)
                dateToPick.setMonth(0, 1)

            let deltaDays = quickOption.deltaDays === undefined ? 0 : quickOption.deltaDays
            let deltaMonths = quickOption.deltaMonths === undefined ? 0 : quickOption.deltaMonths
            let deltaYears = quickOption.deltaYears === undefined ? 0 : quickOption.deltaYears

            if (quickOption.deltaWeeks !== undefined)
                deltaDays += quickOption.deltaWeeks * 7
            dateToPick.setDate(dateToPick.getDate() + deltaDays)

            if (deltaMonths !== 0 || deltaYears !== 0) {
                const oldDate = dateToPick.getDate()
                dateToPick.setFullYear(
                    dateToPick.getFullYear() + deltaYears,
                    dateToPick.getMonth() + deltaMonths + 1,
                    0
                )
                if (dateToPick.getDate() > oldDate)
                    dateToPick.setDate(oldDate)
            }

            this.pickDate(dateToPick)
            this.bufferDate = dateToPick
        },
    }
}
</script>

<style scoped lang="less">
@import "styles/styles.less";
</style>