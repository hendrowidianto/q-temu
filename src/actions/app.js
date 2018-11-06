export const changePageTitle = (newPageTitle) => {
    return {
        type: 'PAGE_TITLE_CHANGE',
        payload: {
            newPageTitle: newPageTitle
        }
    }
}

export const changePageFooter = (newFooterTitle) => {
    return {
        type: 'PAGE_FOOTER_CHANGE',
        payload: {
            newFooterTitle: newFooterTitle
        }
    }
}