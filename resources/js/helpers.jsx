export const formatMessageDateLong = date => {
    const now = new Date();
    const inputDate = new Date(date);

    if (isToday(inputDate)) {
        return inputDate.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
        });
    } else if (isYesterday(inputDate)) {
        return "Wczoraj" + inputDate.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
        })
    } else if (inputDate.getFullYear() === now.getFullYear()) {
        return inputDate.toLocaleTimeString([], {
            day: '2-digit',
            month: 'short',
        })
    } else {
        return inputDate.toLocaleTimeString()
    }
};

export const formatMessageDateShort = date => {
    const now = new Date();
    const inputDate = new Date(date);

    if (isToday(inputDate)) {
        return inputDate.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
        })
    } else if (isYesterday(inputDate)) {
        return "Wczoraj";
    } else if (inputDate.getFullYear() === now.getFullYear()) {
        return inputDate.toLocaleTimeString([], {
            day: '2-digit',
            month: 'short',
        })
    } else {
        return inputDate.toLocaleTimeString();
    }
}


export const isToday = (date) => {
    const today = new Date();
    return (
        date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear()
    )
}

export const isYesterday = (date) => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return (
        date.getDate() === yesterday.getDate() &&
        date.getMonth() === yesterday.getMonth() &&
        date.getFullYear() === yesterday.getFullYear()
    )
}
