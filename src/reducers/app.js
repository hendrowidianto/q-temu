const initialState = {
    pageTitle: 'QTemuan yuk',
    pageFooter: 'React Redux 2018'
}

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'PAGE_TITLE_CHANGE':
            return {
                ...state,
                pageTitle: action.payload.newPageTitle
            }
        break

        case 'PAGE_FOOTER_CHANGE':
            return {
                ...state,
                pageFooter: action.payload.newFooterTitle
            }
        break

        default: 
            return state
    }
}

export default appReducer