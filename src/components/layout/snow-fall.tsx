"use client"

import isBetweenNovAndDec from '@/utils/christmas-validator'
import Snowfall from 'react-snowfall'

export default function SnowFall () {
    return (
        isBetweenNovAndDec() ? <Snowfall color="#fff" /> : null
    )
}