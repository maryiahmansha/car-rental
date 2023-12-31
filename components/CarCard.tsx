"use client"

import { CarProps } from '@/types'
import { calculateCarRent } from '@/utils';
import React from 'react'
import Image from 'next/image';

interface CarCardProps {
    car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
    const { city_mpg, year, make, model, transmission, drive } = car;

    const carRent = calculateCarRent(city_mpg, year);

    return (
        <div className='car-card group'>
            <div className='car-card__content'>
                <h2 className='car-card__content-title'>
                    {make} {model}
                </h2>
            </div>
            <p className='flec my-6 text-[32px] font-extrabold'>
                <span className='self-start text-[14px] font-semibold'>
                    $
                </span>
                {carRent}
                <span className='self-end text-[14px] font-medium'>
                    /day
                </span>
            </p>
            <div className='relative w-full h-40 m-3 object-contain'>
                <Image src="/hero.png" alt="car model" fill priority className='object-contain' />
            </div>
        </div>
    )
}

export default CarCard