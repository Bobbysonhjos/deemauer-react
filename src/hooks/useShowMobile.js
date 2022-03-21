import React, { useState } from 'react'

export const useShowMobile = () => {
    const [showMobile, setShowMobile] = useState(false)

    return {
        showMobile,
        setShowMobile
    }
}
